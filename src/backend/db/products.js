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
    categoryName: "cycle",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage2.jpg",
    rating: "3.8",
    price: "5000",
    categoryName: "cycle",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage3.jpg",
    rating: "3.8",
    price: "5000",
    categoryName: "cycle",
  },
  {
    _id: uuid(),
    title: "Adult Leisure MTB Cycle",
    imgSrc: "https://plethora-project.netlify.app/assets/productImage4.jpg",
    rating: "3.8",
    price: "5000",
    categoryName: "cycle",
  },
];
