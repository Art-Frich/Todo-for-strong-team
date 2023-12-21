export default function assertPriority(value: number): asserts value is 1 | 2 | 3 | 4 | 5 {
  if (value < 1 || value > 5) {
    throw new Error('Priority value out of range');
  }
}
