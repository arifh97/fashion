export const useCartStore = defineStore('cart', {
   state: () => ({
    cart:[],
   }),
   getters:{
   },
   actions:{
    addToCart(item){
        const found = this.cart.find(product => product.img === item.img);
        if(found){
            item.quity++
        } else{            
            this.cart.push(item);
        }
        useCartStore().saveLocalStore();
    },
    removeItem(myItem){
        const inItem = this.cart.indexOf(myItem);
        this.cart.splice(inItem, 1);
        useCartStore().saveLocalStore();
    },
    saveLocalStore(){
        window.localStorage.setItem('cart', JSON.stringify(this.cart));
    },
   },
})