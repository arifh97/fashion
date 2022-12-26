<template>
  <div>
    <LazyHeader />
    <slot />
    <LazyFooter />
  </div>
</template>
<script setup>
  import { useCartStore } from '~~/stores/cart';
  import { useWishList } from '~~/stores/wishlist';
  const cart = useCartStore();
  const wishlist = useWishList();

  onMounted(() => {
    const getItem = window.localStorage.getItem('cart');
    getItem ? cart.$state.cart=JSON.parse(getItem) : [];
    
    const getList = window.localStorage.getItem('wishlist');
    getList ? wishlist.$state.wishlist=JSON.parse(getList) : [] ;
    
  })

</script>


<style lang="scss">
    .page-enter-active,
    .page-leave-active {
      transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
      opacity: 0;
      filter: blur(1rem);
    }
</style>