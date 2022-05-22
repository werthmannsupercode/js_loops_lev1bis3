// Lev1_1
console.log("Lev1_1");

let hi = "Hello World "

for (let i = 1; i <= 10; i++) {
    console.log(hi + i);
}

// Lev1_2
console.log("Lev1_2");

let numArray = [];

for (let i = 0; i <= 10; i++) {
    numArray.push(i);
}
console.log(numArray);

// Lev1_3
console.log("Lev1_3");

let names = ["Eric", "Steffen", "Finn", "Simon", "Franzi", "Kim", "Sergio"];

for (let i = 0; i <= 6; i++) {
    console.log(names[i]);
}

// Lev1_6
console.log("Lev1_6");

let retArray = [];

for (let i = 1; i <= 100; i++) {
    retArray.push("image_" + [i] + ".jpg");
}
console.log(retArray);

// Lev1_7
console.log("Lev1_7");

let a = "The number is ";
let i = 1

do {
    console.log(a + i++);
} while (i <= 5);

// Lev1_8
console.log("Lev1_8");

let h = 0;

do {
    h++;
    if (h % 2 == 0) {
        console.log(h);
    }
    else { };
} while (h < 20);

//Lev1_9
console.log("Lev1_9");

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let wortlaenge = document.getElementById('wortlaenge');
let schreibeHier = document.getElementById('schreibeHier');
let neuesWort = document.getElementById('neuesWort');


let schreibeInsHtml = () => {
    schreibeHier.innerHTML = '';
    for (let i of words) {
        if (i.length == Number(wortlaenge.value)) {
            schreibeHier.innerHTML += i + "<br>";
        }
    }
}

let wortDazu = () => {

    words.push(neuesWort.value);
    console.log(words);
}

// Lev2_1
console.log("Lev2_1");

let imageArray = () => {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push('image_00' + [i] + '.jpeg');
        }
        else if (i > 9 && i < 100) {
            returnArray.push('image_0' + [i] + '.jpeg');
        }

        else if (i = 100) {
            returnArray.push('image_' + [i] + '.jpeg');
        }
    }
    console.log(returnArray);
}

imageArray();

// Lev2_2
console.log("Lev2_2");

let inputZahl = document.getElementById('inputZahl');
let loopHier = document.getElementById('loopHier');

let loopMe = () => {
    // console.log("hi");

    let valueZahl = Number(inputZahl.value);
    // console.log(valueZahl);
    let o = [];
    for (let i = 0; i < valueZahl; i++) {
        o.push("o");
    }
    // console.log(o.join(''));
    loopHier.innerHTML = `L${o.join('')}p`;
}

// Lev3_1
console.log('Lev3_1');

let text3 = "I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by 'devil',"

// console.log(text3.length);//2629
// let durchlauf = 2629 / 100;
// console.log(durchlauf);//26.29 -> 27 Mal durchlaufen lassen
// let durchlauf = Math.ceil(text3.length / 100);
// console.log(durchlauf);

// let text4 = text3.slice(0, 101);
// console.log(text4);

// let y = 2;
// let v = 1 + 100 * y;//Endpunkt Slice;
// console.log(v);

// let z = v - 100;
// console.log(z);//startpunkt Slice;


let trennt = () => {

    let durchlauf = Math.ceil(text3.length / 100);

    for (i = 1; i <= durchlauf; i++) {


        let v = 1 + 100 * i;
        let z = v - 100;

        //  console.log(text3.slice(z, v) + " - " + (i) + " of gesamte Nachricht");
        let newArrays = [text3.slice(z, v) + " - " + (i) + " of gesamte Nachricht"];
        console.log(newArrays);
    }
}

trennt();

// Lev3_2;
console.log('Lev3_2')

let numArr = [5, 22, 15, 100, 55];
let teilbar = document.getElementById('teilbar');

//Zahl/x=y Rest:0;
// x=i des Loop mit i<=100;
// y bei % nicht relevant

for (i = 0; i < numArr.length; i++) {
    // console.log(numArr[i]);//wählt einzelne Zahlen an.
    for (j = 1; j <= 100; j++) {
        // console.log(numArr[i] / j);//zeigt alle Ergebnisse an.
        let result1 = numArr[i] / j

        if (Number.isInteger(numArr[i] / j) && j != 1 && j != numArr[i]) { //filtert gerade Ergebnisse raus, wenn teilen möglich war.
            document.write(numArr[i] + "ist durch " + j + " teilbar. Das Ergebnis ist " + result1 + "<br>")//Ergebnis mit 1 und sich selbst.
        }
        else { }
    }
}

//Lev3_3
console.log('Lev3_3');

let inputZahl2 = document.getElementById('inputZahl2');
let loopHier2 = document.getElementById('loopHier2');

let loopMe2 = () => {
    // console.log("hi");
    let o = [];

    if (Number(inputZahl2.value) == 0) {
        alert('Bitte gibt eine Zahl größer als 0 ein.');
    }

    else if (Number(inputZahl2.value) % 2 == 0) {
        let valueZahl = Number(inputZahl2.value);
        // console.log(valueZahl);
        for (let i = 0; i < valueZahl; i++) {
            o.push("o");
        }
        // console.log(o.join(''));
        loopHier2.innerHTML = `L${o.join('')}p`;
    }

    else {
        let valueZahl = Number(inputZahl2.value);
        // console.log(valueZahl);

        for (let i = 0; i < valueZahl; i++) {

            if (i % 2 != 0) {
                o.push("O");
            }

            else {
                o.push("o");
            }
            // console.log(o);
        }
        loopHier2.innerHTML = `L${o.join('')}p`;
    }
}


// Lev3_4
console.log('Lev3_4');

//ich addiere ALLE zahlen bis 10, wenn sie durch a oder b teilbar sind.

// i%a=0  oder i%b=0 dann i++;

let maximaleZahl = document.getElementById('maximaleZahl');
let ersteZahl = document.getElementById('ersteZahl');
let zweiteZahl = document.getElementById('zweiteZahl');
let ergebnisHier = document.getElementById('ergebnisHier');

let countMe = () => {

    let r = [];
    if (Number(ersteZahl.value) == Number(zweiteZahl.value)) {
        alert('Bitte wähle unterschiedliche Zahlen.');
    }

    else if (Number(maximaleZahl.value) == 0) {
        alert('Die Zahl muss größer 0 sein.');
    }

    else {
        let addition = 0;
        for (let i = 0; i < Number(maximaleZahl.value); i++) {
            let a = Number(ersteZahl.value);
            let b = Number(zweiteZahl.value);
            if (i % a == 0 || i % b == 0) {
                r.push(i);
            }
        }
        // console.log(r);
        for (let s = 0; s < r.length; s++) {
            addition += r[s];


        }
        // console.log(addition);
        ergebnisHier.innerHTML = addition;
    }
}


