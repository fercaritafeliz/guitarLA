export const formatearFecha = fecha =>{
    const fechaNueva = new Date(fecha);
    const opciones ={
        year:'numeric',
        month:'long',
        day:'2-digit'
    }
    return fechaNueva.toLocaleString('en-MX',opciones)
}