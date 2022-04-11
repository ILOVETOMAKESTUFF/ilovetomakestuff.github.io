var user = "I_LOVE_TO_MAKE_STUFF";
const parser = new window.DOMParser();
setInterval(async() => {
  const urlToFetch = "https://scratch.mit.edu/users/" + user + "/followers?noCache=" + Math.random().toString();
  const followersPage = parser.parseFromString(await(await fetch(urlToFetch)).text(), 'text/html');
  const followerCount = followersPage.querySelector(".box-head h2").innerText.match(/\((.*)\)/)[1];
  document.getElementById("counter").innerText = followerCount;
}, 5000)

//Just experimenting!
document.getElementById("date").innerHTML("The date is " + Date());

function alertSaying(e) {
  window.alert("bruh, " + e);
} 
