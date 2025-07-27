// js 5.1

// let obj = {
//     name: 'Tohir aka besh baho qoyin',
//     age: 23,
//     country: 'Uzbekistan'   
// }
// console.log(obj);


// js 5.2   

// let obj = {
//     currency: 'dollar',
//     miqdor: 100
// }
// let kartoshka = 10
// let cola = 6

// let potatoPrice = 2 // 1 kg
// let colaPrice = 5 // 1 ta 

// let miqdor = (kartoshka * potatoPrice) + (cola * colaPrice)
// obj.miqdor = miqdor
// console.log(obj);


// js 5.3

// let obj = {
//     Ali: 24,
//     Sevinch: 16,
//     Vali: 27
// }

// let entries = Object.entries(obj)
// let max = entries[0]

// for (let i = 0; i < entries.length; i++){
//     if (entries[i][1] > max[1]){
//         max = entries[i]
//     }
// }
// console.log('Yoshi eng katta inson:', max[0]);


// js 5.4 

// let obj = {
//     name: 'John', 
//     age: 24,
//     city: 'Fergana'
// }
// let res = Object.entries(obj)
// console.log(res);


// js 5.5

// let obj ={
//     Ali: 50,
//     Salim: 60, 
//     Kimsan: 90
// }
// let result = {}
// for (let name in obj){
//    if (obj[name] < 60){
//     delete obj[name]
//    } else{
//     obj[name] = (obj[name] / 100) * 100
//    }
// }
// console.log(obj);
