import { AmountPipe } from './amount.pipe';

describe('AmountPipe', () => {
  const pipe = new AmountPipe();

  it('formats a whole number with thousands separator and BGN suffix', () => {
    expect(pipe.transform(1500)).toBe('1 500.00 BGN');
  });

  it('formats a decimal number with 2 decimal places', () => {
    expect(pipe.transform(340.5)).toBe('340.50 BGN');
  });

  it('formats a large amount with thousands separator', () => {
    expect(pipe.transform(2200)).toBe('2 200.00 BGN');
  });

  it('formats a small amount below 1000', () => {
    expect(pipe.transform(55)).toBe('55.00 BGN');
  });
});
