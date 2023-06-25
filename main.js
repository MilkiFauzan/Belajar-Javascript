//Variabel
let fullName = "Milki Fauzan Tsany";
let usia = 27;
let asal = "Purwakarta";
let tinggal = "Jepang";

//Boolean
let z = 1 < 2;
let y = 5 < 2;
console.log("Hello World");

//Matematika
let result = 2 * "2";
console.log(6 + 10);
let $m = 1995 - 2004

//Perbandingan
let $a = !false;
let $b = true && false;

//Logika
const nilaiMinimum = 95;
const nilaiAkhir = 92;
const lulusSemester = nilaiMinimum > 85;
const lulusAkhir = nilaiAkhir > 90;
const graduate = lulusSemester && lulusAkhir;
console.log(graduate);
console.log(fullName, usia, asal, tinggal);

//Konsol
console.error("Awas Error")
console.warn("Hati-Hati Peringatan")
console.debug("Debug");

//Template
const template = `Nama : ${fullName},\n Usia : ${usia},\n Asal : ${asal},\n Tinggal : ${tinggal} `;
console.log(template)
const multiLine = `Saya Milki,
Tinggal di Jepang`;
console.log(multiLine)

//konversi String
const value1 = parseInt("salah");
console.log(value1)

//Array
let fruits = [];
fruits.push("Banana", "Grape", "Watermelon", "Apple")
fruits[1] = "Strawberry";
console.table(fruits);
console.log(fruits.length);
console.log(fruits)

//Object
const person = {
    nama : "Milki Fauzan Tsany",
    alamat : "Tokyo",
    umur : 27
};
//person["nama"] = "Milki Fauzan Tsany";
//person["alamat"] = "Indonesia";
//person["umur"] = 27;
console.table(person);

//If
const nilaiUjian = 90;
if (nilaiUjian > 85) {
 greeting = "Good Job";
}