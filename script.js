//Startup
let theme = "light";
function get(query) {return document.querySelector(query)}; // Taken from lopste/drawing-station, check it out!

function getFollowers() {
  var user = "ISTILLMAKESTUFF";
  const parser = new window.DOMParser();
  setInterval(async() => {
    const urlToFetch = "https://scratch.mit.edu/users/" + user + "/followers?noCache=" + Math.random().toString();
    const followersPage = parser.parseFromString(await(await fetch(urlToFetch)).text(), 'text/html');
    const followerCount = followersPage.querySelector(".box-head h2").innerText.match(/\((.*)\)/)[1];
    get("counter").innerText = "Followers: " + followerCount;
  }, 5000)
}

//Just experimenting!
//document.getElementById("date").innerHTML("The date is " + Date());

function switchThemes() {
  theme = get("body").className;
  if (theme == "light") {
    theme = "dark";
    get("body").className = theme;
    get("themebutton").innerText = "Light";
  } else if (theme == "dark") {
    theme = "light";
    get("body").className = theme;
    get("themebutton").innerText = "Dark";
  }
}
