let results= document.getElementById("results");
    let books = {
        "Javascript": [{
            "title": "JS made easy",
            "price": 70
        }, {
            "title": "Javascript for Dummies",
            "price": 40
        }],
        "PHP": [{
            "title": "PHP for the People",
            "price": 1000
        }, {
            "title": "PEE H. PEE",
            "price": 1300
        }]
    }
 

    results.innerHTML= "<h2>Javascript Books:</h2>"
    for (i = 0; i < books.Javascript.length; i++) {
      results.innerHTML+=`<div><h3> ${books.Javascript[i].title} </h3><b>price:</b> ${books.Javascript[i].price} EUR</div>`;
    }

    results.innerHTML+= "<hr><h2>PHP Books:</h2>"
    for (i = 0; i < books.PHP.length; i++) {
      results.innerHTML+=`<div><h3> ${books.PHP[i].title} </h3><b>price:</b> ${books.PHP[i].price} EUR</div>`;
    }