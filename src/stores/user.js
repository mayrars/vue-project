import { defineStore } from "pinia";


export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'ejemplo@test.com'
    }),
    getters:{
        minuscula(state){
            return state.userData.toLowerCase()
        }
    },
    actions:{
        registerUser(name){
            this.userData = name
        }
    }
})