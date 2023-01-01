export const useWishList = defineStore('wishlist', {
    state: () => ({
        wishlist:[],
        color:["red","green","blue"]
    }),
    actions:{
        addWishList(item){
            const found = this.wishlist.find(product => product.img === item.img);
            if(found){
                alert('Item already added in wishlist')
                
            } else{
                this.wishlist.push(item);
                useWishList().saveLocalStore();
            }
        },
        removeWishList(item){
            const wishlist_in = this.wishlist.indexOf();
            console.log(wishlist_in);
            
            
        },
        saveLocalStore(){
            window.localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
        }
    },
})