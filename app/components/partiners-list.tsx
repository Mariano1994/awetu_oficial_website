import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import awetuPartner from "../assets/partners/Logo Preto.png";
import realLotusPartner from "../assets/partners/real-lotus.svg";

const partnes = [
  {
    image: awetuPartner,
    brandName: "Awetu Technologies",
  },
  {
    image: realLotusPartner,
    brandName: "Awetu Technologies",
  },
  {
    image: awetuPartner,
    brandName: "Awetu Technologies",
  },
  {
    image: realLotusPartner,
    brandName: "Awetu Technologies",
  },
];

const PartnersList = () => {
  return (
    <div className="h-[10rem] rounded-md flex flex-col  antialiased bg-transparent  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={partnes} direction="left" speed="normal" />
    </div>
  );
};

export default PartnersList;
