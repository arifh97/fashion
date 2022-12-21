export const useWishList = defineStore('wishlist', {
    state: () => ({
        wishlist: [],
    }),
    actions:{
        addWishList(item){
            const found = this.wishlist.find(product => product.img === item.img);
            if(!found){
                this.wishlist.push(item);
                useWishList().saveLocalStore();
            } else{
                alert('Item already added in wishlist')
            }
        },
        removeWishList(){

        },
        saveLocalStore(){
            window.localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
        }
    },
})