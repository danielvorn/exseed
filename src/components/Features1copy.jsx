import phone from "../assets/images/phone.png";
export const Features1Copy = () => {
  return (
    <section className="">
      <main className="">
        <section className="" id="details">
          <div className="">
            <h1 className="">
              Stay connected and grow your business from anywhere, anytime
            </h1>
            <div className="text-white">
              Powering businesses in Cambodia through process transformation,
              digital literacy and access to finance
            </div>
            <div className=""></div>
          </div>
        </section>
        <section className="" id="gallery">
          <div className="">
            <img
              src={phone}
              alt="App screenshot"
              className="h-auto rounded-3xl duration-1000 animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom"
              draggable="false"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </main>
    </section>
  );
};
