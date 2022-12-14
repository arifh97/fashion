<template>
    <div>
        <div class="flex items-center justify-around gap-2">
            <button @click="deCrement()"
                class="w-10 h-10 rounded-full border border-solid border-white text-white hover:bg-primary-700 hover:border-primary-700">
                <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <span
                class="w-10 h-10 rounded-full border border-solid border-white flex items-center justify-center bg-white text-primary-700">{{ count }}</span>
            <button @click="inCrement()"
                class="w-10 h-10 rounded-full border border-solid border-white text-white hover:bg-primary-700 hover:border-primary-700">
                <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
        </div>
        <button class="theme-btn capitalize mt-3 !px-5 !min-w-max !text-sm" @click="cart.addCart(cartItem)">add to cart</button>
        <button class="theme-btn !p-3 !leading-none ml-2 !mt-0 !min-w-max ">
            <font-awesome-icon icon="fa-regular fa-heart" />
        </button>
    </div>
</template>

<script setup>
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();
const props = defineProps(['cartData']);
const count = ref(1);

const cartItem = reactive({
    categorey:props.cartData.title,
    discount:props.cartData.discount,
    id:props.cartData.id,
    img:props.cartData.img,
    price:props.cartData.price,
    rating:props.cartData.rating,
    status:props.cartData.status,
    title: props.cartData.title,
    quity: count,
})


function inCrement() {
    count.value++
    console.log(count.value)
}
function deCrement() {
    if(count.value == 1){
        count.value = 1
    } else{
        count.value--
    }
}
</script>

<style lang="scss" scoped>

</style>