import services from "utils/mockAdapter";
import { Product } from "types";
import { v4 as UIDV4 } from "uuid";

import image1 from "assets/images/posts/1.jpg";

const randomElement = <A>(array: any): any =>
  array[Math.floor(Math.random() * array.length)];

//   id: string;
//   title: string;
//   image: string[];
//   description: string;
//   price: number;
//   thumbnail: string;

//posts
let posts: Product[] = [
  {
    id: "5e8882f1f0c9216397e05a9b",
    title: "Best Make POST You Will Read This Year (in 2015)",
    image: [],
    description: "Test",
    price: 100,
    thumbnail: "url",
  },
];

export const delay = (timeout: number) =>
  new Promise((res) => setTimeout(res, timeout));

// ==============================|| MOCK SERVICES ||============================== //

services
  .onGet("/api/posts")
  .reply(
    200,
    JSON.stringify({ posts: posts.slice(0, 5), total: posts.length })
  );
