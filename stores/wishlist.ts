import { defineStore } from "pinia";

export const useWishList = defineStore('wishlist', {
    state: () => ({
        item: [],
    }),
    actions:{},
})