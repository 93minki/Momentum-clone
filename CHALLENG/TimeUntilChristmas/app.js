const clockTitle = document.querySelector(".remainTime");

function getTime() {
  const timeObject = new Date();
  const currentYear = timeObject.getFullYear();

  const xmas = new Date(currentYear, 11, 24);
  const today = new Date().getTime();
  const gap = xmas - today;

  const dDays = String(Math.ceil(gap / (24 * 3600 * 1000))).padStart(3, "0");
  const dHours = String(
    Math.ceil((gap % (24 * 3600 * 1000)) / (3600 * 1000))
  ).padStart(2, "0");
  const dMinute = String(
    Math.ceil((gap % (3600 * 1000)) / (60 * 1000))
  ).padStart(2, "0");
  const dSeconds = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${dDays}d ${dHours}h ${dMinute}m ${dSeconds}s`;
}

getTime();

setInterval(getTime, 1000);
