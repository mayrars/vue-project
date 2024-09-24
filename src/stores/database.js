import { collection, query, getDocs,where } from 'firebase/firestore/lite'
import {defineStore} from 'pinia'
import { db, auth } from '../firebaseConfig'

export const useDatabaseStore = defineStore('database', {
    state: () => ({
        documents: [],
        loadingDoc: false,
        error: null,
    }),
    actions: {
        async getUrls() {
            if(this.documents.length !==0 ) return
            this.loadingDoc = true
            try {
                const q = query(collection(db,'urls'), where('user','==',auth.currentUser.uid))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    this.documents.push(
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )
                })
            } catch (error) {
                console.log(error)
            }finally{
                this.loadingDoc = false
            }
        }
    }
})