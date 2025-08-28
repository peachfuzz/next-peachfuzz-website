// import { usa, mexico, australia, colombia, canada, vietnam, thailand } from '../data/mapData';
import { countries } from '../data/mapData';
import { Country } from './country';

export default function Countries() {
  return (
    <>
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
