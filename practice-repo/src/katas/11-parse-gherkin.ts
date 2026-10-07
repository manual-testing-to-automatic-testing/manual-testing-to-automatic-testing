/**
 * Kata 11 (harder): parse a single Gherkin scenario into its steps.
 * "And" and "But" take the keyword of the step before them.
 */
export type Keyword = 'Given' | 'When' | 'Then';
export interface Step {
  keyword: Keyword;
  text: string;
}
export interface Scenario {
  name: string;
  steps: Step[];
}

export function parseScenario(source: string): Scenario {
  let name: string | undefined;
  const steps: Step[] = [];
  let previous: Keyword | undefined;
  for (const raw of source.split(/\r?\n/)) {
    const line = raw.trim();
    if (line === '' || line.startsWith('#')) continue;
    const scenario = /^Scenario:\s*(.+)$/.exec(line);
    if (scenario) {
      name = scenario[1]!.trim();
      continue;
    }
    const step = /^(Given|When|Then|And|But)\s+(.+)$/.exec(line);
    if (!step) throw new SyntaxError(`unexpected line: ${line}`);
    const word = step[1]!;
    if (word === 'And' || word === 'But') {
      if (!previous) throw new SyntaxError(`"${word}" cannot be the first step`);
    } else {
      previous = word as Keyword;
    }
    steps.push({ keyword: previous!, text: step[2]!.trim() });
  }
  if (!name) throw new SyntaxError('missing "Scenario:" line');
  return { name, steps };
}
