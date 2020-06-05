particlesJS.load("particles", "/particlesjs-config.json");

fetch(`https://api.github.com/users/NatsumiHB`)
.then(res => res.json())
.then(res => document.getElementById("bio").innerHTML = res.bio);