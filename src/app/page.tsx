import Image from 'next/image';
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from './components/icons/heroIcons';
import { IconText } from './components/icons/iconText';

export default function Home() {
  return (
    <main className="profile-page">
      {/* todo: get background image to display */}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')`,
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: `translateZ(0px)` }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>

      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    {/* todo: fix photo position */}
                    <Image src="/hector.JPEG" alt="Hector at Dumbo" width={300} height={400} priority />
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <h1 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">Hector</h1>

                <IconText sectionOne={<MapPinIcon width="25px" />} sectionTwo={<p>Seattle, Washington</p>} />
                <IconText sectionOne={<BriefcaseIcon width="25px" />} sectionTwo={<p>Software Engineer</p>} />
                <IconText
                  sectionOne={<AcademicCapIcon width="25px" />}
                  sectionTwo={<p>Seattle Pacific University</p>}
                />
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {/* todo: add more text */}
                      Welcome to my slice of the internet. I have worked professionally as a Software Engineer for{' '}
                      {new Date().getFullYear() - 2018}+ years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
