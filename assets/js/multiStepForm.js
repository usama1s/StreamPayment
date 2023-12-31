// multistep form
document.querySelectorAll(".multistep-form").forEach(function (thisForm) {
  thisForm.querySelectorAll(".single-step").forEach(function (thisStep) {
    const nextBtn = thisStep.querySelector(".next-multistep-form");
    if (nextBtn) {
      nextBtn.addEventListener("click", (event) => {
        currentStep = nextBtn.closest(".single-step");

        nextStep = currentStep.nextElementSibling;
        if (nextStep) {
          currentStep.classList.remove("active");
          nextStep.classList.add("active");
        }
      });
    }
    const prevBtn = thisStep.querySelector(".prev-multistep-form");
    if (prevBtn) {
      prevBtn.addEventListener("click", (event) => {
        currentStep = prevBtn.closest(".single-step");

        prevStep = currentStep.previousElementSibling;
        if (prevStep) {
          currentStep.classList.remove("active");
          prevStep.classList.add("active");
        }
      });
    }
  });
});
