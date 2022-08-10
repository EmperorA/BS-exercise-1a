function tobAlbumHsBtn() {
  let hideBtn = document.createElement("button");
  hideBtn.innerText = "hide/show";
  hideBtn.className = "hsBtn";
  document.querySelector(".album-nav").appendChild(hideBtn);

  hideBtn.addEventListener("click", function () {
    let topAlbum = document.getElementById("top-album-hide");
    if (topAlbum.style.display === "none") {
      topAlbum.style.display = "block";
    } else {
      topAlbum.style.display = "none";
    }
  });
}tobAlbumHsBtn();

function favAlbumBtn() {
  let hidBtn = document.createElement("button");
  hidBtn.innerText = "hide/show";
  hidBtn.className = "hsBtn";
  document.querySelector(".fav-album-nav").appendChild(hidBtn);

  hidBtn.addEventListener("click", function () {
    let favAlbum = document.querySelector(".fav-album-review");
    if (favAlbum.style.display === "none") {
      favAlbum.style.display = "block";
    } else {
      favAlbum.style.display = "none";
    }
  });
}
favAlbumBtn();

function WorstAlbumHsBtn() {
    let hosBtn = document.createElement("button");
    hosBtn.innerText = "hide/show";
    hosBtn.className = "hsBtn";
    document.querySelector(".worst-album-nav").appendChild(hosBtn);
  
    hosBtn.addEventListener("click", function () {
      let worstAlbum = document.querySelector(".hall-of-shame");
      if (worstAlbum.style.display === "none") {
        worstAlbum.style.display = "block";
      } else {
        worstAlbum.style.display = "none";
      }
    });
  }
  WorstAlbumHsBtn();

  function imageTapestryBtn() {
    let itBtn = document.createElement("button");
    itBtn.innerText = "hide/show";
    itBtn.className = "hsBtn";
    document.querySelector(".img-tapestry-nav").appendChild(itBtn);
  
    itBtn.addEventListener("click", function () {
      let imgTap = document.querySelector(".img-tapestry");
      if (imgTap.style.display === "none") {
        imgTap.style.display = "block";
      } else {
        imgTap.style.display = "none";
      }
    });
  }
  imageTapestryBtn();