import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state:() => ({
        cart: [
            {
                title: 'test item'
            }
        ]
    }),
    actions:{
        
    },
})