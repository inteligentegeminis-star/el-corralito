/**
 * Sistema de Carrito
 * Gestiona agregar, eliminar, modificar cantidad y persistencia en localStorage
 */

class Carrito {
  constructor() {
    this.items = this.cargarDelStorage();
    this.inicializar();
  }

  cargarDelStorage() {
    const data = localStorage.getItem('carrito-el-corralito');
    return data ? JSON.parse(data) : [];
  }

  guardarEnStorage() {
    localStorage.setItem('carrito-el-corralito', JSON.stringify(this.items));
  }

  inicializar() {
    this.actualizarUI();
  }

  agregarProducto(productoId, cantidad = 1) {
    const producto = PRODUCTOS.find(p => p.id === productoId);
    if (!producto) return;

    const itemExistente = this.items.find(item => item.id === productoId);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      this.items.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: cantidad
      });
    }

    this.guardarEnStorage();
    this.actualizarUI();
    this.mostrarToast(`${producto.nombre} agregado al carrito`);
  }

  eliminarProducto(productoId) {
    this.items = this.items.filter(item => item.id !== productoId);
    this.guardarEnStorage();
    this.actualizarUI();
  }

  modificarCantidad(productoId, cantidad) {
    const item = this.items.find(item => item.id === productoId);
    if (item) {
      if (cantidad <= 0) {
        this.eliminarProducto(productoId);
      } else {
        item.cantidad = cantidad;
        this.guardarEnStorage();
        this.actualizarUI();
      }
    }
  }

  obtenerTotal() {
    return this.items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  obtenerCantidadTotal() {
    return this.items.reduce((total, item) => total + item.cantidad, 0);
  }

  vaciarCarrito() {
    this.items = [];
    this.guardarEnStorage();
    this.actualizarUI();
  }

  actualizarUI() {
    this.actualizarBadgeCarrito();
    this.actualizarListaCarrito();
  }

  actualizarBadgeCarrito() {
    const badge = document.getElementById('badge-carrito');
    const cantidad = this.obtenerCantidadTotal();
    
    if (badge) {
      badge.textContent = cantidad;
      badge.style.display = cantidad > 0 ? 'flex' : 'none';
    }
  }

  actualizarListaCarrito() {
    const contenedor = document.getElementById('carrito-items');
    const total = document.getElementById('carrito-total');

    if (!contenedor) return;

    if (this.items.length === 0) {
      contenedor.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
      if (total) total.textContent = '$0';
      return;
    }

    contenedor.innerHTML = this.items.map(item => `
      <div class="carrito-item">
        <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-img">
        <div class="carrito-item-info">
          <h4>${item.nombre}</h4>
          <p class="carrito-item-precio">$${item.precio.toLocaleString('es-CO')}</p>
        </div>
        <div class="carrito-item-cantidad">
          <button class="cantidad-btn" onclick="carrito.modificarCantidad(${item.id}, ${item.cantidad - 1})">−</button>
          <span class="cantidad-valor">${item.cantidad}</span>
          <button class="cantidad-btn" onclick="carrito.modificarCantidad(${item.id}, ${item.cantidad + 1})">+</button>
        </div>
        <button class="eliminar-btn" onclick="carrito.eliminarProducto(${item.id})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    `).join('');

    if (total) {
      total.textContent = `$${this.obtenerTotal().toLocaleString('es-CO')}`;
    }
  }

  mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensaje;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('mostrar');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('mostrar');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }

  obtenerDatos() {
    return {
      items: this.items,
      total: this.obtenerTotal(),
      cantidad: this.obtenerCantidadTotal()
    };
  }
}

// Crear instancia global del carrito
const carrito = new Carrito();