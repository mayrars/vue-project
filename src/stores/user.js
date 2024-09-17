import { defineStore } from "pinia";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null
    }),
    actions: {
        async registerUser(email, password){
            try{
                const {user} = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
            }catch(err){
                console.log(err)
            }
        }
    }
})