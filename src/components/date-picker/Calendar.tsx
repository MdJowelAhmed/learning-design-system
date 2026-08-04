'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  addDays,
  addMonths,
  addYears,
  startOfDay,
  subDays,
  subMonths,
  subYears,
} from 'date-fns';
import { Button } from '../button';
import { CalendarGrid } from './CalendarGrid';
import { CalendarHeader } from './CalendarHeader';
import { calendarContainerVariants } from './DatePicker.styles';
import type { CalendarProps } from './DatePicker.types';
import {
  isDateDisabled,
  isSameDay,
  type DateRange,
  type DateRestrictionOptions,
} from './utils/dateUtils';

export function Calendar({
  mode = 'single',
  selected,
  selectedRange,
  onSelect,
  onRangeSelect,
  defaultViewDate,
  showTodayButton = true,
  showClearButton = true,
  onClear,
  minDate,
  maxDate,
  disabledDates,
  disableWeekends,
  disableFuture,
  disablePast,
  className,
}: CalendarProps) {
  // Navigation month/year view date
  const [viewDate, setViewDate] = useState<Date>(() => {
    if (selected) return startOfDay(selected);
    if (selectedRange?.from) return startOfDay(selectedRange.from);
    if (defaultViewDate) return startOfDay(defaultViewDate);
    return startOfDay(new Date());
  });

  // Range selection hover state
  const [hoverRange, setHoverRange] = useState<DateRange | null>(null);

  // Synchronize view date if selected date changes
  useEffect(() => {
    if (selected) {
      setViewDate(startOfDay(selected));
    }
  }, [selected]);

  const restrictions: DateRestrictionOptions = {
    minDate,
    maxDate,
    disabledDates,
    disableWeekends,
    disableFuture,
    disablePast,
  };

  // Month & Year Navigation
  const handlePrevMonth = () => setViewDate((prev) => subMonths(prev, 1));
  const handleNextMonth = () => setViewDate((prev) => addMonths(prev, 1));
  const handleMonthChange = (m: number) =>
    setViewDate((prev) => new Date(prev.getFullYear(), m, 1));
  const handleYearChange = (y: number) =>
    setViewDate((prev) => new Date(y, prev.getMonth(), 1));

  // Date selection logic
  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date, restrictions)) return;

    if (mode === 'single') {
      onSelect?.(date);
    } else if (mode === 'range') {
      if (!selectedRange?.from || (selectedRange.from && selectedRange.to)) {
        // Start new range
        onRangeSelect?.({ from: date, to: null });
        setHoverRange(null);
      } else {
        // Complete range
        const from = selectedRange.from;
        if (date < from) {
          onRangeSelect?.({ from: date, to: from });
        } else {
          onRangeSelect?.({ from, to: date });
        }
        setHoverRange(null);
      }
    }
  };

  // Range hover preview
  const handleDateHover = (date: Date) => {
    if (mode === 'range' && selectedRange?.from && !selectedRange.to) {
      const from = selectedRange.from;
      if (date < from) {
        setHoverRange({ from: date, to: from });
      } else {
        setHoverRange({ from, to: date });
      }
    }
  };

  // Today button handler
  const handleTodayClick = () => {
    const today = startOfDay(new Date());
    if (!isDateDisabled(today, restrictions)) {
      setViewDate(today);
      if (mode === 'single') {
        onSelect?.(today);
      } else if (mode === 'range') {
        onRangeSelect?.({ from: today, to: today });
      }
    }
  };

  // Keyboard navigation handler for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const current = selected ?? viewDate;
      let nextDate: Date | null = null;

      switch (e.key) {
        case 'ArrowLeft':
          nextDate = subDays(current, 1);
          break;
        case 'ArrowRight':
          nextDate = addDays(current, 1);
          break;
        case 'ArrowUp':
          nextDate = subDays(current, 7);
          break;
        case 'ArrowDown':
          nextDate = addDays(current, 7);
          break;
        case 'PageUp':
          nextDate = e.shiftKey ? subYears(current, 1) : subMonths(current, 1);
          break;
        case 'PageDown':
          nextDate = e.shiftKey ? addYears(current, 1) : addMonths(current, 1);
          break;
        case 'Home':
          nextDate = subDays(current, current.getDay());
          break;
        case 'End':
          nextDate = addDays(current, 6 - current.getDay());
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          handleDateClick(current);
          return;
        default:
          return;
      }

      if (nextDate) {
        e.preventDefault();
        setViewDate(nextDate);
        if (mode === 'single' && !isDateDisabled(nextDate, restrictions)) {
          onSelect?.(nextDate);
        }
      }
    },
    [selected, viewDate, mode, restrictions, onSelect],
  );

  const activeRange = hoverRange ?? selectedRange;

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={calendarContainerVariants({ className })}
      role="region"
      aria-label="Calendar"
    >
      <CalendarHeader
        viewDate={viewDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
        minDate={minDate}
        maxDate={maxDate}
      />

      <CalendarGrid
        viewDate={viewDate}
        selectedDate={selected}
        selectedRange={activeRange}
        restrictions={restrictions}
        mode={mode}
        onDateSelect={handleDateClick}
        onDateHover={handleDateHover}
      />

      {/* Footer controls: Today & Clear */}
      {(showTodayButton || showClearButton) && (
        <div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-2 dark:border-neutral-800">
          {showTodayButton ? (
            <Button
              variant="ghost"
              color="primary"
              size="xs"
              onClick={handleTodayClick}
            >
              Today
            </Button>
          ) : (
            <span />
          )}

          {showClearButton && onClear ? (
            <Button variant="ghost" color="neutral" size="xs" onClick={onClear}>
              Clear
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}

Calendar.displayName = 'Calendar';
