import { usa, mexico, australia, colombia, canada, vietnam, thailand } from '../data/mapData';
import { Country } from './country';

const translate = true;

export default function Countries() {
  return (
    <>
      <Country
        data={usa}
        name="USA"
        viewBox="5 0 930 600"
        capitalLocation={
          <circle id="DC" className="fill-blue-500" stroke="#000000" strokeWidth="1.5" cx="801.3" cy="251.8" r="5" />
        }
      />
      {/* todo: figure out how to get capital */}
      <Country data={mexico} name="Mexico" viewBox="0 0 1000 640" translate={true} />
      <Country data={australia} name="Australia" viewBox="-150 -5 800 430" />
      <Country data={canada} name="Canada" viewBox="0 30 780 480" />
      <Country data={colombia} name="Colombia" viewBox="-400 100 2000 1050" translate={true} />
      {/* todo: figure out how to widen Vietnam view box */}
      <Country data={vietnam} name="Vietnam" viewBox="0 0 1000 1000" translate={true} />
      <Country data={thailand} name="Thailand" viewBox="0 0 1000 1000" translate={true} />
    </>
  );
}
