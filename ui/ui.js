import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

function showUser(user) {

document.querySelector('div.result').innerHTML+=`<li>Nom:${user.login} id:${user.id}</li>`;
               
}

export default showUser;
