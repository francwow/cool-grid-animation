import { StaticImageData } from "next/image";
import clouds1 from "../../../public/images/clouds1.jpg";
import clouds2 from "../../../public/images/clouds2.jpg";
import clouds3 from "../../../public/images/clouds3.jpg";
import coffee1 from "../../../public/images/coffee1.jpg";
import coffee2 from "../../../public/images/coffee2.jpg";
import coffee3 from "../../../public/images/coffee3.jpg";
import rave1 from "../../../public/images/rave1.jpg";
import rave2 from "../../../public/images/rave2.jpg";
import rave3 from "../../../public/images/rave3.jpg";
import tech1 from "../../../public/images/tech1.jpg";
import tech2 from "../../../public/images/tech2.jpg";
import tech3 from "../../../public/images/tech3.jpg";
import universe1 from "../../../public/images/universe1.jpg";
import universe2 from "../../../public/images/universe2.jpg";
import universe3 from "../../../public/images/universe3.jpg";

export type GriItems = {
  id: number;
  items: string[] | StaticImageData[];
  type: "img" | "video";
  text: string;
};

export const gridItems: GriItems[] = [
  { id: 0, items: [clouds1, clouds2, clouds3], type: "img", text: "Clouds" },
  { id: 1, items: ["video1"], type: "video", text: "Travel" },
  { id: 2, items: ["video2"], type: "video", text: "Explore" },
  { id: 3, items: ["video3"], type: "video", text: "Discover" },
  { id: 4, items: [coffee1, coffee2, coffee3], type: "img", text: "Coffee" },
  { id: 5, items: [rave1, rave2, rave3], type: "img", text: "Rave" },
  { id: 6, items: [tech1, tech2, tech3], type: "img", text: "Technology" },
  { id: 7, items: ["video4"], type: "video", text: "Logistics" },
  {
    id: 8,
    items: [universe1, universe2, universe3],
    type: "img",
    text: "Universe",
  },
];
