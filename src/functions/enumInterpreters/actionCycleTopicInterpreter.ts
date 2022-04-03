export function translateActionEnumToActionTopiccycleDomain(
  value: number
): string {
  const actions = [
    'Leitura',
    'Lei Seca',
    'Exercícios 1',
    'Exercícios 2',
    'Revisão',
  ]
  return actions[value]
}
