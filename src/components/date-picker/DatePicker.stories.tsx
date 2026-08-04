import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './DatePicker';
import { DateRangePicker } from './DateRangePicker';
import { Calendar } from './Calendar';
import type { DateRange } from './utils/dateUtils';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'ghost', 'underlined'],
    },
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    clearable: { control: 'boolean' },
    required: { control: 'boolean' },
    disableFuture: { control: 'boolean' },
    disablePast: { control: 'boolean' },
    disableWeekends: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ─── Default Single DatePicker ───────────────
export const Default: Story = {
  args: {
    label: 'Date of Birth',
    placeholder: 'DD/MM/YYYY',
    helperText: 'Select your birth date.',
  },
};

// ─── Controlled Single DatePicker ────────────
export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date(2026, 7, 15));
    return (
      <div className="flex max-w-sm flex-col gap-2">
        <DatePicker
          label="Selected Appointment"
          value={date}
          onChange={setDate}
          helperText={
            date ? `Formatted: ${date.toDateString()}` : 'No date selected'
          }
        />
      </div>
    );
  },
};

// ─── Custom Formats ──────────────────────────
export const CustomFormats: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      <DatePicker
        label="European (dd/MM/yyyy)"
        format="dd/MM/yyyy"
        defaultValue={new Date()}
      />
      <DatePicker
        label="US Format (MM/dd/yyyy)"
        format="MM/dd/yyyy"
        defaultValue={new Date()}
      />
      <DatePicker
        label="ISO Format (yyyy-MM-dd)"
        format="yyyy-MM-dd"
        defaultValue={new Date()}
      />
      <DatePicker
        label="Readable (MMM dd, yyyy)"
        format="MMM dd, yyyy"
        defaultValue={new Date()}
      />
    </div>
  ),
};

// ─── Restrictions & Constraints ──────────────
export const Restrictions: Story = {
  render: () => {
    const today = new Date();
    const tenDaysLater = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 10,
    );

    return (
      <div className="flex max-w-sm flex-col gap-4">
        <DatePicker
          label="Disable Future Dates"
          disableFuture
          helperText="Cannot select dates after today."
        />
        <DatePicker
          label="Disable Past Dates"
          disablePast
          helperText="Cannot select dates before today."
        />
        <DatePicker
          label="Disable Weekends"
          disableWeekends
          helperText="Saturday and Sunday disabled."
        />
        <DatePicker
          label="Min / Max Date Range"
          minDate={today}
          maxDate={tenDaysLater}
          helperText="Only next 10 days allowed."
        />
      </div>
    );
  },
};

// ─── All Sizes ───────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <DatePicker
          key={size}
          size={size}
          label={`Size: ${size}`}
          defaultValue={new Date()}
        />
      ))}
    </div>
  ),
};

// ─── All Variants ────────────────────────────
export const Variants: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      {(['outlined', 'filled', 'ghost', 'underlined'] as const).map(
        (variant) => (
          <DatePicker
            key={variant}
            variant={variant}
            label={`Variant: ${variant}`}
            defaultValue={new Date()}
          />
        ),
      )}
    </div>
  ),
};

// ─── Validation States ───────────────────────
export const ValidationStates: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4">
      <DatePicker label="Error State" error="Selected date is invalid." />
      <DatePicker label="Warning State" warning="Date is close to deadline." />
      <DatePicker
        label="Success State"
        success="Appointment available!"
        defaultValue={new Date()}
      />
    </div>
  ),
};

// ─── DateRangePicker Stories ─────────────────
export const DateRangePickerDefault: StoryObj = {
  render: () => (
    <DateRangePicker
      label="Booking Period"
      placeholder="Select date range"
      showPresets
    />
  ),
};

export const DateRangePickerControlled: StoryObj = {
  render: () => {
    const [range, setRange] = useState<DateRange | null>({
      from: new Date(),
      to: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 7,
      ),
    });

    return (
      <div className="flex max-w-sm flex-col gap-2">
        <DateRangePicker
          label="Vacation Schedule"
          value={range}
          onChange={setRange}
          showPresets
        />
        <span className="font-mono text-xs text-neutral-500">
          From: {range?.from ? range.from.toLocaleDateString() : 'None'} | To:{' '}
          {range?.to ? range.to.toLocaleDateString() : 'None'}
        </span>
      </div>
    );
  },
};

// ─── Standalone Calendar Engine ──────────────
export const StandaloneCalendar: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState<Date | null>(new Date());
    return (
      <div className="flex flex-col items-start gap-2">
        <span className="text-xs font-medium text-neutral-500">
          Standalone Calendar Component
        </span>
        <Calendar
          selected={selected}
          onSelect={setSelected}
          showTodayButton
          showClearButton
        />
      </div>
    );
  },
};
