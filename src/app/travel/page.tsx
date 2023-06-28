import { RocketLaunchIcon } from '../components/icons/heroIcons';

import dynamic from 'next/dynamic';
import Spinner from '../components/spinner';
const Countries = dynamic(() => import('./components/countries'), { loading: () => <Spinner /> });

export default function Travel() {
  return (
    <main className="mb-auto flex flex-col items-center p-6 md:p-24">
      <div className="flex space-x-2">
        <h1 className="text-5xl">Travel</h1>
        <RocketLaunchIcon width="55px" />
      </div>
      <Countries />
      {/* todo: figure out how we can avoid losing CSS to tailwind purge */}
      <div className="bg-amber-500 bg-blue-500 fill-amber-500 text-amber-500 text-blue-500"></div>
    </main>
  );
}
