import Globals from "./components/home/global";
import MainHome from "./components/home/main";
import SectionDedicated from "./components/home/section-dedicated";
import CoreBankingServices from "./components/service/CoreBankingServices";
import InnovativeServices from "./components/service/InnovativeServices";
import PremiumService from "./components/service/PremiumService";
import PrivateServices from "./components/service/PrivateServices";
import SectionService from "./components/service/section-service";
import SpesializeServices from "./components/service/SpesializeServices";


export default function Home() {
  return (
    <section className="bg-black">
      <MainHome />
      <Globals />
      <SectionService />
      <SectionDedicated />
      <CoreBankingServices />
      <SpesializeServices />
      <PrivateServices />
      <PremiumService />
      <InnovativeServices />
      {/* <OurPartner /> */}
      
    </section>
  );
}
