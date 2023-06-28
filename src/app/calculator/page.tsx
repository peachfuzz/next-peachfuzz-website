'use client';
import { useState } from 'react';
import { Button } from '../components/button';
import { CalculatorIcon } from '../components/icons/heroIcons';
import { ExternalLink } from '../components/links';
import { NumberInput } from '../components/numberInput';
import { Table } from '../components/table';
import { Toggle } from '../components/toggle';
import { Entry } from '../types/calculatorTypes';

export default function Calculator() {
  const [numberOne, setNumberOne] = useState<number>();
  const [numberTwo, setNumberTwo] = useState<number>();
  const [data, setData] = useState<Entry[]>([]);
  const [leastCommonMultiple, setLCM] = useState<number>();
  const [greatestCommonDivisor, setGCD] = useState<number>();
  const [showTable, setShowTable] = useState(true);
  const [showLCM, setShowLCM] = useState(false);

  const calculateGreatestCommonDivisor = () => {
    let firstCalculation = !numberOne || Number.isNaN(numberOne) ? 1 : numberOne;
    let secondCalculation = !numberTwo || Number.isNaN(numberTwo) ? 1 : numberTwo;
    setNumberOne(firstCalculation);
    setNumberTwo(secondCalculation);
    let remainder = firstCalculation % secondCalculation;
    let quotient = (firstCalculation - remainder) / secondCalculation;
    const entries = [
      {
        quotient,
        remainder,
      },
    ];
    let index = 0;
    while (entries[index].remainder > 0) {
      firstCalculation = secondCalculation;
      secondCalculation = entries[index].remainder;
      remainder = firstCalculation % secondCalculation;
      quotient = (firstCalculation - remainder) / secondCalculation;
      entries.push({ quotient, remainder });
      index++;
    }
    const gcd = index === 0 ? Math.min(firstCalculation, secondCalculation) : entries[index - 1].remainder;
    return {
      entries,
      gcd,
    };
  };

  const calculateLeastCommonMultiple = (gcd: number) => {
    return ((numberOne ?? 1) * (numberTwo ?? 1)) / gcd;
  };

  const calculate = (e: React.MouseEvent<HTMLButtonElement>) => {
    // todo: check if this is required still
    e.preventDefault(); // required to prevent the page from loading again
    setLCM(undefined);
    setData([]);
    const { entries, gcd }: { entries: Entry[]; gcd: number } = calculateGreatestCommonDivisor();
    setGCD(gcd);
    setData(entries);
    const lcm = calculateLeastCommonMultiple(gcd);
    setLCM(lcm);
  };

  return (
    <main className="mb-auto flex flex-col items-center p-6 md:p-24">
      <div className="max-w-4xl flex flex-col space-y-4">
        <div>
          <div className="flex space-x-1">
            <h1 className="text-5xl">Euclidean Algorithm</h1>
            <CalculatorIcon width="55px" />
          </div>
          <p>
            The Euclidean algorithm is used for calculating the Greatest Common Divisor. You can also calculate the
            Least Common Multiple. Learn more about the{' '}
            <ExternalLink href="en.wikipedia.org/wiki/Euclidean_algorithm" label="Euclidean Algorithm here" />.
          </p>
        </div>

        <div className="text-sm">
          <p>Note: if you do not enter a number, the default values for both numbers are 1.</p>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <NumberInput id="number_one" label="Number ☝🏽" value={numberOne} onChange={setNumberOne} />
          <NumberInput id="number_two" label="Number ✌🏽" value={numberTwo} onChange={setNumberTwo} />
          <Toggle id="show_table" label="Show table" checked={showTable} onChange={() => setShowTable((t) => !t)} />
          <Toggle
            id="calculate_lcm"
            label="Calculate Least Common Multiple"
            checked={showLCM}
            onChange={() => setShowLCM((l) => !l)}
          />
          {/* todo: checkbox that enables "render table without button, just render whatever is in the text boxes" */}
        </div>

        {/* todo: center button? */}
        <div>
          <Button label="Calculate" onClick={calculate} />
        </div>

        {showTable && <Table data={data} heading={['Quotient', 'Remainder']} />}

        {/* todo: add copy to csv button */}

        {/* todo: small bug, if you calculate, then try to edit number 1 or 2, the text below is updated (not updating GCM) */}
        {/* potential fix: always calculate whatever numbers we currently typed */}
        <div>
          {greatestCommonDivisor && (
            <div className="text-xl">
              <p>
                The Greatest Common Divisor is <span className="font-bold">{greatestCommonDivisor}</span>.
              </p>
            </div>
          )}
          {showLCM && leastCommonMultiple && (
            <div className="text-xl">
              <p>
                The Least Common Multiple is <span className="font-bold">{leastCommonMultiple}</span>.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
