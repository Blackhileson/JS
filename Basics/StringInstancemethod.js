// const hey = "Hello World!"

// let index = 4;

// console.log(hey.at(index));

// const hey2 = "Why?"

//CONNECT WORDS
// console.log(hey.concat(", ",hey2));

// CASE SENSITIVE
// console.log(hey.endsWith("World!"));

// const hey3 = "Wor"

// CASE Sensitive but just Matches the Charcters 
// console.log(hey.includes(hey3) ? "YES" : "NO");


// let hero1 = "Hello I am Hero. and I will be Hero Forever. I will Hero to All."

// let hero = "Hero"

// let heros = hero1.indexOf(hero)

// need to use loop indexing +2,+3 not working 

// console.log(hero1 + " " +hero);
// console.log(hero1.indexOf(hero, heros + 1));

// let hello = "hello can you please help me with the maths the i am weak in maths i wanna make maths strong."

// let heelo1 = "maths"

// console.log(hello.lastIndexOf(heelo1));

// const hello = "i am walking drinking helping driving."

// const hello1 = /\w+ing/g;

// console.log(hello.match(hello1));

// noramlise and check matching

// const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
// const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

// console.log(`${name1}, ${name2}`);
// // Expected output: "Amélie, Amélie"
// console.log(name1 === name2);
// // Expected output: false
// console.log(name1.length === name2.length);
// // Expected output: false

// const name1NFC = name1.normalize("NFC");
// const name2NFC = name2.normalize("NFC");

// console.log(`${name1NFC}, ${name2NFC}`);
// // Expected output: "Amélie, Amélie"
// console.log(name1NFC === name2NFC);
// // Expected output: true
// console.log(name1NFC.length === name2NFC.length);

// padstart and end - truncated and repeated


// const hello = " Mushrooms healthy?"

// console.log(hello.padEnd(25,"."));

// const hello1 = hello.slice(-4)

// console.log(hello1.padStart(hello.length,"*"))

// const hello = "HAPPY! "

// console.log(`I FEEL VERY ${hello.repeat(4)}`);

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));

// const regex = /dog/i;
// console.log(paragraph.replace(regex, "ferret"));

// console.log(paragraph.replaceAll(regex, "ferret"));

// const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(31));

// console.log(str.slice(4, 19));

// console.log(str.slice(-4));

// console.log(str.slice(-9, -5));


// const str = "The quick brown fox jumps over the lazy dog.";
// const str1 = str.split(" ");

// console.log(str1[4]);

// const str = "Saturday night plans";

// console.log(str.startsWith("Sat"));

// console.log(str.startsWith("Sat", 3));

// const str = " Hello World! "

// console.log(str.toLowerCase())
// console.log(str.toUpperCase());

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

const str = new String("Hello");

console.log(str);
console.log(str.valueOf());


