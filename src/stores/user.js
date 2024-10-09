import { defineStore } from "pinia";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import router from '../router';
import { useDatabaseStore } from './database';
import { doc, getDoc, setDoc } from "firebase/firestore/lite";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loadingUser: false,
        loadingSession: false,
    }),
    actions: {
        async registerUser(email, password){
            this.loadingUser = true
            try{
                const {user} = await createUserWithEmailAndPassword(auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push("/")
            }catch(err){
                console.log(err)
                return err.code
            } finally {
                this.loadingUser = false
            }
        },
        async loginUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                

                const docRef = doc(db, "users", user.uid)
                const docSpan = await getDoc(docRef)
                if(docSpan.exists()){
                    this.userData = {...docSpan.data()}
                }else{
                    await setDoc(docRef, {
                        email: user.email,
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    })

                    this.userData = {
                        email: user.email,
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    }
                }
                router.push("/")
            } catch (error) {
                console.log(error)  
                return error.code            
            }finally {
                this.loadingUser = false
            }
        },
        async logOutUser(){
            const databaseStore = useDatabaseStore()
            databaseStore.$reset()
            try {
                await signOut(auth)
                this.userData = null
                router.push("/login")
            } catch (error) {
                console.log(err)                   
            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                            };
                        } else {
                            this.userData = null;
                            const databaseStore = useDatabaseStore()
                            databaseStore.$reset()
                        }
                        resolve(user);
                    },e=> {
                        console.log("error")
                        reject(e)
                    }
                );
            });
            unsuscribe();
        }
    }
})