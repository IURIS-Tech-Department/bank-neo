import Tabs from "../components/home/tabs";

export default function Services() {
  return (
    <section className="bg-gray-200">
      {/* Hero Section with Background Image and Overlay */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/services.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-snug">
            Transforming Banking Experience
          </h1>
          <p className="mt-4 text-sm md:text-lg max-w-3xl">
            Empowering you with innovative financial solutions to streamline your business and personal banking needs.
          </p>
          <button className="mt-6 px-6 py-3 border-2 hover:bg-black text-white font-semibold rounded-full shadow-lg transition-all duration-300">
            Learn More
          </button>
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
