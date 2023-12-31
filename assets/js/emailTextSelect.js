// select verification as text or email

document.querySelectorAll(".email-text-select").forEach(function (thisSelect) {
  textSelect = thisSelect.querySelector(".text-select");
  emailSelect = thisSelect.querySelector(".email-select");

  textInp = thisSelect.querySelector(".text-inp");
  emailInp = thisSelect.querySelector(".email-inp");

  textSelect.addEventListener("click", (event) => {
    if (textSelect.checked) {
        textInp.style.display = "block";
        emailInp.style.display = "none";
    }else if (emailSelect.checked) {
        textInp.style.display = "none";
        emailInp.style.display = "block";
    }
  });

  emailSelect.addEventListener("click", (event) => {
    if (textSelect.checked) {
        textInp.style.display = "block";
        emailInp.style.display = "none";
    }else if (emailSelect.checked) {
        textInp.style.display = "none";
        emailInp.style.display = "block";
    }
  });

  if (textSelect.checked) {
    textInp.style.display = "block";
    emailInp.style.display = "none";
}else if (emailSelect.checked) {
    textInp.style.display = "none";
    emailInp.style.display = "block";
}

});
