'use client';
import { usaData, mexicoData, australiaData, colombiaData, canadaData } from './data/mapData';
import { Country } from './components/country';

export default function Travel() {
  return (
    <main className="mb-auto flex flex-col items-center p-6">
      <h1 className="text-5xl">Travel</h1>
      <Country
        data={usaData}
        name="USA"
        viewBox="5 0 930 600"
        capitalLocation={
          <circle id="DC" fill="#037ffc" stroke="#000000" strokeWidth="1.5" cx="801.3" cy="251.8" r="5" />
        }
      />
      {/* todo: figure out how to get capital */}
      <Country data={mexicoData} name="Mexico" viewBox="0 0 1000 640" />
      <Country data={australiaData} name="Australia" viewBox="-150 -5 800 430" />
      <Country data={canadaData} name="Canada" viewBox="0 30 780 480" />
      <Country data={colombiaData} name="Colombia" viewBox="-400 100 2000 1050" />
    </main>
  );
}
