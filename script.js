//this will open the side bar menu
const w3_open =()=>{
    document.getElementById('mySidebar').style.display ="block"
}
//this will close the side bar menu
const w3_close = () =>{
    document.getElementById('mySidebar').style.display = "none"
}

const myFunction = ()=> {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 