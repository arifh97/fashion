<template>
   <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="/img/logo.svg" alt="logo">
            GFashion
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input v-model="userForm.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input v-model="userForm.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                      </div>
                      <button @click.prevent="fromSubmit()" type="submit" class="w-full bg-primary-50 text-primary-700 bg-primary-600 hover:bg-primary-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log In</button>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Already have an account? <NuxtLink to="/reg" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registration here</NuxtLink>
                      </p>
                  </form>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
    const url = 'https://reqres.in/api/login';
    definePageMeta({
        layout: "login"
    })
    const userForm = reactive({
      email: 'eve.holt@reqres.in',
      password:'cityslicka'
    })

    async function fromSubmit(){

      if(userForm.email && userForm.password){

        const { data, error } = await useFetch(url, {
          method: 'post',
          body: userForm,
        });
        if(!error.value){
          navigateTo('/');
          window.localStorage.setItem('token', data.value.token)
          console.log(data);
          alert('login successfuly')
        } else{
          alert(error.value.data.error)
        }

      } else{   
        alert('user and password empty')        
      }
    }

</script>

<style lang="scss" scoped>

</style>