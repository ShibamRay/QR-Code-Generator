const download = document.querySelector(".download");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrcode = document.querySelector("#qr-code");
const qrtxt = document.querySelector(".qr-text");
const sharebtn = document.querySelector(".share-btn");
const sizes = document.querySelector(".sizes");

dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
qrtxt.addEventListener("input", handleQRText);
sizes.addEventListener("input", handleSize);
sharebtn.addEventListener("input", handleShare);

const defaulturl = "www.shibamray.me";
let colorLight = "#fff",
  ColorDark = "000",
  text = "defaulturl",
  size = "300";

function handleDarkColor(e) {
  ColorDark = e.target.value;
  generateQRCode();
}

function handleLightColor(e) {
  colorLight = e.target.value;
  generateQRCode();
}
function handleQRText(e) {
  const value = e.target.value;
  text = value;
  if (!value) {
    text = defaulturl;
  }
  generateQRCode();
}

async function generateQRCode() {
  qrcode.innerHTML = "";
  new generateQRCode("qr-code", {
    text,
    height: size,
    width: size,
    colorLight,
    ColorDark
  });
}
