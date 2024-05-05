// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Loading Spinner 
window.addEventListener("load", ()=>{
  const loader = document.querySelector(".loader")

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () =>{
      document.body.removeChild("loader");
  })
})


// Search Bar 
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("Animecontainer");
  const anime = document.querySelectorAll(".animes");
  const aname = storeitems.getElementsByTagName("h6");

  for(var i = 0; i < aname.length; i++){
      let match = anime[i].getElementsByTagName('h6')[0];
 
      if(match){
          let textvalue = match.textContent || match.innerHTML

          if(textvalue.toUpperCase().indexOf(searchbox) > -1){
              anime[i].style.display = "";
          }else{
              anime[i].style.display = "none";
          }
      }
  }
}

