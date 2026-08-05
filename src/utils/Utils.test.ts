import { describe, expect, it } from 'vitest';
import {
  clamp,
  formatCurrency,
  formatDate,
  formatNumber,
  sleep,
} from './index';

describe('Enterprise Utilities Package', () => {
  it('formats dates, numbers, and currency correctly', () => {
    const formattedDate = formatDate(new Date(2026, 0, 15), {
      dateStyle: 'short',
    });
    expect(formattedDate).toBeTruthy();

    const formattedNum = formatNumber(1234567);
    expect(formattedNum).toBe('1,234,567');

    const formattedCurr = formatCurrency(99.9, 'USD');
    expect(formattedCurr).toContain('$99.90');
  });

  it('clamps numbers within min and max boundaries', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('resolves sleep promise after specified delay', async () => {
    const start = Date.now();
    await sleep(50);
    expect(Date.now() - start).toBeGreaterThanOrEqual(45);
  });
});
