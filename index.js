window.alert("This website is not finished yet. ");

document.getElementById("myH1").textContent=`A good life Starts with a Good Body`;
document.getElementById("myH12").textContent=`A good life Starts with a Good Body`;
let Name;
document.getElementById("mySubmit").onclick = function(){
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${Name}`
}