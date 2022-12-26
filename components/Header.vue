<template>
    <header class="pt-10 pb-8">
        <div class="container">
            <div class="row items-center">
                <NuxtLink to="/" class="flex items-center w-3/12">
                    <img src="/img/logo.svg" alt="" class="w-16 h-16" />
                    <span class="font-medium text-body pl-6 text-3xl">gFashion</span>
                </NuxtLink>
                <form @submit.prevent="onSearch()" class="w-6/12">
                    <div class="relative">
                        <label for="search"
                            class="absolute top-1/2 translate-y-[-50%] text-gray-600 text-lg left-7 cursor-text focus-within:shadow-sm">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </label>
                        <input type="search" placeholder="Search here..." name="" id="search" v-model="searchInput"
                            class="w-full border border-solid border-gray-300 rounded-full outline-none py-4 px-14 text-sm placeholder:text-gray-400 focus:border-primary-700" />
                        <button
                            class="absolute top-1/2 translate-y-[-50%] right-1 border-0 py-4 min-w-[144px] rounded-full bg-gray-600 text-white font-medium text-base leading-none px-10 hover:bg-primary-700 transition">
                            Search
                        </button>
                    </div>
                </form>
                <div class="w-3/12">
                    <div class="flex items-center flex-wrap justify-end gap-2.5">
                        <NuxtLink to="/wishlist"
                            class="relative hover:text-primary-700 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-gray-600 transition-all">
                            <font-awesome-icon icon="fa-regular fa-heart" />
                            <span class="text-xs text-white flex items-center justify-center bg-orange-500 absolute right-0 top-[-4px] w-5 h-5 rounded-full" v-if="wishlist.$state.wishlist.length!= 0">{{wishlist.$state.wishlist.length}}</span>
                        </NuxtLink>
                        <button
                            class="hover:text-primary-700 hover:bg-gray-100 group rounded-full w-12 h-12 flex items-center justify-center text-gray-600 transition-all relative">
                            <font-awesome-icon icon="fa-solid fa-bag-shopping"/>
                            <span class="text-xs text-white flex items-center justify-center bg-orange-500 absolute right-0 top-[-4px] w-5 h-5 rounded-full" v-if="cart.$state.cart.length!= 0">{{cart.$state.cart.length}}</span>

                            <div class="z-10 absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible top-full right-0 min-w-[400px] bg-white rounded-lg shadow-md block">
                                <div class="max-h-96 overflow-auto p-5">
                                    <div class="flex items-center relative mb-4" v-for="item in cart.$state.cart" v-if="cart.$state.cart != 0">
                                        <div class="w-16 h-16 overflow-hidden rounded-xl">
                                            <img :src="item.img" alt="" class="w-full h-full object-cover">
                                        </div>
                                        <div class="pl-3">
                                            <RouterLink to="/" class="text-body hover:text-primary-700 transition">{{item.title}}</RouterLink>
                                            <p class="text-left text-body text-xs">{{item.quity}} <strong class="font-semibold text-primary-700">${{(item.price * item.quity) - ((item.discount * item.quity))}}</strong></p>
                                        </div>
                                        <div class="cursor-pointer absolute top-6 right-0 text-body hover:text-primary-700 transition" @click="cart.removeItem(item)"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
                                    </div>
                                    <div class="py-4" v-if="cart.$state.cart.length == 0">
                                        <h5 class="text-lg mb-4">Cart not found</h5>
                                        <NuxtLink to="/" class="theme-btn">Shop Now</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            
                        </button>
                        <button class="hover:text-primary-700 flex items-center transition-all">
                            <span
                                class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 mr-2">
                                <font-awesome-icon icon="fa-regular fa-user" />
                            </span>
                            <span>Account</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row items-center mt-6">
                <div class="w-3/12">
                    <button
                        class="rounded-full bg-primary-700 text-white justify-between flex items-center py-4 px-8 text-lg font-medium w-10/12 transition-all hover:bg-orange-500">
                        <i>
                            <font-awesome-icon icon="fa-solid fa-bars" />
                        </i>
                        <span>All Categories</span>
                        <i>
                            <font-awesome-icon icon="fa-solid fa-angle-down" />
                        </i>
                    </button>
                </div>
                <div class="w-6/12">
                    <ul class="flex items-center gap-12">
                        <li>
                            <nuxt-link to="/"
                                class="text-sm leading-normal text-body font-normal relative hover:text-primary-700 transition-all"
                                activeClass="text-primary-700">
                                Home
                                <i class="ml-2">
                                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                                </i>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-sm leading-normal text-body font-normal relative hover:text-primary-700 transition-all"
                                activeClass="text-primary-700">
                                Shop
                                <i class="ml-2">
                                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                                </i>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-sm leading-normal text-body font-normal relative hover:text-primary-700 transition-all"
                                activeClass="text-primary-700">
                                Pages
                                <i class="ml-2">
                                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                                </i>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-sm leading-normal text-body font-normal relative hover:text-primary-700 transition-all"
                                activeClass="text-primary-700">
                                Blogs
                                <i class="ml-2">
                                    <font-awesome-icon icon="fa-solid fa-caret-down" />
                                </i>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-sm leading-normal text-body font-normal relative hover:text-primary-700 transition-all"
                                activeClass="text-primary-700">
                                Contact
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-sm leading-normal text-body font-normal relative hover:text-primary-700 transition-all"
                                activeClass="text-primary-700">
                                Track Order
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="w-3/12 text-right">
                    <p class="text-orange-500 font-medium text-xl leading-normal">%Special Offers!</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import {useCartStore} from '@/stores/cart';
    import {useWishList} from '@/stores/wishlist';
    const cart = useCartStore();
    const wishlist = useWishList();
    const searchInput = ref();

    function onSearch(){
        navigateTo(`/courses?search=${searchInput.value} `)
    }

</script>

<style lang="scss" scoped>

</style>
