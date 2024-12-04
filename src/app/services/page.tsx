import CoreBankingServices from "../components/service/CoreBankingServices";
import InnovativeServices from "../components/service/InnovativeServices";
import PremiumService from "../components/service/PremiumService";
import PrivateServices from "../components/service/PrivateServices";
import SpesializeServices from "../components/service/SpesializeServices";



export default function Services() {
  return (
    <section className="bg-black">
      <CoreBankingServices />
      <SpesializeServices />
      <PrivateServices />
      <PremiumService />
      <InnovativeServices />
    </section>
  );
}
