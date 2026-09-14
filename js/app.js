/**
 * Aplicación Principal - El Corralito
 * Gestiona la lógica general, navegación, búsqueda y filtros
 */

class App {
  constructor() {
    this.productosFiltrados = [...PRODUCTOS];
    this.categoriaActual = 'Todos';
    this.observadorImagenes = null;
    this.inicializar();
  }

  inicializar() {
    this.configurarEventos();
    const categoriaURL = new URLSearchParams(window.location.search).get('categoria');
    const categoriaValida = PRODUCTOS.some(producto => producto.categoria === categoriaURL);

    if (categoriaURL && categoriaValida) {
      this.filtrarPorCategoria(categoriaURL);
      return;
    }

    const destacados = [16, 26, 29, 31, 39, 43];
    this.cargarProductos(document.body.dataset.pagina === 'inicio'
      ? PRODUCTOS.filter(producto => destacados.includes(producto.id))
      : PRODUCTOS);
  }

  configurarEventos() {
    // Botón menú móvil
    const btnMenuMobile = document.getElementById('btn-menu-mobile');
    const navMenu = document.getElementById('nav-menu');
    
    if (btnMenuMobile && navMenu) {
      btnMenuMobile.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
        btnMenuMobile.classList.toggle('activo');
        btnMenuMobile.setAttribute('aria-expanded', navMenu.classList.contains('activo'));
      });
    }

    // Cerrar menú al hacer click en un enlace
    const enlaces = document.querySelectorAll('#nav-menu a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        navMenu?.classList.remove('activo');
        btnMenuMobile?.classList.remove('activo');
        btnMenuMobile?.setAttribute('aria-expanded', 'false');
      });
    });

    // Botón carrito
    const btnCarrito = document.getElementById('btn-carrito');
    const carritoLateral = document.getElementById('carrito-lateral');
    const cerrarCarrito = document.getElementById('cerrar-carrito');

    if (btnCarrito && carritoLateral) {
      btnCarrito.addEventListener('click', () => {
        carritoLateral.classList.toggle('activo');
        btnCarrito.setAttribute('aria-expanded', carritoLateral.classList.contains('activo'));
      });
    }

    if (cerrarCarrito && carritoLateral) {
      cerrarCarrito.addEventListener('click', () => {
        carritoLateral.classList.remove('activo');
        btnCarrito?.setAttribute('aria-expanded', 'false');
      });
    }

    // Cerrar carrito al hacer click fuera
    if (carritoLateral) {
      carritoLateral.addEventListener('click', (e) => {
        if (e.target === carritoLateral) {
          carritoLateral.classList.remove('activo');
          btnCarrito?.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Formulario de pedido superpuesto
    const formularioPedidoModal = document.getElementById('formulario');
    const cerrarFormulario = document.getElementById('cerrar-formulario');
    const btnHacerPedido = document.getElementById('btn-hacer-pedido');
    if (btnHacerPedido) btnHacerPedido.addEventListener('click', () => this.abrirFormularioPedido());
    if (window.location.hash === '#formulario') setTimeout(() => this.abrirFormularioPedido(), 0);

    if (cerrarFormulario) cerrarFormulario.addEventListener('click', () => this.cerrarFormularioPedido());
    if (formularioPedidoModal) {
      formularioPedidoModal.addEventListener('click', (e) => {
        if (e.target === formularioPedidoModal) this.cerrarFormularioPedido();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.cerrarFormularioPedido();
    });

    // Búsqueda en tiempo real
    const buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.addEventListener('input', (e) => {
        this.filtrarPorBusqueda(e.target.value);
      });
    }

    // Filtros por categoría
    const botonesCategoria = document.querySelectorAll('[data-categoria]');
    botonesCategoria.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        botonesCategoria.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        this.filtrarPorCategoria(btn.dataset.categoria);
      });
    });

    // Formulario de pedido
    const formPedido = document.getElementById('form-pedido');
    if (formPedido) {
      this.configurarFlujoFormulario(formPedido);
      formPedido.addEventListener('submit', (e) => {
        e.preventDefault();
        this.procesarPedido(formPedido);
      });
    }
  }

  configurarFlujoFormulario(form) {
    const nombre = form.elements.nombre;
    const tipoEntrega = form.elements.tipoEntrega;
    const direccion = form.elements.direccion;
    const referencia = form.elements.referencia;
    const telefono = form.elements.telefono;
    const metodoPago = form.elements.metodoPago;
    const pasos = {
      entrega: document.getElementById('paso-tipo-entrega'),
      domicilio: document.getElementById('paso-domicilio'),
      contacto: document.getElementById('paso-contacto'),
      pago: document.getElementById('paso-pago'),
      final: document.getElementById('paso-final')
    };

    const mostrar = (paso, controles, visible) => {
      pasos[paso].hidden = !visible;
      controles.forEach(control => { control.disabled = !visible; });
    };

    const actualizar = () => {
      const nombreValido = nombre.value.trim().length >= 3;
      mostrar('entrega', [tipoEntrega], nombreValido);

      const hayEntrega = nombreValido && tipoEntrega.value;
      const esDomicilio = tipoEntrega.value === 'domicilio';
      mostrar('domicilio', [direccion, referencia], hayEntrega && esDomicilio);
      direccion.required = esDomicilio;
      referencia.required = esDomicilio;

      const domicilioCompleto = direccion.value.trim().length >= 5 && referencia.value.trim().length >= 3;
      const mostrarContacto = hayEntrega && (!esDomicilio || domicilioCompleto);
      mostrar('contacto', [telefono], mostrarContacto);

      const mostrarPago = mostrarContacto && telefono.value.trim().length >= 7;
      mostrar('pago', [metodoPago], mostrarPago);

      const mostrarFinal = mostrarPago && metodoPago.value !== '';
      pasos.final.hidden = !mostrarFinal;
    };

    [nombre, tipoEntrega, direccion, referencia, telefono, metodoPago].forEach(control => {
      control.addEventListener(control.tagName === 'SELECT' ? 'change' : 'input', actualizar);
    });

    form.addEventListener('reset', () => setTimeout(actualizar, 0));
    actualizar();
  }

  abrirFormularioPedido() {
    const formulario = document.getElementById('formulario');
    if (!formulario) return;
    formulario.classList.add('activo');
    formulario.setAttribute('aria-hidden', 'false');
    document.getElementById('carrito-lateral')?.classList.remove('activo');
    document.getElementById('btn-carrito')?.setAttribute('aria-expanded', 'false');
    document.getElementById('nombre')?.focus();
  }

  cerrarFormularioPedido() {
    const formulario = document.getElementById('formulario');
    if (!formulario) return;
    formulario.classList.remove('activo');
    formulario.setAttribute('aria-hidden', 'true');
  }

  cargarProductos(productosAMostrar = PRODUCTOS) {
    const contenedor = document.getElementById('contenedor-productos');
    if (!contenedor) return;

    // Evita que un observador anterior conserve tarjetas que ya no se muestran.
    this.observadorImagenes?.disconnect();

    if (productosAMostrar.length === 0) {
      contenedor.innerHTML = '<p class="sin-resultados">No se encontraron productos</p>';
      contenedor.setAttribute('aria-busy', 'false');
      this.actualizarContador(0);
      return;
    }

    contenedor.setAttribute('aria-busy', 'true');
    contenedor.innerHTML = productosAMostrar.map(producto => `
      <article class="producto-card producto-card-interactiva" data-producto-id="${producto.id}" tabindex="0" aria-label="Ver detalles de ${producto.nombre}">
        <div class="producto-imagen">
          <span class="skeleton skeleton-imagen" aria-hidden="true"></span>
          <img class="producto-imagen-lazy" data-src="${producto.imagen}" alt="${producto.nombre}" width="400" height="220" decoding="async">
          ${producto.etiqueta ? `<span class="etiqueta etiqueta-${producto.etiqueta.toLowerCase()}">${producto.etiqueta}</span>` : ''}
        </div>
        <div class="producto-body">
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-descripcion">${producto.descripcion}</p>
          <div class="producto-footer">
            <span class="producto-precio">$${producto.precio.toLocaleString('es-CO')}</span>
            <div class="producto-acciones">
              <button type="button" class="btn btn-secundario btn-ver-detalle" onclick="app.verDetalle(${producto.id})" title="Ver detalles de ${producto.nombre}" aria-label="Ver detalles de ${producto.nombre}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
              <button type="button" class="btn btn-primario" onclick="carrito.agregarProducto(${producto.id})">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    this.configurarTarjetasProductos(contenedor);
    this.activarLazyLoading(contenedor);
    contenedor.setAttribute('aria-busy', 'false');
    this.actualizarContador(productosAMostrar.length);
  }

  actualizarContador(cantidad) {
    const contador = document.getElementById('contador-productos');
    if (!contador) return;
    contador.textContent = cantidad === 1 ? '1 producto disponible' : `${cantidad} productos disponibles`;
  }

  configurarTarjetasProductos(contenedor) {
    contenedor.querySelectorAll('.producto-card-interactiva').forEach(tarjeta => {
      const abrirDetalle = () => this.verDetalle(Number(tarjeta.dataset.productoId));

      tarjeta.addEventListener('click', (evento) => {
        if (evento.target.closest('button, a, input, textarea, select')) return;
        abrirDetalle();
      });

      tarjeta.addEventListener('keydown', (evento) => {
        if (evento.target.closest('button, a, input, textarea, select')) return;
        if (evento.key !== 'Enter' && evento.key !== ' ') return;
        evento.preventDefault();
        abrirDetalle();
      });
    });
  }

  activarLazyLoading(contenedor) {
    const imagenes = contenedor.querySelectorAll('.producto-imagen-lazy[data-src]');
    const cargarImagen = (imagen) => {
      if (!imagen.dataset.src) return;

      const finalizarCarga = () => imagen.classList.add('cargada');
      imagen.addEventListener('load', finalizarCarga, { once: true });
      imagen.addEventListener('error', finalizarCarga, { once: true });
      imagen.src = imagen.dataset.src;
      imagen.removeAttribute('data-src');
    };

    if (!('IntersectionObserver' in window)) {
      imagenes.forEach(cargarImagen);
      return;
    }

    this.observadorImagenes = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        cargarImagen(entrada.target);
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '300px 0px' });

    imagenes.forEach(imagen => this.observadorImagenes.observe(imagen));
  }

  filtrarPorBusqueda(termino) {
    const termino_lower = termino.toLowerCase();
    this.productosFiltrados = PRODUCTOS.filter(producto =>
      (producto.nombre.toLowerCase().includes(termino_lower) ||
       producto.descripcion.toLowerCase().includes(termino_lower)) &&
      (this.categoriaActual === 'Todos' || producto.categoria === this.categoriaActual)
    );
    this.cargarProductos(this.productosFiltrados);
  }

  filtrarPorCategoria(categoria) {
    this.categoriaActual = categoria;
    document.querySelectorAll('[data-categoria]').forEach(btn => {
      btn.classList.toggle('activo', btn.dataset.categoria === categoria);
    });
    
    if (categoria === 'Todos') {
      this.productosFiltrados = [...PRODUCTOS];
    } else {
      this.productosFiltrados = PRODUCTOS.filter(p => p.categoria === categoria);
    }

    // Limpiar búsqueda
    const buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.value = '';
    }

    this.cargarProductos(this.productosFiltrados);
  }

  verDetalle(productoId) {
    const producto = PRODUCTOS.find(p => p.id === productoId);
    if (!producto) return;

    // Crear modal de detalle
    const modal = document.createElement('div');
    modal.className = 'modal-detalle activo';
    modal.innerHTML = `
      <div class="modal-contenido">
        <button class="cerrar-modal" onclick="this.parentElement.parentElement.remove()">×</button>
        <div class="modal-grid">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="modal-imagen">
          <div class="modal-info">
            <h2>${producto.nombre}</h2>
            <p class="modal-categoria">${producto.categoria}</p>
            <p class="modal-descripcion">${producto.descripcion}</p>
            <div class="modal-precio">$${producto.precio.toLocaleString('es-CO')}</div>
            <button type="button" class="btn btn-primario btn-grande" onclick="carrito.agregarProducto(${producto.id}); this.closest('.modal-detalle').remove()">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Cerrar modal al hacer click fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  async procesarPedido(form) {
    if (carrito.obtenerCantidadTotal() === 0) {
      this.mostrarNotificacion('Tu carrito está vacío', 'error');
      return;
    }

    const turnstileToken = form.querySelector('[name="cf-turnstile-response"]')?.value || window.turnstile?.getResponse?.() || '';
    if (!turnstileToken) {
      this.mostrarNotificacion('Completa la verificación de seguridad antes de enviar el pedido', 'error');
      return;
    }

    const botonEnviar = form.querySelector('button[type="submit"]');
    const textoOriginal = botonEnviar?.textContent;
    if (botonEnviar) {
      botonEnviar.disabled = true;
      botonEnviar.textContent = 'Enviando pedido…';
      botonEnviar.setAttribute('aria-busy', 'true');
    }

    const tipoEntrega = (form.tipoEntrega.value || '').toLowerCase();
    const metodoPago = (form.metodoPago.value || '').toLowerCase();

    const datosPedido = {
      cliente: {
        nombre: form.nombre.value.trim(),
        telefono: form.telefono.value.trim(),
        direccion: form.direccion.value.trim(),
        referencia: form.referencia.value.trim(),
        tipoEntrega,
        metodoPago,
        observaciones: form.observaciones.value.trim()
      },
      productos: carrito.items.map(item => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad
      })),
      turnstileToken
    };

    try {
      const respuesta = await fetch('https://api.elcorralito.food/pedido-web', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosPedido)
      });
      const resultado = await respuesta.json().catch(() => ({}));

      if (!respuesta.ok || !resultado.success) {
        throw new Error(resultado.message || 'No fue posible enviar el pedido. Inténtalo de nuevo.');
      }

      carrito.vaciarCarrito();
      form.reset();
      window.turnstile?.reset();
      this.cerrarFormularioPedido();
      this.mostrarNotificacion(resultado.message || '¡Pedido recibido correctamente!', 'exito');
    } catch (error) {
      this.mostrarNotificacion(error.message || 'Error de conexión. Inténtalo de nuevo.', 'error');
      window.turnstile?.reset();
    } finally {
      if (botonEnviar) {
        botonEnviar.disabled = false;
        botonEnviar.textContent = textoOriginal;
        botonEnviar.removeAttribute('aria-busy');
      }
    }
  }

  mostrarNotificacion(mensaje, tipo = 'info') {
    const notif = document.createElement('div');
    notif.className = `notificacion notificacion-${tipo}`;
    notif.textContent = mensaje;
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.classList.add('mostrar');
    }, 10);

    setTimeout(() => {
      notif.classList.remove('mostrar');
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  }

  // Método para búsqueda rápida por categoría (para uso desde HTML)
  buscarPorCategoria(categoria) {
    this.filtrarPorCategoria(categoria);
    document.querySelector('[data-categoria]')?.scrollIntoView({ behavior: 'smooth' });
  }
}

// Crear instancia global cuando el DOM esté listo
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new App();
});
