import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FadeIn, SlideIn, ScaleIn } from './Motion';

describe('Motion', () => {
  it('renders FadeIn content', () => {
    render(<FadeIn>Animated Content</FadeIn>);
    expect(screen.getByText('Animated Content')).toBeInTheDocument();
  });

  it('renders SlideIn content', () => {
    render(<SlideIn direction="up">Sliding Content</SlideIn>);
    expect(screen.getByText('Sliding Content')).toBeInTheDocument();
  });

  it('renders ScaleIn content', () => {
    render(<ScaleIn>Scaling Content</ScaleIn>);
    expect(screen.getByText('Scaling Content')).toBeInTheDocument();
  });
});
