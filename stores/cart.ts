export const useCartStore = defineStore('cart', {
    state:() => ({
        cart: [],
    }),
    actions:{
        addCart(item){
            const found = this.cart.find(product => product.img === item.img);
            if(found){
                found.quity++
            }  else{
                this.cart.push(item)
            }
            useCartStore().saveLocalStore();
        },
        saveLocalStore(){
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
    },
})