const url = "https://api.github.com/users/wesleysanchesbahia"

function getGitHub(){
    axios.get(url)
    .then(response => {
        img.src = response.data.avatar_url
    })
    .catch(error => console.log(error));
}


function clickPortfolio(){
    document.getElementById("portfolio").addEventListener("click", () =>{
        alert("Em desenvolvimento...");
    })
}

clickPortfolio();
getGitHub();