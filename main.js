
function getGitHubProfileInfos(){

        const url =  "https://api.github.com/users/WesleySanchesBahia"

        setTimeout(() => {
            fetch(url).then(response => response.json()).then(data => {
                img.src = data.avatar_url
            })
        }, 100);
    
    }


getGitHubProfileInfos()