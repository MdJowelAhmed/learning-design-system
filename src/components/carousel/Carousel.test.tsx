import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from './index';

describe('Carousel Component System', () => {
  it('renders carousel structure with slides, controls, dots and progress', () => {
    render(
      <Carousel data-testid="carousel">
        <CarouselProgress />
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>,
    );

    const region = screen.getByRole('region');
    expect(region).toBeInTheDocument();
    expect(region.getAttribute('aria-roledescription')).toBe('carousel');

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Previous slide' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Next slide' }),
    ).toBeInTheDocument();
  });

  it('navigates to next slide when Next button is clicked', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>,
    );

    const nextBtn = screen.getByRole('button', { name: 'Next slide' });
    fireEvent.click(nextBtn);
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('navigates via keyboard arrows (ArrowRight & ArrowLeft)', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const carousel = screen.getByRole('region');
    fireEvent.keyDown(carousel, { key: 'ArrowRight' });
    expect(screen.getByText('Slide 2')).toBeInTheDocument();

    fireEvent.keyDown(carousel, { key: 'ArrowLeft' });
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
  });

  it('navigates to specific slide when dot is clicked', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>,
    );

    const dot3 = screen.getByRole('tab', { name: 'Go to slide 3' });
    fireEvent.click(dot3);
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });
});
