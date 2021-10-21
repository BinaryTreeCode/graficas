
var date = document.getElementById("datos");
var button_date = document.getElementById("btn");

button_date.addEventListener("click", input_datos, true)


let date_vale;
var datos = [10, 15, 15, 15, 15, 18, 20, 20, 24, 24, 24, 24, 25, 25, 27, 28, 28, 28, 29, 30, 30, 30, 32,];

function input_datos() {
    date_vale = parseInt(date.value);
    datos.push(date_vale);
}

var datos_acumulados =[];
var promedio;
var suma_datos = 0;
var datos_divididos = [];
var datos_multiplicados = [];

function datos_tabla() {    
        /* calcula FI y el promedio */ 

        datos_Nr.forEach(function(numero) {
            console.log(numero)
            suma_datos = numero.repite + suma_datos;
            datos_acumulados.push(suma_datos);
            console.log(suma_datos);
        });

/*         promedio = suma_datos / datos.length; */

        /* calcula fr o fi/n */ 
        datos_Nr.forEach(function(numero) {
            división = numero.repite / suma_datos;
            datos_divididos.push(división);
        });

            /* calcula fi% */ 
        datos_divididos.forEach(function(numero) {
            multiplicación = numero * 100;
            datos_multiplicados.push(multiplicación);
        });
    }

var button_table = document.getElementById("btn_table");
button_table.addEventListener("click", procesing_dates, true)

var largo, rango, dato_mayor, dato_menor, datos_ordenados, intervalos, ampltud;

function tabla() {
    largo = datos.length - 1;

    datos_ordenados = datos.sort((a, b) => a - b);
    dato_menor = datos_ordenados[0];
    dato_mayor = datos_ordenados[largo];

    rango = dato_mayor - dato_menor;

    operación = Math.log10(datos.length) * 3.322 + 1;
    intervalos = Math.round(operación);
    /* ampltud = rango/intervalos; */
    console.log("datos sin ordenar " + datos + "datos ordenados " + datos_ordenados)
}

/* var numroDeAmpltudes;
var array_ampltud = [];

function ampltudes() {
    IDC1 = dato_menor + ampltud
    array_ampltud.push(IDC1)

    numroDeAmpltudes = (intervalos-1) * 2; 
    i = 0;
    while (i <= numroDeAmpltudes) {
        IDCs = IDC1 + ampltud;
        array_ampltud.push(IDCs);
        i++;
    }
} */


class datoID {
    constructor(I, n) {
        this.nombre = I;
        this.id = n;
        this.repite = 0;
    }
}

var datos_Nr = [];
var i = 0;
var e = 0;

function construir() {
    i = 0;
    while (i <= largo) {
        var dato = new datoID(datos_ordenados[0 + i], i);
        datos_Nr.push(dato);
        i++;
    }
    console.log("datos ID " + datos_Nr)
}

function contar() {
    var i = 0;
    let e = 0;
    while (i <= largo) {
        while (e <= largo) {
            if (datos_ordenados[0 + i] === datos_ordenados[0 + e]) {
                console.log("si" + i + " se repite " + e)
                datos_Nr[0 + i].repite += 1;
            }
            else {
                console.log("no")
            }
            console.log(datos[0 + i] + " " + datos[0 + e])
            e++;
        }
        i++;
        e = 0;
    }
    console.log("datos ordenados " + datos_ordenados + "datos con el valor de repite " + datos_Nr)
}

var largo_Nr;
function duplicados() {
    i = 0;
    e = 0;
    largo_Nr = largo;
    while (i <= largo_Nr) {
        while (e <= largo_Nr) {
            if (datos_Nr[i].nombre === datos_Nr[e].nombre && datos_Nr[i].id !== datos_Nr[e].id) {
                console.log("nuevo largo_Nr " + largo_Nr + " el dato eliminado es: " + datos_Nr[i].nombre + " " +datos_Nr[e-1].nombre);
                datos_Nr.splice(i, 1);
                largo_Nr = datos_Nr.length-1;
            } else {
            }
            e++;
        }
        e = 0;
        i++;
    }
}

var suma_datos_fi = 0;
var suma_datos_Fi = 0;
var suma_datos_fr = 0;
var suma_datos_porcentaje = 0;

function suma() {
    suma_datos_fi = suma_datos

    datos_acumulados.forEach(function(numero) {
        suma_datos_Fi = numero + suma_datos;
    });

    datos_divididos.forEach(function(numero) {
        suma_datos_fr = numero + suma_datos;
    });

    datos_multiplicados.forEach(function(numero) {
        suma_datos_porcentaje = numero + suma_datos;
    });


    datos_Nr.forEach(function(dato) {
        var nombreG = dato.nombre;
        datos_nombre.push(nombreG);
    });
    datos_Nr.forEach(function(dato) {
        var repetidoG = dato.repite;
        datos_repetidos.push(repetidoG);
    });
}

function procesing_dates() {
    tabla();
    construir();
    contar();
    duplicados();
    datos_tabla ();
    suma();
}

var button_grafica = document.getElementById("btn_tableG");

button_grafica.addEventListener("click", imprimir, true)

nombre = "xi";
function imprimir() {
    document.write("<table border>");
    document.write("<thead> <th>" + nombre  + "</th> <th>fi</th> <th>Fi</th> <th>fr/n</th> <th>fi%</th> </thead>");

    /* document.write("<tbody>" + "<td>"+ 1 + "</td>" + dato_menor + " - " + IDC1 + "<td>" + "</td>" +  + "<td>" + "</td>" +  + "<td>" + "</td>" +  + "<td>" + "</tbody>" );
     */
    i = 0;
    while (i <= intervalos) {
        document.write(`<tbody><td>${datos_Nr[i].nombre}</td><td>${datos_Nr[i].repite}</td><td>${datos_acumulados[i]}</td><td>${datos_divididos[i]}</td><td>${datos_multiplicados[i]}</td></tbody>`);
        i++
    }
    document.write("<tfoot>" + "<td>" + "total" + "</td>" + "<td>" + suma_datos_fi + "</td>" + "<td>" + suma_datos_Fi + "</td>" + "<td>" + suma_datos_fr + "</td>" + "<td>" + suma_datos_porcentaje + "</td>" + "</tfoot>");
    document.write("</table>");
}

var datos_nombre = [];
var datos_repetidos = [];




/* function grafica() {
    document.write("<canvas id="canva" width="500" height="500"></canvas>");
} */

/* porque da NaN
 *//* var promedio, suma_datos;
var array_división = [];
var array_multiplicación = [];
function datos_procesing() {    
        calcula FI y el promedio 
        datos.forEach(function(numero) {
            console.log(numero)
            suma_datos = numero + suma_datos;
            datos_acumulado.push(suma_datos);
            console.log(suma_datos);
        }); */
/* function orden() {
    i = 0;
    e = 0;
    while (i <= datos_Nr.length - 1) {
        while (e <= datos_Nr.length - 1) {
            if (datos_Nr[i].repite > datos_Nr[e].repite) {
                console.log(datos_Nr[e].nombre + " es elimindo, su valor es: " + datos_Nr[e].repite)
                datos_Nr.splice(e, 1);
            } else {
                console.log(datos_Nr[i].repite + " es menor que " + datos_Nr[e].repite)
            }
            console.log(datos_Nr);
            e++;
        }
        e = 0;
        i++;
    }
} */
/* porque ambos arrays se modifican
class datoID {
    constructor(I, n) {
        this.nombre = I;
        this.id = n;
        this.repite = 0;
    }
}
var datos_Nr = [];
var datos_Nr;
var i = 0;
var e = 0;
function construir() {
    i = 0;
    while (i <= largo) {
        var dato = new datoID(datos_ordenados[0 + i], i);
        datos_Nr.push(dato);
        i++;
    }
    datos_Nr = datos_Nr;
    console.log("datos ID " + datos_Nr)
}

var largo_Nr;
function duplicados() {
    i = 0;
    e = 0;
    largo_Nr = largo;
    while (i <= largo_Nr) {
        while (e <= largo_Nr) {
            if (datos_Nr[i].nombre === datos_Nr[e].nombre && datos_Nr[i].id !== datos_Nr[e].id) {
                datos_Nr.splice(i, 1);
                largo_Nr = datos_Nr.length-1;
            } else {
            }
            e++;
        }
        e = 0;
        i++;
    }
    console.log(" datos Id " + datos_Nr + " datos no repetidos " + datos_Nr);
} */