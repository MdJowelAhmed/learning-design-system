import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../badge';
import { Button } from '../button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableLoading,
  TableRow,
} from './index';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Table> = {
  render: () => (
    <Table responsive>
      <TableCaption>A list of recent invoice transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead align="right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">INV-001</TableCell>
          <TableCell>
            <Badge variant="solid" color="success">
              Paid
            </Badge>
          </TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell align="right" numeric>
            $250.00
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">INV-002</TableCell>
          <TableCell>
            <Badge variant="soft" color="warning">
              Pending
            </Badge>
          </TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell align="right" numeric>
            $150.00
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">INV-003</TableCell>
          <TableCell>
            <Badge variant="outline" color="danger">
              Unpaid
            </Badge>
          </TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell align="right" numeric>
            $350.00
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Balance</TableCell>
          <TableCell align="right" numeric>
            $750.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Variants: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="mb-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
          Striped Variant
        </h4>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alex Morgan</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>San Francisco</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sarah Connor</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>Austin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>James Bond</TableCell>
              <TableCell>Security Analyst</TableCell>
              <TableCell>London</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
          Bordered Grid Variant
        </h4>
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead align="right">Q1</TableHead>
              <TableHead align="right">Q2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Revenue</TableCell>
              <TableCell align="right" numeric>
                $45,000
              </TableCell>
              <TableCell align="right" numeric>
                $52,000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Expenses</TableCell>
              <TableCell align="right" numeric>
                $18,000
              </TableCell>
              <TableCell align="right" numeric>
                $21,000
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Table size="xs">
        <TableHeader>
          <TableRow>
            <TableHead>Extra Small (xs)</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>CPU Usage</TableCell>
            <TableCell numeric>14%</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table size="sm">
        <TableHeader>
          <TableRow>
            <TableHead>Small (sm)</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Memory Allocation</TableCell>
            <TableCell numeric>4.2 GB</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const SortableHeaders: StoryObj = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead sortable sortDirection="asc">
            Name (Ascending)
          </TableHead>
          <TableHead sortable sortDirection="desc">
            Date Added (Descending)
          </TableHead>
          <TableHead sortable sortDirection={false}>
            Status (Unsorted)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Analytics Module</TableCell>
          <TableCell>2026-08-01</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const EmptyState: StoryObj = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmpty
          title="No Results Found"
          description="We couldn't find any team members matching your search."
        >
          <Button size="sm" variant="outline" className="mt-3">
            Reset Filters
          </Button>
        </TableEmpty>
      </TableBody>
    </Table>
  ),
};

export const LoadingSkeleton: StoryObj = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableLoading rows={5} columns={4} />
      </TableBody>
    </Table>
  ),
};
