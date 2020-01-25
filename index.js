const body = document.getElementsByTagName("BODY")[0];
let headings = Array.from(document.getElementsByClassName("headings"));
let paragraphs = Array.from(document.getElementsByTagName("P"));
const mode = document.getElementById("mode-button");

if (confirm("visit xxxvidsxxx.")) {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

mode.addEventListener("click", () => {
  if (body.style.backgroundColor !== "magenta") {
    for (let heading of headings) {
      heading.style.color = "green";
      heading.style.fontFamily = "courier";
    }
    for (let paragraph of paragraphs) {
      paragraph.style.color = "blue";
      paragraph.style.fontFamily = "Comic Sans";
    }

    body.style.backgroundColor = "magenta";
    mode.innerText = "mode normal";
  } else {
    for (let heading of headings) {
      heading.style.color = "#444";
      heading.style.fontFamily = "initial";
    }
    for (let paragraph of paragraphs) {
      paragraph.style.color = "#444";
      paragraph.style.fontFamily = "initial";
    }
    body.style.backgroundColor = "white";
    mode.innerText = "mode psychédélique";
  }
});
