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
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: "Más vendido"
  },
  {
    id: 2,
    nombre: "Burger Doble Carne Tradicional",
    descripcion: "Pan, doble carne de la casa, tocineta, cebolla caramelizada, lechuga, tomate, salsas y queso mozzarella.",
    precio: 26000,
    categoria: "Hamburguesas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 3,
    nombre: "Burger Doble Carne Corralito",
    descripcion: "Pan, carne de la casa, tocineta, cebolla caramelizada, salsas, queso mozzarella y papa ripio.",
    precio: 23000,
    categoria: "Hamburguesas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
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
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 6,
    nombre: "Burger de Pollo",
    descripcion: "Pan, pechuga de pollo, tocineta, cebolla caramelizada, lechuga, tomate, salsas y queso mozzarella.",
    precio: 19000,
    categoria: "Hamburguesas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
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
    descripcion: "Papa, salchicha ranchera, pollo, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 19000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: "Nuevo"
  },
  {
    id: 9,
    nombre: "Choripollo",
    descripcion: "Papa, pollo, chorizo, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 19000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 10,
    nombre: "Salchicarne",
    descripcion: "Papa, salchicha, carne, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 17000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: "Más vendido"
  },
  {
    id: 11,
    nombre: "Salchipollo",
    descripcion: "Papa, salchicha, pollo, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 17000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 12,
    nombre: "SalchiRanchera",
    descripcion: "Papa, salchicha ranchera, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 16000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 13,
    nombre: "Salchipapa Trifásica",
    descripcion: "Papa, salchicha, chorizo, butifarra, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 16000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 14,
    nombre: "Choripapa",
    descripcion: "Papa, chorizo, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 15000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 15,
    nombre: "Butipapa",
    descripcion: "Papa, butifarra, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
    precio: 13000,
    categoria: "Salchipapas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 16,
    nombre: "Salchipapa Sencilla",
    descripcion: "Papa, salchicha, lechuga, cebolla y salsas tártara y tomate. Piña opcional.",
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
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 18,
    nombre: "Picada Pollo",
    descripcion: "Papa, pollo, lechuga, cebolla, queso costeño y salsas.",
    precio: 17000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 19,
    nombre: "Picada Carne",
    descripcion: "Papa, carne, lechuga, cebolla, queso costeño y salsas.",
    precio: 17000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 20,
    nombre: "Picada para 8-9",
    descripcion: "Papa, pollo, carne, salchicha, chorizo, butifarra, lechuga, cebolla, queso, maíz, papa ripio y salsas tártara y tomate. Piña opcional.",
    precio: 92000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 21,
    nombre: "Picada para 5-6",
    descripcion: "Papa, pollo, carne, salchicha, chorizo, butifarra, lechuga, cebolla, queso, maíz, papa ripio y salsas tártara y tomate. Piña opcional.",
    precio: 59000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 22,
    nombre: "Picada para 4",
    descripcion: "Papa, pollo, carne, salchicha, chorizo, butifarra, lechuga, cebolla, queso, maíz, papa ripio y salsas tártara y tomate. Piña opcional.",
    precio: 44000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 23,
    nombre: "Picada para 3-4",
    descripcion: "Papa, pollo, carne, salchicha, chorizo, butifarra, lechuga, cebolla, queso, maíz, papa ripio y salsas tártara y tomate. Piña opcional.",
    precio: 36000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 24,
    nombre: "Picada para 2",
    descripcion: "Papa, pollo, carne, salchicha, chorizo, butifarra, lechuga, cebolla, queso y salsas tártara y tomate. Piña opcional.",
    precio: 26000,
    categoria: "Picadas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  // ===========================
  // DESGRANADOS
  // ===========================
  {
    id: 25,
    nombre: "Combinado",
    descripcion: "Papa, pollo, carne (res y cerdo), chorizo, butifarra, lechuga, tocineta, cebolla, queso gratinado, maíz y salsas tártara y tomate. Piña opcional.",
    precio: 44000,
    categoria: "Desgranados",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: "Más vendido"
  },
  {
    id: 26,
    nombre: "Clásico Duo",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, tocineta, lechuga, cebolla, queso gratinado, maíz maduro y salsas tártara y tomate. Piña opcional.",
    precio: 36000,
    categoria: "Desgranados",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 27,
    nombre: "Clásico Nuevo",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, tocineta, lechuga, cebolla, queso gratinado, maíz maduro y salsas tártara y tomate. Piña opcional.",
    precio: 26000,
    categoria: "Desgranados",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 28,
    nombre: "Clásico Uno",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, tocineta, lechuga, cebolla, queso gratinado, maíz y salsas tártara y tomate. Piña opcional.",
    precio: 24000,
    categoria: "Desgranados",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 29,
    nombre: "Ligero",
    descripcion: "Papa, pollo, carne, chorizo, butifarra, lechuga, cebolla, queso gratinado, maíz y salsas tártara y tomate. Piña opcional.",
    precio: 21000,
    categoria: "Desgranados",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  // ===========================
  // HOT DOG
  // ===========================
  {
    id: 30,
    nombre: "Hot Dog Estrella",
    descripcion: "Papas, pan, salchicha, pollo, carne, tocineta, maíz, lechuga, cebolla caramelizada, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 18000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: "Especial"
  },
  {
    id: 31,
    nombre: "Hot Dog del Corralito",
    descripcion: "Papas, pan, salchicha, pollo, carne, maíz, lechuga, cebolla caramelizada, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 16000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 32,
    nombre: "Hot Dog Hawaiano",
    descripcion: "Papas, pan, salchicha, lechuga, cebolla caramelizada, piña, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 13000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 33,
    nombre: "Hot Dog Callejerito",
    descripcion: "Papas, pan, salchicha, lechuga, cebolla caramelizada, queso mozzarella, tocineta, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 14000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 34,
    nombre: "Chori-Perro",
    descripcion: "Papas, pan, chorizo, lechuga, cebolla, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 13000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/viIpkry.jpeg",
    etiqueta: null
  },
  {
    id: 35,
    nombre: "Hot Dog Ranchero",
    descripcion: "Papas, pan, salchicha ranchera, lechuga, cebolla, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 14000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/viIpkry.jpeg",
    etiqueta: null
  },
  {
    id: 36,
    nombre: "Hot Dog Sencillo",
    descripcion: "Papas, pan, salchicha, lechuga, cebolla caramelizada, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 11000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/viIpkry.jpeg",
    etiqueta: null
  },
  {
    id: 37,
    nombre: "Buti-Perro",
    descripcion: "Papas, pan, butifarra, lechuga, cebolla caramelizada, queso mozzarella, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 11000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/viIpkry.jpeg",
    etiqueta: null
  },
  {
    id: 38,
    nombre: "Hot Dog Super Sencillo",
    descripcion: "Pan, salchicha, lechuga, cebolla, queso costeño, papa ripio y salsas tártara, BBQ y tomate. Piña opcional.",
    precio: 9000,
    categoria: "Hot Dogs",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  // ===========================
  // PATACONES
  // ===========================
  {
    id: 39,
    nombre: "Patacón Relleno Especial #1",
    descripcion: "Pollo, carne, chorizo, butifarra, tocineta, queso derretido con maíz, salsa tártara y papita ripio.",
    precio: 22500,
    categoria: "Patacones",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: "Recomendado"
  },
  {
    id: 40,
    nombre: "Patacón Relleno Especial #2",
    descripcion: "Pollo, carne, chorizo, butifarra, queso derretido con maíz, salsa tártara y papita ripio.",
    precio: 20500,
    categoria: "Patacones",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 41,
    nombre: "Patacón Relleno Trifásico",
    descripcion: "Salchicha, chorizo, butifarra, queso costeño, salsa tártara y papita ripio.",
    precio: 18500,
    categoria: "Patacones",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  // ===========================
  // SÁNDWICH
  // ===========================
  {
    id: 42,
    nombre: "Sándwich sin papas",
    descripcion: "Incluye lechuga, tomate, cebolla, jamón, queso mozzarella y salsa de la casa. Elige: salchicha ranchera y pollo; chorizo y pollo; butifarra y pollo; salchicha ranchera y carne; chorizo y carne; o butifarra y carne.",
    precio: 16000,
    categoria: "Sándwich",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  {
    id: 43,
    nombre: "Sándwich con papas",
    descripcion: "Incluye lechuga, tomate, cebolla, jamón, queso mozzarella y salsa de la casa. Elige: salchicha ranchera y pollo; chorizo y pollo; butifarra y pollo; salchicha ranchera y carne; chorizo y carne; o butifarra y carne.",
    precio: 18500,
    categoria: "Sándwich",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  // ===========================
  // JUGOS
  // ===========================
  {
    id: 44,
    nombre: "Jugo Natural 600ml",
    descripcion: "Sabores: corozo, maracuyá y tomate de árbol.",
    precio: 4000,
    categoria: "Bebidas",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },

  // ===========================
  // ADICIONES
  // ===========================
  {
    id: 45,
    nombre: "Porción de papas sin queso",
    descripcion: "Porción adicional de papas fritas crocantes.",
    precio: 6000,
    categoria: "Adiciones",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  {
    id: 46,
    nombre: "Porción de papas con queso",
    descripcion: "Porción adicional de papas fritas con queso.",
    precio: 8000,
    categoria: "Adiciones",
    imagen: "https://i.imgur.com/qsRPSCS.png",
    etiqueta: null
  },
  { id: 47, nombre: "Queso gratinado personal", descripcion: "Adición.", precio: 6000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null },
  { id: 48, nombre: "Queso gratinado familiar", descripcion: "Adición.", precio: 10000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null },
  { id: 49, nombre: "Chorizo", descripcion: "Adición.", precio: 5000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null },
  { id: 50, nombre: "Butifarra", descripcion: "Adición.", precio: 5000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null },
  { id: 51, nombre: "Salchicha", descripcion: "Adición.", precio: 4000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null },
  { id: 52, nombre: "Maíz", descripcion: "Adición.", precio: 3000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null },
  { id: 53, nombre: "Queso costeño", descripcion: "Adición.", precio: 3000, categoria: "Adiciones", imagen: "https://i.imgur.com/qsRPSCS.png", etiqueta: null }
];
