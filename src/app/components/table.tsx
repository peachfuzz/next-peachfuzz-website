import { Entry } from '../types/calculatorTypes';

// todo: make table more generic (currently will only work with Entry)
export function Table({ data, heading }: { data: Entry[]; heading: string[] }) {
  // add initial load in animation
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              {/* todo: change header color (different than row colors) */}
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  {heading.map((head, headID) => (
                    <th key={headID} scope="col" className="px-6 py-4">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((entry: Entry, index: number) => (
                  <tr
                    // todo: change alternating background colors
                    className="even:bg-slate-200 dark:border-neutral-500 dark:bg-neutral-700 dark:odd:bg-neutral-600 dark:even:bg-neutral-700"
                    key={index}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{entry.quotient}</td>
                    <td className="whitespace-nowrap px-6 py-4">{entry.remainder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
