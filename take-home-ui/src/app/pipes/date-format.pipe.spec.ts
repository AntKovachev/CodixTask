import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  const pipe = new DateFormatPipe();

  it('converts ISO date to European format', () => {
    expect(pipe.transform('2025-03-01')).toBe('01.03.2025');
  });

  it('preserves day and month padding', () => {
    expect(pipe.transform('2025-12-25')).toBe('25.12.2025');
  });

  it('handles single-digit day and month', () => {
    expect(pipe.transform('2025-01-07')).toBe('07.01.2025');
  });
});
