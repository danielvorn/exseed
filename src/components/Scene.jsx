import phone from "../assets/images/phone.png";

export default function Scene() {
  return (
    <section className="hScroll">
      <section className="hScroll_block bg-gradient-to-b from-[#02032A] to-black scroll-smooth font-sans antialiased">
        <main className="h-full min-h-screen md:flex md:flex-row md:flex-wrap md:items-center md:justify-center">
          <section
            className="selection:bg-primary-600 selection:text-white md:flex md:flex-1 md:items-center md:justify-center"
            id="details"
          >
            <div className="duration-1000 animate-in fade-in flex w-full flex-col items-start justify-start space-y-4 p-8 sm:p-24  md:max-w-lg lg:p-8">
              <h1 className="text-5xl font-extrabold text-white lg:text-6xl">
                Stay connected and grow your business from anywhere, anytime
              </h1>
              <div className="text-white">
                Powering businesses in Cambodia through process transformation,
                digital literacy and access to finance
              </div>
              <div className="">
                {/* <div
                className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
                onClick={() => setIsModalOpen(true)}
              >
                Contact Us
              </div> */}
                <div
                  className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-white transition"
                  onClick={() => setIsModalOpen(true)}
                >
                  Contact Us
                </div>
              </div>
            </div>
          </section>
          <section
            className="bg-primary-600 selection:bg-white selection:text-primary-600 md:flex md:min-h-screen md:flex-1 md:items-center md:justify-center"
            id="gallery"
          >
            <div className="flex w-full flex-col items-center justify-start py-16 md:py-8">
              <img
                src={phone}
                alt="App screenshot"
                className="h-auto rounded-3xl duration-1000 animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom"
                draggable="false"
                sizes="(max-width: 800px) 100vw, 800px"
                width="421"
                height="852"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>
        </main>
      </section>
      <div className="hScroll_block">
        <div className="background"></div>
        <span className="letter">F</span>
      </div>
      <div className="hScroll_block">
        <div className="background"></div>
        <span className="letter">O</span>
      </div>
      <div className="hScroll_block">
        <div className="background"></div>
        <span className="letter">C</span>
      </div>
      <div className="hScroll_block">
        <div className="background"></div>
        <span className="letter">U</span>
      </div>
      <div className="hScroll_block">
        <div className="background"></div>
        <span className="letter">S</span>
      </div>
    </section>
  );
}
