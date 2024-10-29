const products = [
  {
    id: "Grt223",
    name: "Royal Canin",
    sortDecription:"Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 4000,
    stock: 10,
    image: "/img/royal-canin-gatos.png",
    category: "gatos",
  },
  {
    id: "Grt224",
    name: "Juguete Ratón",
    sortDecription:"Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 420,
    stock: 4,
    image: "/img/imgen-ratos-gatos.jpg",
    category: "gatos",
  },
  {
    id: "Hff556",
    name: "Pro Plan Purina",
    sortDecription:"Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 720,
    stock: 5,
    image: "/img/alimento-purina-perros.png",
    category: "perros",
  },
  {
    id: "Hff557",
    name: "Juguete Pelota",
    sortDecription:"Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 620,
    stock: 17,
    image: "/img/juguete-pelota-perros.jpg",
    category: "perros",
  },
  {
    id: "Wre442",
    name: "Mix Para Periquitos",
    sortDecription:"Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 800,
    stock: 2,
    image: "/img/mix-pericos-aves.jpg",
    category: "aves",
  },
  {
    id: "Wre443",
    name: "Jaula Para Aves",
    sortDecription:"Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 820,
    stock: 6,
    image: "/img/jaula-aves.jpg",
    category: "aves",
  },
];
/*
    const promesa = new Promise( (resolve, reject)=> {
      if(condicion){
        resolve("se resolvio")
      }else{
        reject("se rechazo")
      }
    })
  */

//Obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export { getProducts };
