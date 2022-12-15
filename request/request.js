async function getUser(username) {
	
     
    let response = await fetch(`https://api.github.com/users/${username}`);
          let user  = await response.json();

          return user;
    
}

export default getUser;
