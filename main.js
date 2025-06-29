const start = () => {
  
  const audio = document.getElementById("bgMusic");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  
  alert("🎉 You just unlocked the hidden gem(this hidden music), To stop playing, try refreshing the page, to pause, click on the secret text 'Dreamer' , representing a song by Blacko Sherif which inspired the creator")
};

const filterProjects = () =>  {
  const searchTerm = document.getElementById("project").value.toLowerCase();
  
  const items = document.querySelectorAll(".min");
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    
    if (text.includes(searchTerm)){
      item.style.display = "";
    }else{
      item.style.display = "none";
    }
  })
}