const heros = ["thor", "ironman"]
const dc_hero = ["prince", "kumar", "sam"]

//heros.push(dc_hero)
//console.log(heros);
//console.log(heros[1][3]);

const all_new_heros =[...heros, ...dc_hero]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[0,2]]]
const real_aother_arrar = another_array.flat(Infinity)
console.log(real_aother_arrar);


console.log(Array.isArray("prince"))
console.log(Array.from("prince"))
console.log(Array.from({name:"prince"})) //interesting topic

let score2 = 100
let score3 = 200
let score4 = 400
let score5 = 300
console.log(Array.of(score2,score3,score4,score5));
