console.log("hi")

//defining an object literal

const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7, //feet
    diet: 'vegetarian',
    woodlandFriends: [{name: 'bunny', age: 4},{name: 'squirrel', age: 5}],
    eat(plant){
        console.log(`Lets eat ${plant}`)
    },
    hide(location){
        console.log(`Lets hide in ${location}`)

    },
    run(){

    }
    
}

console.log(bigFoot.woodlandFriends[0].age);
console.log(bigFoot.woodlandFriends[1]);

bigFoot.eat('tree');


/*
console.log(bigFoot.isReal);

console.log(bigFoot.diet);

function sayHello(name){
    return (`Hello, ${name}`);
}

console.log(sayHello(bigFoot.woodlandFriends[0]));
console.log(sayHello(bigFoot.woodlandFriends[1]));
console.log(sayHello(bigFoot.woodlandFriends[2]));

bigFoot.woodlandFriends.forEach(function(friend){
    console.log(`Hello, ${friend}`)
})
*/
