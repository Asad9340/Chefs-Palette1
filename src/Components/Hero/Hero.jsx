function Hero() {
  return (
    <div className="relative max-w-6xl mx-auto md:mt-10">
      <div>
        <img
          className="w-full"
          src="../../../public/images/banner.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] text-center space-y-4 text-white">
        <h2 className="text-2xl md:text-5xl font-bold">
          Discover an exceptional cooking <br /> class tailored for you!
        </h2>
        <p className="px-6 md:px-10 lg:px-14 text-sm md:text-base">
          Step into our kitchen and lets cook up some magic together! From
          savory classics to delectable desserts, weve got recipes to satisfy
          every craving. Join us on a flavorful adventure!
        </p>
        <div className=" flex gap-4 md:gap-6 justify-center">
          <button className="py-2 px-6 bg-[#0BE58A] text-gray-900 rounded-full font-semibold">
            Explore Now
          </button>
          <button className="py-2 px-6 hover:bg-[#0BE58A] border border-gray-400 duration-300 text-white rounded-full font-semibold">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
