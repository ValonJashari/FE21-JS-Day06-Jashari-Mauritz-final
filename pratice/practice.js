<!DOCTYPE html>
<html>
    <title>Basic_Exercise</title>
<body>
    <h1>JSON meets Javascript</h1>
    <br>
    <div id="result"></div>
    <div id="results"></div>
  <script>
      let object1 = {
          "language": "Albanian",
          "title":"Javascript for begineer"
      };
      let object2 = 
      {
          "language":"German",
          "title":"Javascript v12"
      };
      document.getElementById("result").innerHTML="<h3>Language=" + object1.language+ "</h3> <h3>Title = "+object1.title+"</h3>";
      document.getElementById('result').innerHTML += "<hr/>";

      document.getElementById('result').innerHTML += "<h3>Language = " + object2.language + "</h3><h3>Title = " + object2.title + "</h3>";
    
      


</script>
<script type="text/javascript" src="script.js">

</script>
</body>


</html>