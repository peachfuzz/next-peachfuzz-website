'use client';
import { usaData, mexicoData, australiaData, colombiaData, canadaData } from './data/mapData';
import { Country } from './components/country';
import { RocketLaunchIcon } from '../components/icons/heroIcons';

export default function Travel() {
  return (
    <main className="mb-auto flex flex-col items-center p-6 md:p-24">
      <div className="flex space-x-2">
        <h1 className="text-5xl">Travel</h1>
        <RocketLaunchIcon width="55px" />
      </div>
      <Country
        data={usaData}
        name="USA"
        viewBox="5 0 930 600"
        capitalLocation={
          <circle id="DC" className="fill-blue-500" stroke="#000000" strokeWidth="1.5" cx="801.3" cy="251.8" r="5" />
        }
      />
      {/* todo: figure out how to get capital */}
      <Country data={mexicoData} name="Mexico" viewBox="0 0 1000 640" />
      <Country data={australiaData} name="Australia" viewBox="-150 -5 800 430" />
      <Country data={canadaData} name="Canada" viewBox="0 30 780 480" />
      <Country data={colombiaData} name="Colombia" viewBox="-400 100 2000 1050" />
      {/* todo: figure out how we can avoid losing CSS to tailwind purge */}
      <div className="bg-amber-500 bg-blue-500 fill-amber-500 text-amber-500 text-blue-500"></div>
    </main>
  );
}
