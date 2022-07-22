function getGitHub(){

    const url =  `https://api.github.com/users/wesleysanchesbahia`
    
        fetch(url).then(response => response.json()).then(data => {
            img.src = data.avatar_url
            
        })
    
    }

function clickPortfolio(){
    document.getElementById("portfolio").addEventListener("click", () =>{
        alert("Em desenvolvimento...");
    })
}

clickPortfolio();
getGitHub();