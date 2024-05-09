const userInput = document.getElementById("input");
const generateBtn = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");
const imgBox = document.querySelector(".img-box");

const generateQR = () => {
  const existingError = imgBox.querySelector("p");
  if (existingError) {
    imgBox.removeChild(existingError);
  }
  if (userInput.value.length > 0) {
    let qrUrl =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      userInput.value;
    qrImage.src = qrUrl;
    imgBox.classList.add("show-image");
    setTimeout(resetState, 7000);
  } else {
    let error = document.createElement("p");
    error.innerText = "Por favor ingresá un valor.";
    error.classList.add("error");
    imgBox.appendChild(error);
    imgBox.classList.add("show-image");
    qrImage.style.display = "none";
    setTimeout(resetState, 7000);
  }
};

const resetState = () => {
  userInput.value = "";
  imgBox.classList.remove("show-image");
};

generateBtn.addEventListener("click", generateQR);

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQR();
  }
});
