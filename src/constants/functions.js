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

export function getKeysWithHighestValue(o, n) {
  var keys = Object.keys(o);
  keys.sort(function(a, b) {
    return o[b] - o[a];
  });
  return keys.slice(0, n);
}
