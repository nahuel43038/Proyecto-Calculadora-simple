//EJERCICIO 1 EMPLEADO Y CLIENTE
/*
class Persona{
    static idPersona = 0;
    constructor(nombre, apellido,edad){
    this._idPersona = ++Persona.idPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    fichaDatos(){
        return `ID: ${this._idPersona} Nombre:${this._nombre} ${this._apellido} 
        Edad:${this._edad}`
    }

    toString(){
        return "ID:" + this._idPersona + " " + this.fichaDatos();
    }
}

class Empleado extends Persona {
    static idEmpleado = 0;
    constructor(nombre, apellido,edad, sueldo){
        super(nombre, apellido,edad);
        this._idEmpleado = ++Empleado.idEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return " " +  this.fichaDatos() + " " +"Empleado: " + this._idEmpleado + " " + "Sueldo: " + this._sueldo;
    }

}

class Client extends Persona {
    static idClient = 0;
    constructor(nombre, apellido,edad, fecha){
        super(nombre, apellido,edad);
        this._idCliente = ++Client.idClient;
        this._fechaRegistro = fecha;
    }
    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }

    toString(){
        return this.fichaDatos() +" " + "Cliente:" + this._idCliente + " " + " " + "Fecha: " + this._fechaRegistro;
    }
}
let empleado1 = new Empleado("brian","cost",20, 40000);
console.log(empleado1.toString())

let client1 = new Client("nahuel", "acosta", 20, new Date());
console.log(client1.toString())

*/

/*//EJERCICIO 2 SISTEMA DE VENTAS

class Producto{
    static idProducto = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.idProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `ID: ${this._idProducto},
        Nombre: ${this._nombre},
        Precio: ${this._precio}`
    }
}



class Orden{
    static idOrden = 0;
    static get MAX_ORDEN(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.idOrden;
        this._productos = [];
        //this._contadorProductos = 0;
    }
    get idOrden(){
        return this.idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_ORDEN){
            this._productos.push(producto);
            //this._productos[this._contadorProductos++] = producto;Esta manera tambien es correcta
        }
        else return "Llegaste al limite de productos por caja";
    }

    calcularProductos(){
        let totalPrecio = 0
        for(let producto of this._productos){//of es para arrays y in para objetos
            totalPrecio += producto.precio;
        }
        return totalPrecio;
    }

    mostrarOrden(){
        let productoOrden = "";
        for(let producto of this._productos){
            productoOrden += "\n{" + producto.toString() + "}";
        }
    
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularProductos()}, Productos: ${productoOrden}\n`);
    }

}

let producto0 = new Producto("pantalon", 200);
let producto2 = new Producto("remera", 80);

let orden1 = new Orden();
orden1.agregarProducto(producto0);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

*/

//EJERCIOCIO 3 PROYECTO COMPUTADORA

class Dispositivo{
    constructor(entrada, marca){
        this._tipoEntrada = entrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._entrada;
    }

    set tipoEntrada(entrada){
        this._tipoEntrada = entrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends Dispositivo{
    static idRaton = 0;
    constructor(entrada, marca){
        super(entrada, marca);
        this._idRaton = ++Raton.idRaton;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `ID-Raton:${this._idRaton}, Entrada:${this._tipoEntrada}, Marca:${this._marca}`
    }
}

class Teclado extends Dispositivo{
    static idTeclado = 0;
    constructor(entrada, marca){
        super(entrada, marca);
        this._idTeclado = ++Teclado.idTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `ID-Teclado:${this._idTeclado}, Entrada:${this._tipoEntrada}, Marca:${this._marca}`
    }
}

class Monitor{
    static idMonitor = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.idMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `ID-Monitor:${this._idMonitor}, Marca:${this._marca}, Tamaño:${this._tamaño}`}

}

class Computadora{
    static idComputadora = 0;
    constructor(nombre, teclado, raton, monitor){
        this._idComputadora = ++Computadora.idComputadora;
        this._nombre = nombre;
        this._teclado = teclado;
        this._raton = raton;
        this._monitor = monitor;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    toString(){
        return `Computadora ${this._idComputadora}:${this._nombre},
Raton:[${this._raton}],
Teclado:{${this._teclado}},
Monitor:{${this._monitor}}`
    }
}

class Orden{
    static idOrden = 0;
    constructor(){
        this._idOrden = ++Orden.idOrden;
        this._computadoras = [];
    }

    agregarComputadora(computadora){
            this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadoraOrden = "";
        for(let producto of this._computadoras){
            computadoraOrden += "\n" + producto.toString() + "\n";
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoraOrden}\n`);
    }
}


let raton1 = new Raton("usb", "ryzen");
let teclado1 = new Teclado("bluetoth", "lg");
let monitor1 = new Monitor("samsung", "22P");

let computadora1 = new Computadora("IQ51", teclado1,raton1,monitor1);
let orden1 = new Orden();


let raton2 = new Raton("usb", "Nova");
let teclado2 = new Teclado("usb", "sanyo");
let monitor2 = new Monitor("lg", "22P");

let computadora2 = new Computadora("T411", teclado2,raton2,monitor2);
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden();