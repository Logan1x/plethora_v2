import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage1.jpg",
    rating: "4.2",
    price: "5000",
    categoryName: "adultCycles",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage2.jpg",
    rating: "3.8",
    price: "15000",
    categoryName: "adultCycles",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage3.jpg",
    rating: "4.6",
    price: "6000",
    categoryName: "adultCycles",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage4.jpg",
    rating: "2.9",
    price: "8000",
    categoryName: "adultCycles",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc:
      "https://plethora-project.netlify.app/assets/cycle-new-arrival-1.jpg",
    rating: "4.9",
    price: "1756",
    categoryName: "kidsCycles",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc:
      "https://plethora-project.netlify.app/assets/cycle-new-arrival-3.jpeg",
    rating: "1.1",
    price: "600",
    categoryName: "kidsCycles",
  },
];
