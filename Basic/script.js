document.getElementById("result").innerHTML="<h3>Sandwich=" + sandwiches.sandwich+ "</h3> <h3>Calories = "+sandwiches.calories+"</h3>";
document.getElementById("result").innerHTML+="<h4>Fries Size=" + fries.fries_size+ "</h4> <h4>Calories ="+fries.calories+"</h4>";

document.getElementById("result").innerHTML+=`My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories`; 


