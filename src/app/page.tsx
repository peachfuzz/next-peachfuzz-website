import Image from 'next/image';
import { AcademicCapIcon, BriefcaseIcon, MapPinIcon } from './components/icons/heroIcons';
import { IconText } from './components/icons/iconText';

export default function Home() {
  const text = `Welcome to my slice of the internet. I have worked professionally as a Software Engineer for ${
    new Date().getFullYear() - 2018
  }+ years. Please reach out on LinkedIn for a copy of my resume.`;
  return (
    <main className="mt-60">
      <section className=" bg-blueGray-200 py-16">
        <div className="mx-auto px-4">
          <div className=" -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <Image src="/hector-2.0.JPEG" alt="Hector at Dumbo" width={300} height={400} priority />
                </div>
              </div>

              <div className="mt-10 space-y-4 text-center">
                <h1 className="text-blueGray-700 text-4xl font-semibold leading-normal">Hector</h1>

                <IconText sectionOne={<MapPinIcon width="25px" />} sectionTwo={<p>Seattle, Washington</p>} />
                <IconText sectionOne={<BriefcaseIcon width="25px" />} sectionTwo={<p>Software Engineer</p>} />
                <IconText
                  sectionOne={<AcademicCapIcon width="25px" />}
                  sectionTwo={<p>Seattle Pacific University</p>}
                />
              </div>
              <div className="py-10 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-9/12">
                    <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
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
