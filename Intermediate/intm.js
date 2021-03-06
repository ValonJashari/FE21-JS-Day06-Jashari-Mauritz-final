let employees = `

  [{
      "uniqueId": "29893944817",
      "jobTitleName" : "Developer",
      "firstName": "Patrik",
      "lastName": "Jonathan",
      "emailAddress": "patrik.k.jonathan@gmail.com",
      "salary": "33, 000"
  }, {
      "uniqueId": "29823964877" ,
      "jobTitleName": "Analyst",
      "firstName": "Tom",
      "lastName": "Irani",
      "emailAddress": "tomrirani@gmail.com",
      "salary": "31, 000"
  }, {
      "uniqueId": "25833742117" ,
      "jobTitleName": "Program Directory",
      "firstName": "Tom",
      "lastName": "Hanks",
      "emailAddress": "tomhanks@gmail.com",
      "salary": "35, 557"
  }, {
    "uniqueId": "29823964877" ,
    "jobTitleName": "COO",
    "firstName": "Thomas",
    "lastName": "Iri",
    "emailAddress": "ThomasIri@gmail.com",
    "salary": "31, 000"
    }, {
    "uniqueId": "29823961377" ,
    "jobTitleName": "CEO",
    "firstName": "John",
    "lastName": "Milli",
    "emailAddress": "JohnMilli@gmail.com",
    "salary": "31, 300"
    }, {
    "uniqueId": "29578964877" ,
    "jobTitleName": "Analyst",
    "firstName": "Tomas",
    "lastName": "Ido",
    "emailAddress": "TomasIdo@gmail.com",
    "salary": "29, 700"
    }, {
    "uniqueId": "29823964879",
    "jobTitleName": "Security",
    "firstName": "Tom",
    "lastName": "Jason",
    "emailAddress": "TomJason@gmail.com",
    "salary": "27, 000"
    }, {
    "uniqueId": "29823964897",
    "jobTitleName": "HR",
    "firstName": "Jayce",
    "lastName": "Irani",
    "emailAddress": "JayceIrani@gmail.com",
    "salary": "31, 450"
    }, {
    "uniqueId": "29823961237",
    "jobTitleName": "IT Consultant",
    "firstName": "Matthas",
    "lastName": "Mau",
    "emailAddress": "MatthasMau@gmail.com",
    "salary": "30, 000"
    }, {
    "uniqueId": "29823964872",
    "jobTitleName": "IT Consultant",
    "firstName": "Vali",
    "lastName": "Jashari",
    "emailAddress": "ValiJashari@gmail.com",
    "salary": "39, 000"

    }]
`
var data = JSON.parse(employees);

function createTable(data){
    let fillTable = "";
    for (let i = 0; i < data.length; i++){
        fillTable += `
        <table class="table">
        <tbody class="">
          <tr>
            <td>${data[i].uniqueId}</td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].emailAddress}</td>
            <td>${data[i].salary}</td>
            <td>${data[i].jobTitleName}</td>
          </tr>
        </tbody>
      </table>
`
    }
    return fillTable;
}

document.getElementById("table").innerHTML += createTable(data);

