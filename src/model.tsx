export interface Prod{
    id : number;
    image1 : string;
    desc1 : string;
    desc2 : string;
    price : number;

}



// mock api for the products
export const Services: Prod[] = [
  {
    id: 1,
    image1:
      "https://images.unsplash.com/photo-1629732047052-80a436611f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNraW4lMjBzZXJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc1: "County louth",
    desc2:
      "To combat skin that's been compromised by stress, this powerful serum",
    price: 135.0,
  },
  {
    id: 2,
    image1:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29zbWV0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc1: "Foundation Bottle",
    desc2: "Add the foundation bottle to your cosmetics ",
    price: 120,
  },
  {
    id: 3,
    image1:
      "https://images.unsplash.com/photo-1567433517180-d3e56cf7f81e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc21ldGljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc1: "Anti-Acne",
    desc2: "Get your anti-acne serurm now",
    price: 50,
  },
  {
    id: 4,
    image1:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29zbWV0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc1: "lip gloss",
    desc2: "Get your lip-gloss now",
    price: 50,
  },
  {
    id: 5,
    image1:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvc21ldGljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc1: "cosmetic set",
    desc2: "Get your cosmetic set now at reduced market rate",
    price: 100,
  },
  {
    id: 6,
    image1:
      "https://images.unsplash.com/photo-1618330834871-dd22c2c226ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvc21ldGljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc1: "Perfume",
    desc2: "Get your perfume bottle now at reduced price",
    price: 120,
  },
  {
    id: 7,
    image1:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc1: "Watch",
    desc2: "Fantastic wristwatch for your loved ones",
    price: 1200,
  },
  {
    id: 8,
    image1:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc1: "black-watch",
    desc2: "Your summer wristwatch",
    price: 800,
  },
  {
    id: 9,
    image1:
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc1 : "handclock",
    desc2 : "Kepp track of time with ease",
    price : 1200
  },
];