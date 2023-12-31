// multistep form
document
  .querySelectorAll(".liability-asset-item")
  .forEach(function (thisDropdown) {
    thisDropdown
      .querySelectorAll(".title-inp")
      .forEach(function (thistitleInp) {
        thistitleInp.addEventListener("input", (event) => {
          thisDropdown.querySelector(".title").innerHTML = thistitleInp.value;
        });
      });
  });
