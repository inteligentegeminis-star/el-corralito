/**
 * Integración con WhatsApp
 * Genera el mensaje del pedido y redirige a WhatsApp
 */

const NUMERO_WHATSAPP = '573225463698'; // Reemplazar con tu número

class WhatsAppIntegracion {
  constructor(numeroWhatsApp = NUMERO_WHATSAPP) {
    this.numero = numeroWhatsApp;
  }

  generarMensajePedido(datos) {
    const { items, total, cliente } = datos;

    let mensaje = '🍔 EL CORRALITO\n';
    mensaje += 'Donde el sabor es la estrella ⭐\n\n';
    mensaje += 'Hola, quiero realizar el siguiente pedido:\n\n';
    mensaje += '─────────────────────────────────\n';

    items.forEach(item => {
      mensaje += `${item.cantidad}x ${item.nombre}\n`;
      mensaje += `   $${(item.precio * item.cantidad).toLocaleString('es-CO')}\n`;
    });

    mensaje += '─────────────────────────────────\n';
    mensaje += `TOTAL: $${total.toLocaleString('es-CO')}\n\n`;

    mensaje += '📋 DATOS DEL CLIENTE\n';
    mensaje += `Nombre: ${cliente.nombre}\n`;
    mensaje += `Teléfono: ${cliente.telefono}\n`;
    mensaje += `Barrio: ${cliente.barrio}\n`;
    mensaje += `Dirección: ${cliente.direccion}\n`;

    if (cliente.observaciones) {
      mensaje += `Observaciones: ${cliente.observaciones}\n`;
    }

    mensaje += '\nGracias por tu pedido. ¡Estamos preparando tu comida! 🚀';

    return mensaje;
  }

  enviarPedido(datos) {
    const mensaje = this.generarMensajePedido(datos);
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${this.numero}?text=${mensajeCodificado}`;
    
    window.open(url, '_blank');
  }

  verificarCarritoNoVacio() {
    return carrito.obtenerCantidadTotal() > 0;
  }

  validarFormulario(formulario) {
    const nombre = formulario.nombre?.trim();
    const telefono = formulario.telefono?.trim();
    const barrio = formulario.barrio?.trim();
    const direccion = formulario.direccion?.trim();

    if (!nombre || nombre.length < 3) {
      return { valido: false, mensaje: 'Por favor ingresa un nombre válido' };
    }

    if (!telefono || telefono.length < 7) {
      return { valido: false, mensaje: 'Por favor ingresa un teléfono válido' };
    }

    if (!barrio || barrio.length < 2) {
      return { valido: false, mensaje: 'Por favor ingresa un barrio válido' };
    }

    if (!direccion || direccion.length < 5) {
      return { valido: false, mensaje: 'Por favor ingresa una dirección válida' };
    }

    return { valido: true };
  }

  procesarPedido(formulario) {
    // Validar que el carrito no esté vacío
    if (!this.verificarCarritoNoVacio()) {
      return { exito: false, mensaje: 'Tu carrito está vacío' };
    }

    // Validar formulario
    const validacion = this.validarFormulario(formulario);
    if (!validacion.valido) {
      return { exito: false, mensaje: validacion.mensaje };
    }

    // Preparar datos del pedido
    const { items, total } = carrito.obtenerDatos();
    const datosCompletos = {
      items,
      total,
      cliente: {
        nombre: formulario.nombre.trim(),
        telefono: formulario.telefono.trim(),
        barrio: formulario.barrio.trim(),
        direccion: formulario.direccion.trim(),
        observaciones: formulario.observaciones?.trim() || ''
      }
    };

    // Enviar a WhatsApp
    this.enviarPedido(datosCompletos);

    // Vaciar carrito después de enviar
    carrito.vaciarCarrito();

    return { exito: true, mensaje: 'Pedido enviado a WhatsApp' };
  }
  generarMensajePedido(datos) {
    const { items, total, cliente } = datos;
    let mensaje = 'EL CORRALITO\n\n';
    mensaje += 'Pedido:\n';
    items.forEach(item => {
      mensaje += `${item.cantidad}x ${item.nombre} - $${(item.precio * item.cantidad).toLocaleString('es-CO')}\n`;
    });
    mensaje += `\nTOTAL: $${total.toLocaleString('es-CO')}\n\n`;
    mensaje += 'DATOS DE ENTREGA\n';
    mensaje += `Nombre: ${cliente.nombre}\n`;
    mensaje += `Modalidad: ${cliente.tipoEntrega}\n`;
    if (cliente.tipoEntrega === 'Domicilio') {
      mensaje += `Direccion: ${cliente.direccion}\n`;
      mensaje += `Referencia: ${cliente.referencia}\n`;
    }
    mensaje += `Contacto: ${cliente.telefono}\n`;
    mensaje += `Pago: ${cliente.metodoPago}\n`;
    if (cliente.observaciones) mensaje += `Observaciones: ${cliente.observaciones}\n`;
    mensaje += '\nGracias por tu pedido.';
    return mensaje;
  }

  validarFormulario(cliente) {
    const nombre = cliente.nombre?.trim();
    const telefono = cliente.telefono?.trim();
    const tipoEntrega = cliente.tipoEntrega?.trim();
    const metodoPago = cliente.metodoPago?.trim();

    if (!nombre || nombre.length < 3) return { valido: false, mensaje: 'Ingresa un nombre valido' };
    if (!['Recoger en el local', 'Domicilio', 'Comer en el restaurante'].includes(tipoEntrega)) return { valido: false, mensaje: 'Selecciona como recibiras el pedido' };
    if (tipoEntrega === 'Domicilio' && (!cliente.direccion?.trim() || !cliente.referencia?.trim())) return { valido: false, mensaje: 'Ingresa la direccion y un lugar de referencia' };
    if (!telefono || telefono.length < 7) return { valido: false, mensaje: 'Ingresa un contacto valido' };
    if (!['Efectivo', 'Transferencia'].includes(metodoPago)) return { valido: false, mensaje: 'Selecciona un metodo de pago' };
    return { valido: true };
  }

  procesarPedido(cliente) {
    if (!this.verificarCarritoNoVacio()) return { exito: false, mensaje: 'Tu carrito esta vacio' };
    const validacion = this.validarFormulario(cliente);
    if (!validacion.valido) return { exito: false, mensaje: validacion.mensaje };

    const { items, total } = carrito.obtenerDatos();
    this.enviarPedido({
      items,
      total,
      cliente: {
        nombre: cliente.nombre.trim(),
        telefono: cliente.telefono.trim(),
        tipoEntrega: cliente.tipoEntrega,
        direccion: cliente.direccion?.trim() || '',
        referencia: cliente.referencia?.trim() || '',
        metodoPago: cliente.metodoPago,
        observaciones: cliente.observaciones?.trim() || ''
      }
    });
    carrito.vaciarCarrito();
    return { exito: true, mensaje: 'Pedido enviado a WhatsApp' };
  }
}

// Crear instancia global
const whatsappIntegracion = new WhatsAppIntegracion();
