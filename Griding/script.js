// let a=5,b=6;
// let x = myFunction(a,b);

// function myFunction(a,b)
// {
//     return a*b;

// }

let fahrenhiet = 77;
let celcius = Tocelcius(fahrenhiet);

function Tocelcius(fahrenhiet)
{
    return (5/9) * (fahrenhiet-32);
}

// document.getElementById("div").innerHTML = Tocelcius(fahrenhiet);
document.getElementById("div").innerHTML = "temprature is "+ celcius+" celcius";

const person = {
 name:"jhon",
 height:6.5,
 weight:50,
 age:35,
NameAndAge : function()
{
    return person.name + " " +person.age; 
}
};
 
NameAndAgeofPerson = person.NameAndAge()
//document.write(person.name+" "+person.height);

document.getElementById("div1").innerHTML = person.NameAndAge();
document.getElementsById("button").onclick = changeColor();
function changeColor()
{
    var currentcolor = document.getElementById("color").style.backgroundColor;
    if(currentcolor=="green")
    {
        document.getElementById("color").style.backgroundColor = "gray";
    }
    else
    {
        document.getElementById("color").style.backgroundColor = "green";
    }

}

Math.ceil(1.5,5);
Math.trunc()