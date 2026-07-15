/**
 * Archivo de datos de productos
 * Contiene todos los productos del restaurante El Corralito
 */

const PRODUCTOS = [
  // ===========================
  // HAMBURGUESAS
  // ===========================
  {
    id: 1,
    nombre: "Burger Especial",
    descripcion: "Pan, carne de la casa, tocineta, jamón, butifarra, chorizo, pollo, tomate, cebolla, lechuga, salsas y queso mozzarella.",
    precio: 31000,
    categoria: "Hamburguesas",
    imagen: "/images/burger-especial.jpg",
    etiqueta: "Más vendido"
  },
  {
    id: 2,
    nombre: "Burger Doble Carne Tradicional",
    descripcion: "Pan, doble carne de la casa, tocineta, cebolla caramelizada, lechuga, tomate, salsas y queso mozzarella.",
    precio: 26000,
    categoria: "Hamburguesas",
    imagen: "/images/burger-doble-carne.jpg",
    etiqueta: null
  },
  {
    id: 3,
    nombre: "Burger Doble Carne Corralito",
    descripcion: "Pan, carne de la casa, tocineta, cebolla caramelizada, queso mozzarella, papa ripio.",
    precio: 23000,
    categoria: "Hamburguesas",
    imagen: "/../img/burger-corralito.jpg",
    etiqueta: null
  },
  {
    id: 4,
    nombre: "Burger Mix",
    descripcion: "Pan, carne de la casa, tocineta, butifarra, chorizo, cebolla caramelizada, salsas y queso mozzarella.",
    precio: 21000,
    categoria: "Hamburguesas",
    imagen: "https://i.imgur.com/UxN7d1g.jpeg",
    etiqueta: null
  },
  {
    id: 5,
    nombre: "Burger Tradicional",
    descripcion: "Pan, carne de la casa, tocineta, cebolla caramelizada, lechuga, tomate, salsas y queso mozzarella.",
    precio: 19000,
    categoria: "Hamburguesas",
    imagen: "/images/burger-tradicional.jpg",
    etiqueta: null
  },
  {
    id: 6,
    nombre: "Burger de Pollo",
    descripcion: "Pan, pechuga de pollo, tocineta, cebolla caramelizada, lechuga, tomate, salsas y queso mozzarella.",
    precio: 19000,
    categoria: "Hamburguesas",
    imagen: "/images/burger-pollo.jpg",
    etiqueta: null
  },
  {
    id: 7,
    nombre: "Burger Corralito",
    descripcion: "Pan, carne de la casa, tocineta, cebolla caramelizada, salsas, queso mozzarella y papas.",
    precio: 16000,
    categoria: "Hamburguesas",
    imagen: "https://i.imgur.com/QfD5yK9.jpeg",
    etiqueta: null
  },

  // ===========================
  // SALCHIPAPAS
  // ===========================
  {
    id: 8,
    nombre: "SalchiRancheraPollo",
    descripcion: "Papa, salchicha ranchera, pollo, lechuga, cebolla y salsas.",
    precio: 19000,
    categoria: "Salchipapas",
    imagen: "/images/salchirancherapollo.jpg",
    etiqueta: "Nuevo"
  },
  {
    id: 9,
    nombre: "Choripollo",
    descripcion: "Papa, pollo, chorizo, lechuga, cebolla y salsas.",
    precio: 19000,
    categoria: "Salchipapas",
    imagen: "/images/choripollo.jpg",
    etiqueta: null
  },
  {
    id: 10,
    nombre: "Salchicarne",
    descripcion: "Papa, salchicha, carne, lechuga, cebolla y salsas.",
    precio: 17000,
    categoria: "Salchipapas",
    imagen: "/images/salchicarne.jpg",
    etiqueta: "Más vendido"
  },
  {
    id: 11,
    nombre: "Salchipollo",
    descripcion: "Papa, salchicha, pollo, lechuga, cebolla y salsas.",
    precio: 17000,
    categoria: "Salchipapas",
    imagen: "/images/salchipollo.jpg",
    etiqueta: null
  },
  {
    id: 12,
    nombre: "SalchiRanchera",
    descripcion: "Papa, salchicha ranchera, lechuga, cebolla y salsas.",
    precio: 16000,
    categoria: "Salchipapas",
    imagen: "/images/salchiranchera.jpg",
    etiqueta: null
  },
  {
    id: 13,
    nombre: "Salchipapa Trifásica",
    descripcion: "Papa, salchicha, chorizo, butifarra, lechuga, cebolla y salsas.",
    precio: 16000,
    categoria: "Salchipapas",
    imagen: "/images/salchipapa-trifasica.jpg",
    etiqueta: null
  },
  {
    id: 14,
    nombre: "Choripapa",
    descripcion: "Papa, chorizo, lechuga, cebolla y salsas.",
    precio: 15000,
    categoria: "Salchipapas",
    imagen: "/images/choripapa.jpg",
    etiqueta: null
  },
  {
    id: 15,
    nombre: "Butipapa",
    descripcion: "Papa, butifarra, lechuga, cebolla y salsas.",
    precio: 13000,
    categoria: "Salchipapas",
    imagen: "/images/butipapa.jpg",
    etiqueta: null
  },
  {
    id: 16,
    nombre: "Salchipapa Sencilla",
    descripcion: "Papa, salchicha, lechuga, cebolla y salsas.",
    precio: 12000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/wdJeKsN.png",
    etiqueta: null
  },

  // ===========================
  // PICADAS
  // ===========================
  {
    id: 17,
    nombre: "Picada Personal",
    descripcion: "Papa, carne, pollo, lechuga, cebolla, queso costeño y salsas.",
    precio: 19000,
    categoria: "Picadas",
    imagen: "/images/picada-personal.jpg",
    etiqueta: null
  },
  {
    id: 18,
    nombre: "Picada Pollo",
    descripcion: "Papa, pollo, lechuga, cebolla, queso costeño y salsas.",
    precio: 17000,
    categoria: "Picadas",
    imagen: "/images/picada-pollo.jpg",
    etiqueta: null
  },
  {
    id: 19,
    nombre: "Picada Carne",
    descripcion: "Papa, carne, lechuga, cebolla, queso costeño y salsas.",
    precio: 17000,
    categoria: "Picadas",
    imagen: "/images/picada-carne.jpg",
    etiqueta: null
  },
  {
    id: 20,
    nombre: "Picada para 8-9",
    descripcion: "Picada familiar para 8 a 9 personas.",
    precio: 92000,
    categoria: "Picadas",
    imagen: "/images/picada-8-9.jpg",
    etiqueta: null
  },
  {
    id: 21,
    nombre: "Picada para 5-6",
    descripcion: "Picada familiar para 5 a 6 personas.",
    precio: 59000,
    categoria: "Picadas",
    imagen: "/images/picada-5-6.jpg",
    etiqueta: null
  },
  {
    id: 22,
    nombre: "Picada para 4",
    descripcion: "Picada familiar para 4 personas.",
    precio: 44000,
    categoria: "Picadas",
    imagen: "/images/picada-4.jpg",
    etiqueta: null
  },
  {
    id: 23,
    nombre: "Picada para 3-4",
    descripcion: "Picada para compartir entre 3 y 4 personas.",
    precio: 36000,
    categoria: "Picadas",
    imagen: "/images/picada-3-4.jpg",
    etiqueta: null
  },
  {
    id: 24,
    nombre: "Picada para 2",
    descripcion: "Picada para compartir entre 2 personas.",
    precio: 26000,
    categoria: "Picadas",
    imagen: "/images/picada-2.jpg",
    etiqueta: null
  },

  // ===========================
  // DESGRANADOS
  // ===========================
  {
    id: 25,
    nombre: "Combinado",
    descripcion: "Papa, pollo, carne, res, cerdo, chorizo, butifarra, queso gratinado y maíz.",
    precio: 44000,
    categoria: "Desgranados",
    imagen: "/images/combinado.jpg",
    etiqueta: "Más vendido"
  },
  {
    id: 26,
    nombre: "Clásico Duo",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, queso gratinado y maíz.",
    precio: 36000,
    categoria: "Desgranados",
    imagen: "/images/clasico-duo.jpg",
    etiqueta: null
  },
  {
    id: 27,
    nombre: "Clásico Nuevo",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, queso gratinado y maíz.",
    precio: 26000,
    categoria: "Desgranados",
    imagen: "/images/clasico-nuevo.jpg",
    etiqueta: null
  },
  {
    id: 28,
    nombre: "Clásico Uno",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, queso gratinado y maíz.",
    precio: 24000,
    categoria: "Desgranados",
    imagen: "/images/clasico-uno.jpg",
    etiqueta: null
  },
  {
    id: 29,
    nombre: "Ligero",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, queso gratinado y maíz.",
    precio: 21000,
    categoria: "Desgranados",
    imagen: "/images/ligero.jpg",
    etiqueta: null
  },

  // ===========================
  // HOT DOG
  // ===========================
  {
    id: 30,
    nombre: "Hot Dog Estrella",
    descripcion: "Hot dog especial con múltiples ingredientes de la casa.",
    precio: 18000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-estrella.jpg",
    etiqueta: "Especial"
  },
  {
    id: 31,
    nombre: "Hot Dog del Corralito",
    descripcion: "Hot dog especial de la casa.",
    precio: 16000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-corralito.jpg",
    etiqueta: null
  },
  {
    id: 32,
    nombre: "Hot Dog Hawaiano",
    descripcion: "Con piña y queso mozzarella.",
    precio: 13000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-hawaiano.jpg",
    etiqueta: null
  },
  {
    id: 33,
    nombre: "Hot Dog Callejerito",
    descripcion: "Hot dog con papita ripio y salsas.",
    precio: 14000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-callejerito.jpg",
    etiqueta: null
  },
  {
    id: 34,
    nombre: "Chori-Perro",
    descripcion: "Hot dog con chorizo.",
    precio: 13000,
    categoria: "Hot Dogs",
    imagen: "/images/chori-perro.jpg",
    etiqueta: null
  },
  {
    id: 35,
    nombre: "Hot Dog Ranchero",
    descripcion: "Con salchicha ranchera.",
    precio: 14000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-ranchero.jpg",
    etiqueta: null
  },
  {
    id: 36,
    nombre: "Hot Dog Sencillo",
    descripcion: "Hot dog clásico.",
    precio: 11000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-sencillo.jpg",
    etiqueta: null
  },
  {
    id: 37,
    nombre: "Buti-Perro",
    descripcion: "Hot dog con butifarra.",
    precio: 11000,
    categoria: "Hot Dogs",
    imagen: "/images/buti-perro.jpg",
    etiqueta: null
  },
  {
    id: 38,
    nombre: "Hot Dog Super Sencillo",
    descripcion: "Hot dog sencillo con extras.",
    precio: 9000,
    categoria: "Hot Dogs",
    imagen: "/images/hotdog-super-sencillo.jpg",
    etiqueta: null
  },

  // ===========================
  // PATACONES
  // ===========================
  {
    id: 39,
    nombre: "Patacón Relleno Especial",
    descripcion: "Patacón con pollo, carne y queso.",
    precio: 22500,
    categoria: "Patacones",
    imagen: "/images/patacon-especial.jpg",
    etiqueta: "Recomendado"
  },
  {
    id: 40,
    nombre: "Patacón Relleno",
    descripcion: "Patacón con pollo y carne.",
    precio: 20500,
    categoria: "Patacones",
    imagen: "/images/patacon-relleno.jpg",
    etiqueta: null
  },
  {
    id: 41,
    nombre: "Patacón Relleno Trifásico",
    descripcion: "Patacón con pollo, carne y chorizo.",
    precio: 18500,
    categoria: "Patacones",
    imagen: "/images/patacon-trifasico.jpg",
    etiqueta: null
  },

  // ===========================
  // SÁNDWICH
  // ===========================
  {
    id: 42,
    nombre: "Sándwich",
    descripcion: "Disponible con diferentes proteínas. Con papas o sin papas.",
    precio: 16000,
    categoria: "Sándwich",
    imagen: "/images/sandwich.jpg",
    etiqueta: null
  },

  // ===========================
  // JUGOS
  // ===========================
  {
    id: 43,
    nombre: "Jugo Natural 600ml",
    descripcion: "Sabores: corozo, maracuyá y tomate de árbol.",
    precio: 4000,
    categoria: "Bebidas",
    imagen: "/images/jugos.jpg",
    etiqueta: null
  }
];