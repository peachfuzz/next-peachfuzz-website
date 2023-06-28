import { usaData, mexicoData, australiaData, colombiaData, canadaData } from '../data/mapData';
import { Country } from './country';

export default function Countries() {
  return (
    <>
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
    </>
  );
}
