var typed = new Typed(".typer", {
  strings: ["", "programmer.", "student.", "photographer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
  loopCount: Infinity,
});

function onLoad() {
  var val = "true" === localStorage.getItem("dark");
  if (val) {
    document.getElementById("checker").checked = true;
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    document.getElementById("checker").checked = false;
    body.classList.remove("dark");
    body.classList.add("light");
  }
}

function changeTheme() {
  var t = document.getElementById("checker");
  var body = document.getElementById("body");

  if (t.checked) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
  localStorage.setItem("dark", t.checked.toString());
}
