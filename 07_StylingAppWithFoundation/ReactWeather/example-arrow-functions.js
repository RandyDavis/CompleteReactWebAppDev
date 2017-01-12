var names = ['Randy', 'Kristen', 'Jims'];

/*
// Normal forEach
names.forEach(function(name) {
   console.log('forEach', name);
});

// Arrow Func forEach v1
names.forEach((name) => {
    console.log('arrowFunc', name);
});

// Arrow Func forEach v2
names.forEach((name) => console.log(name));
*/

/*
// Arrow Func Auto Return
// Whatever is put inside expression automatically gets returned
var returnMe = (name) => name + '!';
console.log(returnMe('Champ'));
*/

/*
// ---- USE ARROW FUNCTIONS TO AVOID LOSING 'this' BINDING!!! -------------
// Anonymous Functions take on 'this' binding while Arrow Functions take on their parents binding
var person = {
    name: 'Randy',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

person.greet();
*/

// ------------ Challenge Area ------------------
function add (a, b) {
    return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

// 1 - Create arrow function using curly braces syntax for above example
var addStatement = (a, b) => {
    console.log(a + b);
}

addStatement(2, 3);

// 2 - Create arrow function that uses expression syntax using a single line for above example
var addExpression = (a, b) => console.log(a + b);

addExpression(7, 7);
