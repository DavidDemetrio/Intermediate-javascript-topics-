// Switch case
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);    
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);    
    default: 
        console.log('Aún no has seleccionado un método de pago');
        break;
}