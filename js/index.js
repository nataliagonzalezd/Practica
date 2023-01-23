let [nombre, apellido] = ["Natalia", "Gonzalez"];

// EJERCICIO 1

let ensaladaDeFrutas = ["manzana", "melon", "naranja", "frutilla", "ciruela"];

function showFruits() {
    for (let i in ensaladaDeFrutas) {
        console.log("Las frutas que hay en la ensalada son:" + ensaladaDeFrutas[i]);
    }
};

//EJERCICIO 2
let edades = [2, 18, 87, 45, 23, 34];

function average(array) {
    let total = 0;
    for (let i in array) {
        total += array[i];
    }
    console.log("El promedio aproximado es " + (Math.round(total / array.length)));
}

//EJERCICIO 3

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];

function amigos(amigo) {
    let sum = 0;
    let yourFriends = [];
    for (let name in amigo) {
        for (let words in amigo[name]) {
            sum += 1;
        }
        if (sum === 4) {
            yourFriends.push(amigo[name]);
        }
        sum = 0;
    }
    console.log(yourFriends);
}

//EJERCICO 4

const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
listaDeSuper.push("shampoo");
listaDeSuper.shift();
console.log("El largo de Lista Super es " + listaDeSuper.length);

function findWord(word) {
    if (listaDeSuper.indexOf(word) != -1) {
        console.log("El elemento " + word + " se encuentra en la posicion " + listaDeSuper.indexOf(word))
    } else {
        console.log("El elemento " + word + " no se encuentra en la lista")
    }
}

// EJERCICIO 5

function saludo() {
    alert("Bienvenid@ !!")
}

// EJERCICIO 6

function calculoMayor(num1, num2) {
    if (num1 > num2) {
        alert(num1 + " es el mayor")
    } else if (num2 > num1) {
        alert(num2 + " es el mayor")
    } else {
        alert("Los numeros son iguales")
    }
}

// EJERCICIO 7

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"];

function filtrarAmigos(arr) {
    let sum = 0;
    let yourFriends = [];
    for (let name in arr) {
        for (let words in arr[name]) {
            sum += 1;
        }
        if (sum === 4) {
            yourFriends.push(arr[name]);
        }
        sum = 0;
    }
    console.log(yourFriends);
}

// EJERCICIO 8

const dado = [1, 2, 3, 4, 5, 6];

function tirarDado(max) {
    console.log("Tu numero al azar es " + Math.floor(Math.random() * (max.length + 1)));
}

// EJERCICIO 9

let toDoList = {
    "tipo de tarea": "Compras",
    dia: "1/23/2023",
    productos: [],
    "cantidad de productos": 5,
    estado: "pendiente",
    notificacion: function() {
        alert("Esta tarea tiene una prioridad urgente!")
    }
};

console.log(toDoList.dia);
console.log(toDoList["tipo de tarea"]);
console.log(toDoList["cantidad de productos"]);
toDoList.notificacion();

// EJERCICIO 10

const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}

console.log(superHeroes["squadName"]);
console.log(superHeroes["members"][1]["name"]);
console.log(superHeroes["members"][1]["powers"][2]);
console.log(superHeroes["members"][1]["age"]);

// Ejercicios de métodos avanzados de arrays

// EJERCICIO 1

function filtrar(arr) {

    const yourFriends = arr.filter(word => word.length === 4);

    console.log(yourFriends);
}

// EJERCICIO 2

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

const frasesExclamadas = frases.map(function(element) {
    console.log("¡" + element + "!");
});



window.onload = function() {
    console.log(nombre, apellido);
    showFruits();
    average(edades);
    amigos(amigo);
    findWord("shampoo");
    calculoMayor(54, 11);
    filtrarAmigos(amigo2);
    tirarDado(dado);
    filtrar(amigo1);
};