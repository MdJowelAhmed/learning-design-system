import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  AspectRatio,
  Center,
  Container,
  Flex,
  Grid,
  Spacer,
  Stack,
} from './index';

describe('Layout Primitives Component System', () => {
  it('renders Stack layout container with direction and gap', () => {
    render(
      <Stack direction="row" gap="lg" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>,
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveClass('flex-row', 'gap-6');
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('renders Flex and Grid primitives', () => {
    render(
      <Grid cols={3} gap="md" data-testid="grid">
        <Flex data-testid="flex">Flex Box</Flex>
      </Grid>,
    );

    expect(screen.getByTestId('grid')).toHaveClass('grid');
    expect(screen.getByTestId('flex')).toHaveClass('flex');
  });

  it('renders Container, Center, Spacer, and AspectRatio primitives', () => {
    render(
      <Container size="lg">
        <Center data-testid="center">
          <div>Centered Content</div>
          <Spacer data-testid="spacer" />
          <AspectRatio ratio="16/9" data-testid="aspect">
            <div>Video</div>
          </AspectRatio>
        </Center>
      </Container>,
    );

    expect(screen.getByTestId('center')).toHaveClass(
      'items-center',
      'justify-center',
    );
    expect(screen.getByTestId('spacer')).toHaveClass('flex-1');
  });
});
