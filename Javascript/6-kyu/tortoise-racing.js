function race(v1, v2, g) {
  if (v2 < v1) return null

  let speedDiffence = v2 - v1
  let timeNeeded = (g * 3600) / speedDiffence
  return [
    timeNeeded / 3600,
    (timeNeeded % 3600) / 60,
    (timeNeeded % 3600) % 60,
  ].map((t) => Math.floor(t))
}
