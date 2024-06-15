document.querySelector(".hamburger").addEventListener("click",()=>{
    console.log("clicked")
    document.querySelector(".navbar").style.left = "40vw"
    document.querySelector(".navbar").style.display= "block" 
    document.querySelector(".hamburger").style.display="none;"
});

  //close button event listener
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".navbar").style.left = "100vw"
    document.querySelector(".navbar").style.display= "none" 
    document.querySelector(".close").style.display="none;"
    document.querySelector(".hamburger").style.display="none;"
  });