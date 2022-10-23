const GITHUB_URL = "https://api.github.com/users/vlastavetra";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    profileImage.src = data.avatar_url;
    profileName.innerText = data.name;    
  });