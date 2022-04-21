<template>
    <aside class="w-full sm:w-1/3 md:w-1/4 px-5">
        <div class="sticky top-0 p-4 bg-white w-full mr-2 shadow-lg">
            <ul class="nav flex flex-col overflow-hidden">
                <li class="nav-item">
                    <Nuxt-link class="nav-link block text-blue-500 hover:text-blue-800 truncate py-3" to="/">Home</Nuxt-link>
                </li>
                <li class="nav-item">
                    <Nuxt-link class="nav-link block text-blue-500 hover:text-blue-800 truncate py-3" to="/categories">Category</Nuxt-link>
                </li>
                <li class="nav-item">
                    <Nuxt-link class="nav-link block text-blue-500 hover:text-blue-800 truncate py-3" to="/products">Products</Nuxt-link>
                </li>
                <li class="nav-item">
                    <Nuxt-link class="nav-link block text-blue-500 hover:text-blue-800 truncate py-3" to="/blogs">Blogs</Nuxt-link>
                </li>
                <li class="nav-item">
                    <Nuxt-link class="nav-link block text-blue-500 hover:text-blue-800 truncate py-3" to="/contact-us">Contact us</Nuxt-link>
                </li>
            </ul>
        </div>
    </aside>
</template>