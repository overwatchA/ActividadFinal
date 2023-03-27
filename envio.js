//Pedir al usuario que seleccione la empresa de envíos


alert("A continuaciòn le mostramos los diferentes precios y tiempos de espera de diferentes empresas para un pedido de Medellìn hasta Bogotà")
alert("La empresa Envìa pide $13000 y tarda 4 dias en entregar el pedido; La empresa Servientrega pide $15200 y tarda 2 dias en entregar el pedido; y La empresa Interrapidisimo pide $10000 y tarda 7 dias en entregar el pedido ")

var empresaElegida = parseInt(prompt("Elige: 1 para Envìa, 2 para Servientrega y 3 para interrapidisimo"))

var enviaPrecio = 13000
var enviaTiempo = 4

var servientregaPrecio = 15200
var servientregaTiempo = 2

var interrapidisimoPrecio = 10000
var interrapidisimoTiempo = 7

if (empresaElegida == 1){
    alert("Elegiste Envìa")
    alert("Debes pagar $"+ enviaPrecio + " por el envio")
    alert("El pedido llegarà en " + enviaTiempo + " dias")
} 
else if(empresaElegida == 2){
    alert("Elegiste Servientrega")
    alert("Debes pagar $"+ servientregaPrecio + " por el envio")
    alert("El pedido llegarà en " + servientregaTiempo + " dias")
} 
else if(empresaElegida == 3){ 
    alert("Elegiste Interrapidisimo")
    alert("Debes pagar $"+ interrapidisimoPrecio + " por el envio")
    alert("El pedido llegarà en " + interrapidisimoTiempo + " dias")
} 
else{
    alert("Elige un nùmero entero positivo entre 1 y 3")
}