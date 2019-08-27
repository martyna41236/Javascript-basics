//excercise 1
function BMIcalc()
    {
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        var bmi = weight/(height/100*height/100);
        document.getElementById("result").innerHTML = "Your BMI is " + bmi;
    }

//excercise 2
var quote = "Honesty is the first chapter in the book of wisdom.";
quote.length;
console.log (quote.slice(quote.length-7,quote.length-1));
console.log (quote.slice (0,quote.length/2));
console.log (quote.slice(quote.length-1,quote.length));

