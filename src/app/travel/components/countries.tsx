// import { usa, mexico, australia, colombia, canada, vietnam, thailand } from '../data/mapData';
import { countries } from '../data/mapData';
import { Country } from './country';
import Link from 'next/link';

export default function Countries() {
  return (
    <>
      <p>I've been to {countries.length} countries! Here's the full list in the order I've first visited them:</p>
      <div>
        <ol type="1">
          {countries.map(({ name }) => (
            <li>
              <Link href={'travel#' + name}>{name}</Link>
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
