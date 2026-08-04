import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search documentation...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for anything...',
    helperText: 'Press Enter to search.',
  },
};

export const WithDebounce: Story = {
  args: {
    label: 'Live Search',
    placeholder: 'Type to search...',
    debounceMs: 300,
    helperText: 'Fires onSearch 300ms after you stop typing.',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <SearchInput
          key={size}
          size={size}
          placeholder={`Search (${size})...`}
        />
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['outlined', 'filled', 'ghost', 'underlined'] as const).map(
        (variant) => (
          <SearchInput
            key={variant}
            variant={variant}
            label={`Variant: ${variant}`}
            placeholder="Search..."
          />
        ),
      )}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    disabled: true,
  },
};
