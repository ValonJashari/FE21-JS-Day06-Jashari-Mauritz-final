var a = document.getElementById("result").innerHTML+=`My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories`; 
console.log("The message on screen is: ", a)




/// Those lines are not includef for basic exercise


/*let food = `

[{

    "name":"burger",
    "calories":260
    
},
{
    "name":"fries",
    "calories":750
}]
` */

/*var a = JSON.parse(food);
for (const [key,value] of Object.entries(a))
     {
        console.log(`The ${value["name"]} has ${value["calories"]} calories`);
        
         //`The ${value["name"]} has ${value["calories"]} calories`        
    }

    console.log(a[0]["name"]);

for (const i in a) 
{
    console.log(a[i]["name"]);
            
    
}*/

//document.getElementById("result").innerHTML="<h3>Sandwich=" + sandwiches.sandwich+ "</h3> <h3>Calories = "+sandwiches.calories+"</h3>";
//document.getElementById("result").innerHTML+="<h4>Fries Size=" + fries.fries_size+ "</h4> <h4>Calories ="+fries.calories+"</h4>";
