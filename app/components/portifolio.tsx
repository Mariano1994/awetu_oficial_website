import { HeroParallax } from "./portifolio-section";
import realLotusProjectImage from "../assets/portifolio-images/real-lotus.png";

import ominiFoodProjectImage from "../assets/portifolio-images/omnifood.png";
import awetudasboardProjectImage from "../assets/portifolio-images/awetu_dasboard.png";
import awetuSatisfyProjectImage from "../assets/portifolio-images/awetu-satisfy.png";

const projects = [
  {
    title: "OminiFood",
    link: "https://omnifood-pied.vercel.app/",
    thumbnail: ominiFoodProjectImage,
  },
  {
    title: "Real Lotus Imobiliaria",
    link: "https://www.reallotus-imobiliaria.com/",
    thumbnail: realLotusProjectImage,
  },
  {
    title: "Awetu Satisfy",
    link: "https://awetu-satisfy.vercel.app/",
    thumbnail: awetuSatisfyProjectImage,
  },

  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
    {
    title: "OminiFood",
    link: "https://omnifood-pied.vercel.app/",
    thumbnail: ominiFoodProjectImage,
  },
  {
    title: "Real Lotus Imobiliaria",
    link: "https://www.reallotus-imobiliaria.com/",
    thumbnail: realLotusProjectImage,
  },
    {
    title: "OminiFood",
    link: "https://omnifood-pied.vercel.app/",
    thumbnail: ominiFoodProjectImage,
  },
  {
    title: "Real Lotus Imobiliaria",
    link: "https://www.reallotus-imobiliaria.com/",
    thumbnail: realLotusProjectImage,
  },

];
const Portifolio = () => {
  return <HeroParallax products={projects} />;
};

export default Portifolio;
