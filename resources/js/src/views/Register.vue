<template>
    <div class="flex flex-shrink w-full justify-center sm:flex-row  px-6 ">
        <div class="w-2/4 ">
            <div class="w-full md:w-96 md:max-w-full mx-auto mt-5">
                <div class="p-6 border border-gray-300 sm:rounded-md">
                    <h3 class="text-2xl font-bold text-center text-cyan-900">Create Account</h3>
                    <form action="">
                        <div class="mt-4">
                            <div class="mt-4">
                                <label class="block text-cyan-800 font-bold" for="names">Names</label>
                                <input type="text" placeholder="Enter Fullname"
                                       class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="mt-4">
                                <label class="block text-cyan-800 font-bold" for="email">Email</label>
                                <input type="text" placeholder="Email"
                                       class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="mt-4">
                                <label class="block text-cyan-800 font-bold">Password</label>
                                <input type="password" placeholder="Password"
                                       class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="mt-4">
                                <label class="block text-cyan-800 font-bold">Confirm Password</label>
                                <input type="password" placeholder="Confirm Password"
                                       class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="flex items-baseline justify-between">
                                <button class="px-6 py-2 mt-4 text-white bg-cyan-800 rounded-lg hover:bg-cyan-500">Login</button>
                                <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>

        <div class="w-2/4 ">
            <div class="font-bold">Banner</div>
        </div>
    </div>

</template>

<script>
export default {}
</script>

<style scoped>

</style>
