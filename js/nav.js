const homebtn = document.querySelector("#homebtn");
const homescroll = document.querySelector("#main");
const abtbtn = document.querySelector("#abtbtn");
const abtscroll = document.querySelector("#myself");
const skillbtn = document.querySelector("#skillbtn");
const skillscroll = document.querySelector("#skill");
const pjtbtn = document.querySelector("#pjtbtn");
const pjtscroll = document.querySelector("#project");
const edubtn = document.querySelector("#edubtn");
const eduscroll = document.querySelector("#education");
const expbtn = document.querySelector("#expbtn");
const expscroll = document.querySelector("#experience");
const archivbtn = document.querySelector("#archivbtn");
const archivscroll = document.querySelector("#archive");
const exp__contact__btn = document.querySelector("#exp__contact__btn");

homebtn.addEventListener("click", (event) => {
  event.preventDefault();
  homescroll.scrollIntoView({ behavior: "smooth" });
});
abtbtn.addEventListener("click", (event) => {
  event.preventDefault();
  abtscroll.scrollIntoView({ behavior: "smooth" });
});
skillbtn.addEventListener("click", (event) => {
  event.preventDefault();
  skillscroll.scrollIntoView({ behavior: "smooth" });
});
pjtbtn.addEventListener("click", (event) => {
  event.preventDefault();
  pjtscroll.scrollIntoView({ behavior: "smooth" });
});
edubtn.addEventListener("click", (event) => {
  event.preventDefault();
  eduscroll.scrollIntoView({ behavior: "smooth" });
});
expbtn.addEventListener("click", (event) => {
  event.preventDefault();
  expscroll.scrollIntoView({ behavior: "smooth" });
});
archivbtn.addEventListener("click", (event) => {
  event.preventDefault();
  archivscroll.scrollIntoView({ behavior: "smooth" });
});

exp__contact__btn.addEventListener("click", (event) => {
  event.preventDefault();
  abtscroll.scrollIntoView({ behavior: "smooth" });
});
