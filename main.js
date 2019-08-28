//excercise 1
function BMIcalc()
    {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        let bmi = weight/(height/100*height/100);
        document.getElementById("result").innerHTML = "Your BMI is " + bmi;
    }

//excercise 2
let quote = "Honesty is the first chapter in the book of wisdom.";
quote.length;
console.log (quote.slice(quote.length-7,quote.length-1));
console.log (quote.slice (0,quote.length/2));
console.log (quote.slice(quote.length-1,quote.length));

function fun2(quote)
{
    for (i= Math.round(quote.length/2); i<= quote.length; i+=3)
    {
     console.log (quote[i]);
    }
};
fun2(quote);

const ReverseString = quote => [...quote].reverse().join(''); console.log (ReverseString(quote));
console.log (quote.replace(/wisdom/, "friendship"));
