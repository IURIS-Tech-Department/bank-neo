import OrganizationStructure from "../components/careers/organization";

const OrganizationPage = () => {
  return (
    <div className="text-black">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/about.jpg')",
          }}
        />
      </div>
      <OrganizationStructure />
    </div>
  );
};

export default OrganizationPage;
