export const useWishList = defineStore('wishlist', {
    state: () => ({
        wishlist: [],
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
        removeItem(item){
            const  my_item= this.wishlist.indexOf(item);
            this.wishlist.splice(my_item , 1)
            useWishList().saveLocalStore();
            
        },
        saveLocalStore(){
            window.localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
        }
    },
})