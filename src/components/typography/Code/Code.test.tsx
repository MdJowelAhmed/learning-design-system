import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Code } from './Code';

describe('Code Component', () => {
  it('renders inline code snippet by default', () => {
    render(<Code>npm install</Code>);
    const code = screen.getByText('npm install');
    expect(code.tagName).toBe('CODE');
  });

  it('renders block pre code element when variant="block"', () => {
    render(
      <Code variant="block" data-testid="code-block">
        pnpm add my-design-system
      </Code>,
    );
    const block = screen.getByTestId('code-block');
    expect(block.tagName).toBe('PRE');
  });
});
