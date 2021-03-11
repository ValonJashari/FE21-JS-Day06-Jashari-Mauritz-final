

let results= document.getElementById("results");
   

    results.innerHTML= "<h2>Javascript Books:</h2>"
    //console.log(results)
    for (i = 0; i < data.Javascript.length; i++) {
      results.innerHTML+=`<div> The book title is:<h3>${data.Javascript[i].title} </h3><b>The author is:</b> ${data.Javascript[i].author}
    </div><br> `;
    }

    results.innerHTML+= "<hr><h2>Pythons Books:</h2>"
    for (i = 0; i < data.Python.length; i++) {
      results.innerHTML+=`<div> The book title is:<h3> ${data.Python[i].title} </h3><b>The book title is:</b> ${data.Python[i].author} </div>`;
    }

    results.innerHTML+="<hr><h2>Web Developer Books:</h2>"
    for(i = 0; i<data.Web_Developer.length; i++) {
        results.innerHTML+=`<div> The book title is:<h3> ${data.Web_Developer[i].title} </h3><b>The book title is:</b> ${data.Web_Developer[i].author} </div>`;
        }

