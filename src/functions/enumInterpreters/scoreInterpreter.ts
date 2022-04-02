export function translateScoreEnumToScoreDomain(value: number): string {
  const score = ['A', 'B', 'C']
  return score[value]
}
