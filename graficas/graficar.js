let date_vale;
var datos = [10, 15, 15, 15, 15, 18, 20, 20, 24, 24, 24, 24, 25, 25, 27, 28, 28, 28, 29, 30, 30, 30, 32 ];


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
    datos_multiplicados.forEach(function(dato) {
        var porcentualesG = dato;
        datos_porcentuales.push(porcentualesG);
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


var datos_nombre = [];
var datos_repetidos = [];
var datos_porcentuales = [];

procesing_dates();
graficar();

function graficar() {
    var ctx = document.getElementById('canva_bar').getContext('2d');
    var myChartBar = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: datos_nombre,
        datasets: [{
            label: 'frecuencia absoluta',
            data: datos_repetidos,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('canva_circle').getContext('2d');
var myChartcircle = new Chart(ctx, {
type: 'pie',
data: {
    labels: datos_nombre,
    datasets: [{
        label: 'frecuencia porcentual',
        data: datos_porcentuales,
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});
}

