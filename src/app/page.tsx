import Image from 'next/image';
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from './components/icons/heroIcons';
import { IconText } from './components/icons/iconText';

export default function Home() {
  const text = `Welcome to my slice of the internet. I have worked professionally as a Software Engineer for ${
    new Date().getFullYear() - 2018
  }+ years. Please reach out on LinkedIn for a copy of my resume.`;
  return (
    <main className="mt-60">
      <section className=" py-16 bg-blueGray-200">
        <div className="mx-auto px-4">
          <div className=" flex flex-col min-w-0 break-words w-full mb-6 rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <Image src="/hector.JPEG" alt="Hector at Dumbo" width={300} height={400} priority />
                </div>
              </div>

              <div className="text-center mt-12 space-y-4">
                <h1 className="text-4xl font-semibold leading-normal text-blueGray-700">Hector</h1>

                <IconText sectionOne={<MapPinIcon width="25px" />} sectionTwo={<p>Seattle, Washington</p>} />
                <IconText sectionOne={<BriefcaseIcon width="25px" />} sectionTwo={<p>Software Engineer</p>} />
                <IconText
                  sectionOne={<AcademicCapIcon width="25px" />}
                  sectionTwo={<p>Seattle Pacific University</p>}
                />
              </div>
              <div className="mt-10 py-10 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {/* todo: add more text */}
                      {text}
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
