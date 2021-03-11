let data = JSON.parse(books); 
console.log(data);

let results= document.getElementById("results");
  

    results.innerHTML= "<h2>Javascript Books:</h2>"
    //console.log(results)
    for (i = 0; i < data.Javascript.length; i++) {
      results.innerHTML+=`<div> The book title is:<h3>${data.Javascript[i].title} </h3> <b>The author is:</b> ${data.Javascript[i].author} <br>
      <img src="${data.Javascript[i].image}" class="image img-fluid w-25" alt="${data.Javascript[i].title}">
      </div><br> `;
   
      }

    results.innerHTML+= "<hr><h2>Pythons Books:</h2>"
    for (i = 0; i < data.Python.length; i++) {
      results.innerHTML+=`<div> The book title is:<h3>${data.Python[i].title} </h3><b>The book author is:</b> ${data.Python[i].author} <br>
      <img src="${data.Python[i].image}" class="image img-fluid w-25" alt="${data.Python[i].title}">
      </div> `;
    }

    results.innerHTML+="<hr><h2>Web Developer Books:</h2>"
    for(i = 0; i<data.Web_Developer.length; i++) {
        results.innerHTML+=`<div> The book title is:<h3> ${data.Web_Developer[i].title} </h3><b>The book author is:</b> ${data.Web_Developer[i].author} <br>
        <img src="${data.Web_Developer[i].image}" class="image img-fluid w-25" alt="${data.Web_Developer[i].title}"> </div><br>`;
        }

