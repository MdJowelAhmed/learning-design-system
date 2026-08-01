import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

describe('Card', () => {
  it('renders card title and content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Body content goes here</CardContent>
      </Card>,
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Body content goes here')).toBeInTheDocument();
  });
});
