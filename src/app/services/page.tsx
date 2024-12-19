import Tabs from "../components/home/tabs";

export default function Services() {
  return (
    <section className="bg-gray-200">
      {/* Hero Section with Background Image and Overlay */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/services.jpg')",
          }}
        />
        <div className="relative flex flex-col justify-center h-full text-white px-20">
          <h1 className="text-3xl text-black md:text-5xl font-bold tracking-tight leading-snug">
            Business Banking Support
          </h1>
          <p className="mt-4 text-sm md:text-lg text-black max-w-3xl">
          Grow your business with our suite of financial tools designed specifically for entrepreneurs and companies. From business accounts to payroll services, we offer solutions that streamline your operations and help you focus on what matters most.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center text-black mt-12">
        <h2 className="relative text-2xl w-full p-4 md:text-3xl font-bold text-center text-black">
          Our Services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block w-40 border-b-4 border-black"></span>
        </h2>
      </div>
      <Tabs />
    </section>
  );
}
