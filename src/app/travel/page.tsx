'use client';
import { useState } from 'react';
import { Map } from '../components/map';
import { stateData } from '../data/mapData';
import { UpdatedMapEntry } from '../types/mapDataTypes';
import { MapLegend } from '../components/mapLegend';

export default function Travel() {
  const [updatedStateData, setUpdatedStateData] = useState<UpdatedMapEntry[]>(stateData);

  // todo: rename function name
  const updateStateData = (index: number) => {
    const newHoveredValue = !updatedStateData[index].hovered;
    let newStateData = [...updatedStateData];
    newStateData[index].hovered = newHoveredValue;
    setUpdatedStateData(newStateData);
  };

  return (
    <main className="mb-auto flex flex-col items-center p-24">
      <Map stateData={updatedStateData} onHover={updateStateData} />
      <p>States visited: {stateData.reduce((acc, cur) => (cur.visited ? ++acc : acc), 0)}</p>
      <MapLegend stateData={updatedStateData} updateStateData={updateStateData} />
    </main>
  );
}
