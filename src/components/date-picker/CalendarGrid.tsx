'use client';

import { CalendarDay } from './CalendarDay';
import {
  getDaysInMonthGrid,
  type DateRange,
  type DateRestrictionOptions,
} from './utils/dateUtils';

export interface CalendarGridProps {
  viewDate: Date;
  selectedDate?: Date | null;
  selectedRange?: DateRange | null;
  restrictions?: DateRestrictionOptions;
  mode?: 'single' | 'range';
  onDateSelect: (date: Date) => void;
  onDateHover?: (date: Date) => void;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function CalendarGrid({
  viewDate,
  selectedDate,
  selectedRange,
  restrictions,
  mode = 'single',
  onDateSelect,
  onDateHover,
}: CalendarGridProps) {
  const daysGrid = getDaysInMonthGrid(viewDate);

  return (
    <div className="pt-2">
      {/* Days of week header */}
      <div className="mb-1 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((day) => (
          <span
            key={day}
            className="py-1 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-500"
          >
            {day}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1" role="grid">
        {daysGrid.map(({ date, isCurrentMonth }) => (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            isCurrentMonth={isCurrentMonth}
            selectedDate={selectedDate}
            selectedRange={selectedRange}
            restrictions={restrictions}
            mode={mode}
            onClick={onDateSelect}
            onMouseEnter={onDateHover}
          />
        ))}
      </div>
    </div>
  );
}

CalendarGrid.displayName = 'CalendarGrid';
