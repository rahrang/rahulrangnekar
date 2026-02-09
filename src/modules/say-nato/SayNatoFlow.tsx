import { useState, type ReactNode } from 'react';

const REFERENCE_TABLE: Record<string, string | undefined> = {
  A: 'Alpha',
  B: 'Bravo',
  C: 'Charlie',
  D: 'Delta',
  E: 'Echo',
  F: 'Foxtrot',
  G: 'Golf',
  H: 'Hotel',
  I: 'India',
  J: 'Juliet',
  K: 'Kilo',
  L: 'Lima',
  M: 'Mike',
  N: 'November',
  O: 'Oscar',
  P: 'Papa',
  Q: 'Quebec',
  R: 'Romeo',
  S: 'Sierra',
  T: 'Tango',
  U: 'Uniform',
  V: 'Victor',
  W: 'Whiskey',
  X: 'X-ray',
  Y: 'Yankee',
  Z: 'Zulu',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
} as const;

export function SayNatoFlow() {
  const [value, setValue] = useState<string>('');

  return (
    <div className="mx-auto flex w-full flex-col gap-y-8">
      <div className="w-full">
        <label className="mb-2 block font-semibold" htmlFor="text-input">
          Text
        </label>
        <input
          id="text-input"
          type="text"
          placeholder="CJRAQW"
          className="bg-background block w-full rounded-md border p-2"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>

      {value && (
        <div className="w-full">
          <p className="mb-4 font-semibold">Phonetic text</p>

          <ul className="space-y-8">
            {value
              .split(' ')
              .filter((w) => w.length > 0)
              .map((word) => (
                <li>
                  <WordDisplay word={word} />
                </li>
              ))}
          </ul>
        </div>
      )}

      <ReferenceTable />
    </div>
  );
}

function WordDisplay({ word }: { word: string }) {
  const characters = word.toUpperCase().split('');

  return (
    <div>
      <p className="text-md mb-1 font-mono uppercase">{word}</p>
      <ul className="list-disc">
        {characters.map((character) => {
          return <CharacterDisplay key={character} character={character} />;
        })}
      </ul>
    </div>
  );
}

function CharacterDisplay({ character }: { character: string }) {
  const word = REFERENCE_TABLE[character.toUpperCase()];

  let content: ReactNode = null;
  if (!Number.isNaN(Number(character))) {
    content = <span className="font-semibold">{word}</span>;
  } else {
    content = (
      <>
        <span className="inline-block font-mono font-semibold">
          {character.toUpperCase()}
        </span>
        {word && (
          <>
            <span className="text-muted"> as in </span>
            <span className="font-semibold">{word}</span>
          </>
        )}
      </>
    );
  }

  return <li className="hover:bg-accent/10 w-64 rounded px-2">{content}</li>;
}

function ReferenceTable() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Reference Table</h2>
      <p className="text-muted mb-2">
        See{' '}
        <a
          href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet"
          target="_blank"
          className="text-accent underline"
        >
          Wikipedia
        </a>{' '}
        for a more complete list.
      </p>
      <table className="border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-2 py-2 text-left">Letter / Digit</th>
            <th className="px-8 text-left">Word</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(REFERENCE_TABLE).map(([key, value]) => (
            <tr
              key={key}
              className="hover:bg-accent/10 border-b last:border-none"
            >
              <td className="px-2 py-1 text-left">{key}</td>
              <td className="px-8 text-left">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
