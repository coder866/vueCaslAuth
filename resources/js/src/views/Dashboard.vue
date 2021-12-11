<template>

    <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden bg-cream-200">
        <div class="sm:w-1/3 md:w-1/4 w-full flex-shrink flex-grow-0 p-4 pb-0 pl-0 pr-2 pt-0">
            <div class="sticky top-0 p-4 w-auto bg-yellow-200 h-auto ">
                <div class="bg-cyan-800 text-white font-bold p-3 rounded-lg">Brand</div>
                <ul class="nav flex sm:flex-col overflow-hidden content-center justify-between">
                    <li class="py-1 px-2 bg-cyan-600 text-white-500 rounded-lg leading-7 mt-1 hover:bg-gray-300 group"><router-link to="/"      class="text-white hover:text-cyan-800 group-hover:text-cyan-800 font-bold">Dashboard</router-link></li>
                    <li class="py-1 px-2 bg-cyan-600 text-white-500 rounded-lg leading-7 mt-1 hover:bg-gray-300 group"><router-link to="/home"  class="text-white hover:text-cyan-800 group-hover:text-cyan-800 font-bold">Home</router-link></li>
                    <li class="py-1 px-2 bg-cyan-600 text-white-500 rounded-lg leading-7 mt-1 hover:bg-gray-300 group"><router-link to="/login" class="text-white hover:text-cyan-800 group-hover:text-cyan-800 font-bold">Login</router-link></li>

                </ul>
            </div>
        </div>

        <div class="grid grid-rows-6 grid-flow-row w-full flex-grow   overflow-auto" >
            <!--            <header class=" row-span-1 border-2 border-black  bg-red-500">Header</header>-->
            <main role="main" class="row-span-5 w-full flex-grow p-3  overflow-auto ">

                <router-view v-slot="{ Component }">
                    <transition>
                        <component :is="Component" />
                    </transition>
                </router-view>

            </main>
            <!--            <div class="row-span-1/2 align-baseline "> <p class="align-baseline border border-yellow-500 text-red-300">Copy Right @2022 | All Rights Reserved</p></div>-->
        </div>
    </div>


</template>
<script>
export default {}
</script>

<style scoped>
ul.nav li{
    @apply p-2 bg-gray-200 border border-red-100
}
</style>
