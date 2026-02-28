// const navbar = document.querySelector("#navbar");
const foot = document.querySelector("#footer-data");
const overlayDiv = document.querySelector(".overlay");
const events = ["click", "scroll", "mouseover", "mouseout"];

// Fetching the Navigation bar from navbar.html
// fetch("./src/components/navbar.html")
//   .then((result1) => result1.text())
//   .then((data1) => {
//     navbar.innerHTML = data1;
//   });

// Fetching the Footer from footer.html
fetch("./src/components/footer.html")
  .then((result2) => result2.text())
  .then((data2) => {
    foot.innerHTML = data2;
  });

// Click address section
document.querySelector(".addr").addEventListener("click", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".addr-alert").classList.remove("hidden");
});

// Close address alert by click close btn
document.querySelector(".close-addr").addEventListener("click", (e) => {
  e.stopPropagation();
  overlayDiv.classList.add("hidden");
  overlayDiv.classList.remove("block");
  document.querySelector(".addr-alert").classList.add("hidden");
});
document.querySelector(".overlay").addEventListener("click", (e) => {
  e.stopPropagation();
  overlayDiv.classList.add("hidden");
  overlayDiv.classList.remove("block");
  document.querySelector(".addr-alert").classList.add("hidden");
});

// Change select in search section
const selectDrop = document.querySelector("#opt");
const searchSection = document.querySelector(".search");
selectDrop.addEventListener("change", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  searchSection.classList.add("outline-orange-400");
  document.querySelector("#search-ip").focus();
  document.querySelector("#search-ip").setSelectionRange(5, 5);
});

// Click search input
document.querySelector("#search-ip").addEventListener("click", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  searchSection.classList.add("outline-orange-400");
  document.querySelector("#search-ip").focus();
  document.querySelector("#search-ip").setSelectionRange(5, 5);
});

// Click & Scroll search section
events.forEach((eachEvent) => {
  if (eachEvent === "click") {
    overlayDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      searchSection.classList.remove("outline-orange-400");
      document.querySelector("#search-ip").focus();
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      searchSection.classList.remove("outline-orange-400");
      document.querySelector("#search-ip").focus();
    });
  }
});

// MouseOver language section
document.querySelector(".select-lang").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".lang-drop1").classList.remove("invisible");
});

// MouseOut & Scroll language section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document.querySelector(".select-lang").addEventListener("mouseout", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".lang-drop1").classList.add("invisible");
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".lang-drop1").classList.add("invisible");
    });
  }
});

// MouseOver Account section
document.querySelector(".select-accnt").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".accnt-drop1").classList.remove("invisible");
});

// MouseOut & Scroll Account section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document
      .querySelector(".select-accnt")
      .addEventListener("mouseout", (e) => {
        e.stopPropagation();
        overlayDiv.classList.add("hidden");
        overlayDiv.classList.remove("block");
        document.querySelector(".accnt-drop1").classList.add("invisible");
      });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".accnt-drop1").classList.add("invisible");
    });
  }
});

// Click All section
document.querySelector(".all-container").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".all-drop-container").style.transform =
    "translateX(120%)";
  document.querySelector("BODY").classList.add("overflow-y-hidden");
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  overlayDiv.classList.add("top-0");
  overlayDiv.classList.add("bg-black/80");
  overlayDiv.classList.add("z-3");
});

// Close All Section
document.querySelector(".close-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".all-drop-container").style.transform =
    "translateX(0%)";
  document.querySelector("BODY").classList.remove("overflow-y-hidden");
  overlayDiv.classList.remove("block");
  overlayDiv.classList.add("hidden");
  overlayDiv.classList.remove("top-0");
  overlayDiv.classList.remove("bg-black/70");
  overlayDiv.classList.remove("z-3");
});
document.querySelector(".overlay").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".all-drop-container").style.transform =
    "translateX(0%)";
  document.querySelector("BODY").classList.remove("overflow-y-hidden");
  overlayDiv.classList.remove("block");
  overlayDiv.classList.add("hidden");
  overlayDiv.classList.remove("top-0");
  overlayDiv.classList.remove("bg-black/70");
  overlayDiv.classList.remove("z-3");
});

// MouseOver Fresh section
document.querySelector(".fresh").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".fresh-drop").classList.remove("invisible");
});

// MouseOut & Scroll Fresh section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document.querySelector(".fresh").addEventListener("mouseout", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      document.querySelector(".fresh-drop").classList.add("invisible");
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      document.querySelector(".fresh-drop").classList.add("invisible");
    });
  }
});

// MouseOver Prime section
document.querySelector(".prime").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".prime-drop").classList.remove("invisible");
});

// MouseOut & Scroll Prime section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document.querySelector(".prime").addEventListener("mouseout", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".prime-drop").classList.add("invisible");
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".prime-drop").classList.add("invisible");
    });
  }
});

// Auto render or click to change hero images
const heroImgs = document.querySelectorAll(".hero-imgs");
let heroSlideStart = 0;
let heroSlideEnd = (heroImgs.length - 1) * 100;
function handleBtnL() {
  if (heroSlideStart < 0) {
    heroSlideStart += 100;
  }
  heroImgs.forEach((eachImg) => {
    eachImg.style.transform = `translateX(${heroSlideStart}%)`;
  });
}
function handleBtnR() {
  if (heroSlideStart >= -heroSlideEnd + 100) {
    heroSlideStart -= 100;
  }
  heroImgs.forEach((eachImg) => {
    eachImg.style.transform = `translateX(${heroSlideStart}%)`;
  });
}
function autoRender() {
  if (heroSlideStart >= -heroSlideEnd + 100) {
    handleBtnR();
  } else {
    heroSlideStart = 100;
  }
}
document.querySelector(".hero-btn-r").addEventListener("click", handleBtnR);
document.querySelector(".hero-btn-l").addEventListener("click", handleBtnL);
setInterval(autoRender, 2500);

// Click to slide row3 items
const slideRow3 = document.querySelectorAll(".slide-row3-box");
let slideRowStart3 = 0;
let slideRowEnd3 = (slideRow3.length - 1) * 100;
document.querySelector("#slide-arrow-R3").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart3 != -slideRowEnd3) {
    slideRowStart3 -= 100;
  }
  slideRow3.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart3}%)`;
  });
});
document.querySelector("#slide-arrow-L3").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart3 < 0) {
    slideRowStart3 += 100;
  }
  slideRow3.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart3}%)`;
  });
});

// Click to slide row4 items
const slideRow4 = document.querySelectorAll(".slide-row4-box");
let slideRowStart4 = 0;
let slideRowEnd4 = (slideRow4.length - 1) * 100;
document.querySelector("#slide-arrow-R4").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart4 != -slideRowEnd4) {
    slideRowStart4 -= 100;
  }
  slideRow4.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart4}%)`;
  });
});
document.querySelector("#slide-arrow-L4").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart4 < 0) {
    slideRowStart4 += 100;
  }
  slideRow4.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart4}%)`;
  });
});

// Function to select the BOX4 ROW elements
const totalIndex = [];
for (let i = 0; i < 4; i++) {
  totalIndex.push(i);
}
const selectFunc = (arr1, arr2, arr3) => {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].addEventListener("click", (e) => {
      e.stopPropagation();
      arr1[i].classList.remove("outline-transparent");
      arr1[i].classList.add("outline-blue-700");
      // console.log("removed hidden");5
      arr2[i].classList.remove("hidden");
      const remainIndex = arr3.filter((value) => {
        return value != i;
      });
      remainIndex.forEach((ind) => {
        arr1[ind].classList.add("outline-transparent");
        arr1[ind].classList.add("outline-blue-700");
        // console.log("added hidden");
        arr2[ind].classList.add("hidden");
      });
    });
  }
};

// Click in Row5
const miniBoxes51 = document.querySelectorAll(".mini-box51");
const boxes51 = document.querySelectorAll(".box51");
const miniBoxes52 = document.querySelectorAll(".mini-box52");
const boxes52 = document.querySelectorAll(".box52");
const miniBoxes53 = document.querySelectorAll(".mini-box53");
const boxes53 = document.querySelectorAll(".box53");
selectFunc(miniBoxes51, boxes51, totalIndex);
selectFunc(miniBoxes52, boxes52, totalIndex);
selectFunc(miniBoxes53, boxes53, totalIndex);

// Click to slide row6 items
const slideRow6 = document.querySelectorAll(".slide-row6-box");
let slideRowStart6 = 0;
let slideRowEnd6 = slideRow6.length * 45;
document.querySelector("#slide-arrow-R6").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart6 != -slideRowEnd6) {
    slideRowStart6 -= 45;
  }
  slideRow6.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart6}%)`;
  });
});
document.querySelector("#slide-arrow-L6").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart6 < 0) {
    slideRowStart6 += 45;
  }
  slideRow6.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart6}%)`;
  });
});

// Click to slide row7 items
const slideRow7 = document.querySelectorAll(".slide-row7-box");
let slideRowStart7 = 0;
let slideRowEnd7 = (slideRow7.length - 1) * 100;
document.querySelector("#slide-arrow-R7").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart7 != -slideRowEnd7) {
    slideRowStart7 -= 100;
  }
  slideRow7.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart7}%)`;
  });
});
document.querySelector("#slide-arrow-L7").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart7 < 0) {
    slideRowStart7 += 100;
  }
  slideRow7.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart7}%)`;
  });
});

// Click in Row8
const miniBoxes81 = document.querySelectorAll(".mini-box81");
const boxes81 = document.querySelectorAll(".box81");
const miniBoxes83 = document.querySelectorAll(".mini-box83");
const boxes83 = document.querySelectorAll(".box83");
const miniBoxes84 = document.querySelectorAll(".mini-box84");
const boxes84 = document.querySelectorAll(".box84");
selectFunc(miniBoxes81, boxes81, totalIndex);
selectFunc(miniBoxes83, boxes83, totalIndex);
selectFunc(miniBoxes84, boxes84, totalIndex);

// Click to slide row9 items
const slideRow9 = document.querySelectorAll(".slide-row9-box");
let slideRowStart9 = 0;
let slideRowEnd9 = (slideRow9.length - 1) * 100;
document.querySelector("#slide-arrow-R9").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart9 != -slideRowEnd9) {
    slideRowStart9 -= 100;
  }
  slideRow9.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart9}%)`;
  });
});
document.querySelector("#slide-arrow-L9").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart9 < 0) {
    slideRowStart9 += 100;
  }
  slideRow9.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart9}%)`;
  });
});

// Click to slide row11 items
const slideRow11 = document.querySelectorAll(".slide-row11-box");
let slideRowStart11 = 0;
let slideRowEnd11 = (slideRow11.length + 1) * 29;
document.querySelector("#slide-arrow-R11").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart11 != -slideRowEnd11) {
    slideRowStart11 -= 29;
  }
  slideRow11.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart11}%)`;
  });
});
document.querySelector("#slide-arrow-L11").addEventListener("click", (e) => {
  e.stopPropagation();
  if (slideRowStart11 < 0) {
    slideRowStart11 += 29;
  }
  slideRow11.forEach((element) => {
    element.style.transform = `translateX(${slideRowStart11}%)`;
  });
});

// fetch("https://dummyjson.com/products/categories")
//   .then((res) => res.json())
//   .then(console.log);

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);
