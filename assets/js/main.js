// navbar animation
// $(".navbar-collapse")
// .on("show.bs.collapse", function () {
//   $(this).addClass("show");
// })
// .on("hide.bs.collapse", function () {
//   $(this).removeClass("show");
// });

document.querySelector(".sidebar-toggler").addEventListener("click", function () {
  // document.querySelector(".navbar-collapse").classList.toggle("show");
});


// custom sliders
document
.querySelectorAll(".slider-range")
.forEach(function (singleSlider) {
  const slider = singleSlider.querySelector(".slider");
  const sliderValue = singleSlider.querySelector(".value");
  slider.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = tempSliderValue;
    const progress = ((tempSliderValue - slider.min) / (slider.max - slider.min)) * 100;

    slider.style.background = `linear-gradient(to right, #97d3fd ${progress}%, #f4f4f4 ${progress}%)`;
  });
});



// disable all body when menu opens

// listen to class change on button to remove delay in animation
// const sidebarToggler = document.querySelector(".sidebar-toggler");

const options = {
attributes: true,
};
// function callback(mutationList1, observer1) {
// mutationList1.forEach(function (mutation) {
//   console.log("fsda");
//   if (
//     mutation.type === "attributes" &&
//     mutation.attributeName === "class"
//   ) {
//     if (
//       document
//         .getElementsByClassName("sidebar-toggler")[0]
//         .classList.contains("collapsed")
//     ) {
//       console.log("yes");
//     } else {
//       console.log("no");
//     }
//   }
// });
// }
// const observer1 = new MutationObserver(callback);
// observer1.observe(sidebarToggler, options);



// listen to class change to add menu-open
const sidebar = document.querySelector(".sidebar");

function callback(mutationList, observer) {
mutationList.forEach(function (mutation) {
 
  if (
    mutation.type === "attributes" &&
    mutation.attributeName === "class"
  ) {
    if (
      document
        .getElementsByClassName("sidebar")[0]
        .classList.contains("show")
    ) {
      // console.log("open");
      document.body.classList.add("menu-open");
    } else {
      // console.log("close");
      document.body.classList.remove("menu-open");
    }
  }
});
}
const observer = new MutationObserver(callback);
observer.observe(sidebar, options);

// close menu on outside click
document.querySelector(".menu-overlay").addEventListener("click", () => {
if (
  document
    .getElementsByClassName("sidebar")[0]
    .classList.contains("show")
) {
  document.querySelector(".sidebar-toggler").click();
}
});

// close on menu on sidebar change
const navLinks = document.querySelectorAll(".sidebar-links a");

document.querySelectorAll(".sidebar-links a").forEach(function (navLink) {
navLink.addEventListener("click", () => {
  if (
    document
      .getElementsByClassName("sidebar")[0]
      .classList.contains("show")
  ) {
    document.querySelector(".sidebar-toggler").click();
  }
});
});