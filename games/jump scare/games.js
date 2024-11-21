function hoverBox(boxName) {
    const ghostList = ["ghost1", "ghost2", "ghost3"];
    const loseGhost = "ghost" + boxName;
  
    //Show random ghost
    const randomIndex = Math.floor(Math.random() * ghostList.length);
    const randomGhostId = ghostList[randomIndex];
    document.getElementById(randomGhostId).classList.toggle("hide");
  
    //If the random ghost is the same as the box, you lose :c
    if (loseGhost === randomGhostId) {
      alert("Game Over!");
    }
  }
  
  function reset() {
    let ghosties = document.getElementsByClassName("ghost");
    ghosties[0].classList.add("hide");
    ghosties[1].classList.add("hide");
    ghosties[2].classList.add("hide");
  }
  