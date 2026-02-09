import { useState } from 'react';
import { parse } from 'cookie';

const getParsedCookie = (value: string) => {
  try {
    return parse(value);
  } catch (e) {
    console.error(e);
    return {};
  }
};

export function CookieVisualizationFlow() {
  const [value, setValue] = useState<string>('');

  const parsedCookie = getParsedCookie(value);

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-y-8">
      <div className="w-full">
        <label className="mb-2 block font-semibold" htmlFor="cookie">
          Serialized cookie
        </label>
        <textarea
          id="cookie"
          placeholder="SESSION=ajsldkfjadklsfhdkasjhfjkdsahfkashflkdsajlfsaey=;TZ=America/Los_Angeles;"
          className="bg-background block w-full rounded-md border p-2"
          rows={10}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>

      {value && parsedCookie && (
        <div className="w-full">
          <p className="mb-2 font-semibold">Parsed cookie</p>
          <div className="min-h-12.5 w-full overflow-auto rounded-md border">
            <table>
              <tbody>
                {Object.entries(parsedCookie)
                  .toSorted(([keyA], [keyB]) => {
                    return keyA.localeCompare(keyB);
                  })
                  .map(([key, value]) => {
                    return (
                      <tr key={key} className="border-b last:border-none">
                        <td className="bg-background sticky left-0 border-r p-2 pr-4">
                          {key}
                        </td>
                        <td className="border-l p-2">{value}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
