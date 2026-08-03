import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from './Pagination';

describe('Pagination', () => {
  it('renders pagination links correctly', () => {
    const { getByText } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    );
    expect(getByText('Previous')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('Next')).toBeInTheDocument();
  });
});
