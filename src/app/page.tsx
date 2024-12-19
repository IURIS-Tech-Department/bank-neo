import Banking from "./components/home/banking";
import FeatureCardGrid from "./components/home/featurecard";
// import MainHome from "./components/home/main";
import SectionDedicated from "./components/home/section-dedicated";
import Steps from "./components/home/steps";
import Tabs from "./components/home/tabs";
// import CoreBankingServices from "./components/service/CoreBankingServices";
// import InnovativeServices from "./components/service/InnovativeServices";
// import PremiumService from "./components/service/PremiumService";
// import PrivateServices from "./components/service/PrivateServices";
import SectionService from "./components/service/section-service";
// import SpesializeServices from "./components/service/SpesializeServices";


export default function Home() {
  return (
    <section className="bg-gray-200">
      {/* <MainHome /> */}
      <Banking />
      <FeatureCardGrid />
      <SectionService />
      <SectionDedicated />
      <Steps />
      <Tabs />
      {/* <CoreBankingServices />
      <SpesializeServices />
      <PrivateServices />
      <PremiumService />
      <InnovativeServices /> */}
      {/* <OurPartner /> */}
      
    </section>
  );
}
