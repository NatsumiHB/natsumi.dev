particlesJS.load("particles", "/particlesjs-config.json");

fetch(`https://api.github.com/users/nullfact0r`)
    .then((res) => res.json())
    .then((res) => {
        if (res.bio) document.getElementById("bio").innerHTML = res.bio;
    });
