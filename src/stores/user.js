import { defineStore } from "pinia";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
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
        async updateUser(displayName){
            this.loadingUser = true
            try{
                await updateProfile(auth.currentUser, {
                      displayName
                    }
                )
                this.setUser(auth.currentUser)
            }catch(error){
                return error.code
            }finally{
                this.loadingUser = false
            }

        },
        async setUser(user){
            try {
                const docRef = doc(db, "users", user.uid)
                this.userData = {
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
                await setDoc(docRef, this.userData)
                    
            }catch(error){
                return error.code
            }
        },
        async loginUser(email, password){
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                await this.setUser(user)                
                router.push("/")
            } catch (error) {
                return error.code            
            }finally {
                this.loadingUser = false
            }
        },
        async logOutUser(){
            const databaseStore = useDatabaseStore()
            databaseStore.$reset()
            try {
                router.push("/login")
                await signOut(auth)
                //this.userData = null
            } catch (error) {
                console.log(err)                   
            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(
                    auth,
                    async (user) => {
                        if (user) {
                            //await this.setUser(user)
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            }
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