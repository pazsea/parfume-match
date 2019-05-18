export function calculatePoints(next, prev) {
  if (next > prev) {
    const addition = next - prev;
    return addition;
  } else if (next < prev) {
    const subtract = next - prev;
    return subtract;
  } else if (next === prev) {
    return 0;
  }
}
