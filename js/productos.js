/**
 * Archivo de datos de productos
 * Contiene todos los productos del restaurante El Corralito
 */

const PRODUCTOS = [
  // HAMBURGUESAS
  {
    id: 1,
    nombre: "Hamburguesa Simple",
    descripcion: "Pan suave, carne de res, lechuga y tomate",
    precio: 12000,
    categoria: "Hamburguesas",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 2,
    nombre: "Hamburguesa Mix",
    descripcion: "Doble carne, queso, tocino, huevo y salsa especial",
    precio: 18000,
    categoria: "Hamburguesas",
    imagen: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=400&fit=crop",
    etiqueta: "Más vendido"
  },
  {
    id: 3,
    nombre: "Hamburguesa Premium",
    descripcion: "Carne Angus, queso cheddar, tocino crujiente, aro de cebolla",
    precio: 22000,
    categoria: "Hamburguesas",
    imagen: "https://images.unsplash.com/photo-1599504346566-f9639cd995c1?w=400&h=400&fit=crop",
    etiqueta: "Nuevo"
  },
  {
    id: 4,
    nombre: "Hamburguesa Jalapeño",
    descripcion: "Con jalapeños frescos, queso, y salsa picante",
    precio: 16000,
    categoria: "Hamburguesas",
    imagen: "https://images.unsplash.com/photo-1550547990-acda50142663?w=400&h=400&fit=crop",
    etiqueta: "Promoción"
  },

  // SALCHIPAPAS
  {
    id: 5,
    nombre: "Salchipapa Pequeña",
    descripcion: "Papas fritas, salchicha y salsa de la casa",
    precio: 10000,
    categoria: "Salchipapas",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 6,
    nombre: "Salchipapa Mediana",
    descripcion: "Doble salchicha, papas crujientes y extra salsa",
    precio: 14000,
    categoria: "Salchipapas",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 7,
    nombre: "Salchipapa Monumental",
    descripcion: "Triple salchicha, papas abundantes, queso y extra salsas",
    precio: 18000,
    categoria: "Salchipapas",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: "Más vendido"
  },
  {
    id: 8,
    nombre: "Salchipapa con Queso",
    descripcion: "Papas fritas, salchicha, queso derretido y especias",
    precio: 15000,
    categoria: "Salchipapas",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: "Promoción"
  },

  // HOT DOGS
  {
    id: 9,
    nombre: "Hot Dog Clásico",
    descripcion: "Salchicha de res, pan suave, mostaza y catsup",
    precio: 8000,
    categoria: "Hot Dogs",
    imagen: "https://images.unsplash.com/photo-1495448642081-cd271dd59c44?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 10,
    nombre: "Hot Dog Especial",
    descripcion: "Con queso, cebolla caramelizada y salsa casera",
    precio: 11000,
    categoria: "Hot Dogs",
    imagen: "https://images.unsplash.com/photo-1495448642081-cd271dd59c44?w=400&h=400&fit=crop",
    etiqueta: "Nuevo"
  },
  {
    id: 11,
    nombre: "Hot Dog BBQ",
    descripcion: "Salchicha, cebolla, queso cheddar y salsa BBQ",
    precio: 13000,
    categoria: "Hot Dogs",
    imagen: "https://images.unsplash.com/photo-1495448642081-cd271dd59c44?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 12,
    nombre: "Hot Dog Completo",
    descripcion: "Triple salchicha, queso, huevo, tocino y extra salsas",
    precio: 14000,
    categoria: "Hot Dogs",
    imagen: "https://images.unsplash.com/photo-1495448642081-cd271dd59c44?w=400&h=400&fit=crop",
    etiqueta: "Más vendido"
  },

  // PATACONES
  {
    id: 13,
    nombre: "Patacones Simples",
    descripcion: "Plátanos maduros fritos con salsa de ajo",
    precio: 9000,
    categoria: "Patacones",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 14,
    nombre: "Patacones con Guacamole",
    descripcion: "Patacones crujientes acompañados de guacamole fresco",
    precio: 12000,
    categoria: "Patacones",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: "Nuevo"
  },
  {
    id: 15,
    nombre: "Patacones a la Salsa Roja",
    descripcion: "Patacones con salsa roja picante y queso",
    precio: 11000,
    categoria: "Patacones",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 16,
    nombre: "Patacones Monumental",
    descripcion: "Doble porción con guacamole, salsa roja, queso y carne",
    precio: 16000,
    categoria: "Patacones",
    imagen: "https://images.unsplash.com/photo-1599505090480-ff3a7dee3e8f?w=400&h=400&fit=crop",
    etiqueta: "Más vendido"
  },

  // SALCHICARNE
  {
    id: 17,
    nombre: "Salchicarne Pequeña",
    descripcion: "Carne molida con salchicha y salsa casera",
    precio: 11000,
    categoria: "Salchicarne",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 18,
    nombre: "Salchicarne Mediana",
    descripcion: "Doble salchicha, carne y extra queso",
    precio: 15000,
    categoria: "Salchicarne",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    etiqueta: "Nuevo"
  },
  {
    id: 19,
    nombre: "Salchicarne Premium",
    descripcion: "Triple salchicha, carne Angus, queso cheddar y tocino",
    precio: 19000,
    categoria: "Salchicarne",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    etiqueta: "Más vendido"
  },
  {
    id: 20,
    nombre: "Salchicarne Explosiva",
    descripcion: "Con huevo, queso doble, salsa picante y especias",
    precio: 17000,
    categoria: "Salchicarne",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    etiqueta: "Promoción"
  },

  // BEBIDAS
  {
    id: 21,
    nombre: "Coca Cola",
    descripcion: "Bebida gaseosa - 350ml",
    precio: 3000,
    categoria: "Bebidas",
    imagen: "https://images.unsplash.com/photo-1554866585-c4db4e61e189?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 22,
    nombre: "Jugo Natural",
    descripcion: "Jugo fresco de frutas naturales - 350ml",
    precio: 4000,
    categoria: "Bebidas",
    imagen: "https://images.unsplash.com/photo-1600271886742-f049cd1f3033?w=400&h=400&fit=crop",
    etiqueta: "Nuevo"
  },
  {
    id: 23,
    nombre: "Limonada Casera",
    descripcion: "Limonada refrescante hecha en casa - 500ml",
    precio: 4500,
    categoria: "Bebidas",
    imagen: "https://images.unsplash.com/photo-1600271886742-f049cd1f3033?w=400&h=400&fit=crop",
    etiqueta: null
  },
  {
    id: 24,
    nombre: "Cerveza Artesanal",
    descripcion: "Cerveza artesanal fría - 355ml",
    precio: 5000,
    categoria: "Bebidas",
    imagen: "https://images.unsplash.com/photo-1608270861620-7a6c0b1e6e9f?w=400&h=400&fit=crop",
    etiqueta: "Promoción"
  }
];