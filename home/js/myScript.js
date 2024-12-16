function myFunction() {
  document.getElementById("demo").innerHTML = "Surprise!";
}

function myFunction2() {
  const element = document.getElementsByTagName("section");
  document.getElementById("demo2").innerHTML = "Let me introduce myself again." + element[0].innerHTML;
}