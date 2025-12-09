import Image from 'next/image';

export default function Home() {
  const text = `Welcome to my slice of the internet. I have worked professionally as a Software Engineer for ${
    new Date().getFullYear() - 2018
  }+ years. Please reach out on LinkedIn for a copy of my resume.`;
  return (
    <main>
      <section className=" bg-blueGray-200 py-16">
        <div className="mx-auto px-4">
          <div className="mb-6 flex w-full min-w-0 flex-col break-words rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="bg-neutral-primary-soft border-default shadow-xs flex flex-col items-center justify-center rounded-3xl p-6 dark:bg-gray-900 md:max-w-3xl md:flex-row">
                  <Image src="/hector-2.0.JPEG" alt="Hector at Dumbo" width={300} height={400} />
                  <div className="space-y-4 p-6 text-left">
                    <h1 className="text-blueGray-700 text-4xl font-semibold leading-normal">Hector</h1>

                    <ul>
                      <li>
                        <p>📍 Seattle, Washington</p>
                      </li>
                      <li>
                        <p>💼 Software Engineer</p>
                      </li>
                      <li>
                        <p>🎓 Seattle Pacific University</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-10 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="px-4 md:max-w-3xl lg:w-9/12">
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
