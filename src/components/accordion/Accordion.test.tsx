import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './Accordion';

describe('Accordion', () => {
  it('expands item content when trigger is clicked', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to WAI-ARIA standards.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(
      screen.queryByText('Yes. It adheres to WAI-ARIA standards.'),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Is it accessible?'));
    expect(
      screen.getByText('Yes. It adheres to WAI-ARIA standards.'),
    ).toBeInTheDocument();
  });
});
