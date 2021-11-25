const h1 = document.querySelector("body");

function getInitialWidth() {
  windowWidthChange();
}

function windowWidthChange() {
  const width = window.innerWidth;
  const small = "small-screen";
  const medium = "medium-screen";
  const large = "large-screen";
  if (width >= 0 && width < 853) {
    if (h1.classList.contains(medium)) {
      h1.classList.remove(medium);
    }
    if (h1.classList.contains(large)) {
      h1.classList.remove(large);
    }
    h1.classList.add(small);
    // h1.className = "small-screen";
  } else if (width >= 853 && width < 1706) {
    if (h1.classList.contains(small)) {
      h1.classList.remove(small);
    }
    if (h1.classList.contains(large)) {
      h1.classList.remove(large);
    }
    h1.classList.add(medium);
    // h1.className = "medium-screen";
  } else if (width >= 1706) {
    if (h1.classList.contains(small)) {
      h1.classList.remove(small);
    }
    if (h1.classList.contains(medium)) {
      h1.classList.remove(medium);
    }
    h1.classList.add(large);
    // h1.className = "large-screen";
  }
}

window.addEventListener("resize", windowWidthChange);

getInitialWidth();
