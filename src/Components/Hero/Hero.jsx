import './Hero.css';
function Hero() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <div className="banner rounded-3xl px-2 md:px-5 py-8 lg:px-52 lg:py-32 space-y-2 md:space-y-6 text-center m-3 md:m-6">
        <h3 className=" text-white text-xl lg:text-4xl font-bold">
          Discover an exceptional cooking <br /> class tailored for you!
        </h3>
        <p className="text-white text-xs lg:text-lg">
          Step into our kitchen and lets cook up some magic together! From
          savory classics to delectable desserts, weve got recipes to satisfy
          every craving!
        </p>
        <div className="space-x-6">
          <button className="rounded-md bg-[#0BE58A] text-white px-3 md:px-6 py-1 md:py-2  duration-300 font-semibold text-sm md:text-base">
            Explore Now
          </button>
          <button className="rounded-md border border-white text-white px-3 md:px-6 py-1 md:py-2 hover:bg-[#0BE58A] duration-300 font-semibold  text-sm md:text-base">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
