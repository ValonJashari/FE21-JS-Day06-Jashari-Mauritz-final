document.getElementById("result").innerHTML="<h3>Sandwich=" + sandwiches.sandwich+ "</h3> <h3>Calories = "+sandwiches.calories+"</h3>";
document.getElementById("result").innerHTML+="<h4>Fries Size=" + fries.fries_size+ "</h4> <h4>Calories ="+fries.calories+"</h4>";

//document.getElementById("result").innerHTML+=`My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories`; 


// Those codes are not included for basic exercise
 var sandwiches = 
    {
        "sandwich": "hamburger",
        "calories": "260"
    };
    var fries = 
    {
        "fries_size":"Large French Fries",
        "calories":"750"
    };
    
    /*for (var var1 in sandwiches )
    {   
        console.log(sandwiches[var1]);
       // console.log(sandwiches[var1]);

    }*/

    for (const [key,value] of Object.entries(sandwiches))
     {
        console.log(key,value);

        
    }

    
    
    //console.log(sandwiches["sandwich"])
    
    /*
    for (var var2 of fries)
    {
        console.log(var2);
        console.log(fries[var2]);
    }*/
   document.getElementById("result").innerHTML+=`My favorite ${sandwiches["sandwich"]} is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories`; 

