import { HeroParallax } from "./portifolio-section";
import realLotusProjectImage from "../assets/portifolio-images/real-lotus.png";
import nexterProjectImage from "../assets/portifolio-images/nexter.png";
import ominiFoodProjectImage from "../assets/portifolio-images/omnifood.png";
import eduworldProjectImage from "../assets/portifolio-images/eduworld.png";
import awetudasboardProjectImage from "../assets/portifolio-images/awetu_dasboard.png";

const projects = [
  {
    title: "Nexter",
    link: "https://nexter-kappa.vercel.app",
    thumbnail: nexterProjectImage,
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
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Awetu Dasboard",
    link: "https://awetu-dashboard.vercel.app/organization",
    thumbnail: awetudasboardProjectImage,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
const Portifolio = () => {
  return <HeroParallax products={projects} />;
};

export default Portifolio;
