import { FeatureImages } from "./"

const Features = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl p-5 relative z-[2]">
        <FeatureImages />
        <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
          <div className="font-grotesk font-normal text-xs uppercase flex items-center mb-4 md:justify-center">
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 0.822266H1V12.8223H5"
                stroke="url(#brackets-left)"
              ></path>
              <defs>
                <linearGradient
                  id="brackets-left"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#82c9ff"></stop>
                  <stop offset="100%" stop-color="#3d5ff8"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="mx-2 font-medium text-default/70">
              Rozpocznij przygodę z Diveworld
            </div>
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08"
                stroke="url(#brackets-right)"
              ></path>
              <defs>
                <linearGradient
                  id="brackets-right"
                  x1="14.635%"
                  x2="14.635%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#82c9ff"></stop>
                  <stop offset="100%" stop-color="#3d5ff8"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-2xl leading-none md:text-3xl lg:text-4xl xl:text-5xl">
            Zanurkuj raz, skorzystaj na zawsze
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Features
