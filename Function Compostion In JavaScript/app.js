// function composition is the process of combing two or more functions to produce a new function


// y=f(g((hx))) we learned like this in mathematic in the school


function h(x){
    return x*1;
}

function g(x){
    return x*x;
}

function f(x){
    return x;
}
const y=f(g(h(1)));
console.log(y);


///and also we can use from library 
//R=Ramda
// const  m=R.compose(f,g,h);
// console.log(m);