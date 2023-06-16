'use client';
import { usaData, mexicoData } from './data/mapData';
import { Country } from './country';

export default function Travel() {
  return (
    <main className="mb-auto flex flex-col items-center p-6">
      <h1 className="text-5xl">Travel</h1>
      <Country
        data={usaData}
        name="USA"
        capitalLocation={
          <circle id="DC" fill="#037ffc" stroke="#000000" strokeWidth="1.5" cx="801.3" cy="251.8" r="5" />
        }
      />
      {/* todo: figure out how to get capital */}
      <Country data={mexicoData} name="Mexico" capitalLocation={<></>} />
    </main>
  );
}
