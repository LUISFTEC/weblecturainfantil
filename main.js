import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import { auth } from './script/firebase.js'

console.log ('hello wordl')

onAuthStateChanged(auth, async (user) =>{
    console.log(user)
})