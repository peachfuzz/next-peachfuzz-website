// import { usa, mexico, australia, colombia, canada, vietnam, thailand } from '../data/mapData';
import { countries } from '../data/mapData';
import { Country } from './country';
import Link from 'next/link';

export default function Countries() {
  const continentCount = new Set(countries.map((item) => item.continent)).size;
  return (
    <>
      <p>
        I&apos;ve been to {countries.length} countries! That&apos;s {continentCount} continents!
      </p>
      <p>Here&apos;s the full list in the order I&apos;ve first visited them:</p>
      <div>
        <ol type="1">
          {countries.map(({ name, continent }, index) => (
            <li key={name}>
              <Link href={'travel#' + name}>
                {name} - {continent}
              </Link>
            </li>
          ))}
        </ol>
      </div>
      {countries.map(({ data, name, viewBox, translate, capitalLocation }, index) => (
        <>
          <Country
            countryIndex={index}
            data={data}
            name={name}
            viewBox={viewBox}
            translate={translate}
            capitalLocation={capitalLocation}
          />
        </>
      ))}
    </>
  );
}
