import './Hero.css';
function Hero() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <div className="banner rounded-3xl p-5 lg:px-52 lg:py-32 space-y-4 md:space-y-6 text-center m-3 md:m-6">
        <h3 className=" text-white text-2xl lg:text-4xl font-bold">
          Discover an exceptional cooking <br /> class tailored for you!
        </h3>
        <p className="text-white text-sm lg:text-lg">
          Step into our kitchen and lets cook up some magic together! From
          savory classics to delectable desserts, weve got recipes to satisfy
          every craving!
        </p>
        <div className="space-x-6">
          <button className="rounded-3xl bg-[#0BE58A] text-white px-3 md:px-6 py-1 md:py-2  duration-300 font-semibold">
            Explore Now
          </button>
          <button className="rounded-3xl border border-white text-white px-3 md:px-6 py-1 md:py-2 hover:bg-[#0BE58A] duration-300 font-semibold">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
