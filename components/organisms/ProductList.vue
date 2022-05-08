<template>
    <table class="border-collapse table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="border-b bg-gray-50">
            <tr>
                <th class="w-1/4 border-b dark:border-slate-600 font-medium py-4 px-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Title</th>
                <th class="w-1/4 border-b dark:border-slate-600 font-medium py-4 px-2 pb-3 text-slate-400 dark:text-slate-200 text-center">Thumbnail</th>
                <th class="w-1/4 border-b dark:border-slate-600 font-medium py-4 px-2 pb-3 text-slate-400 dark:text-slate-200 text-center">Price</th>
                <th class="w-1/2 border-b dark:border-slate-600 font-medium py-4 px-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Description</th>
                <th class="w-1/4 border-b dark:border-slate-600 font-medium py-4 px-2 pb-3 text-slate-400 dark:text-slate-200 text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in products" :key="index">
                <td class="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400" v-text="item.name" />
                <td class="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                    <img class="w-20 h-auto rounded-lg m-auto" :src="`${item.thumbnail}`" alt="Thumbnail">
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 text-center" v-text="item.price" />
                <td class="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400" v-text="item.description" />
                <td class="border-b border-slate-100 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                    <div class="flex">
                        <div class="p-2 my-2 text-red-500 cursor-pointer hover:text-red-300" @click="handerDelete(item.id)">Delete</div>
                        <Nuxt-link class="inline-block p-2 my-2 text-blue-500 hover:text-blue-300" :to="`/products/${item.id}`">Edit</Nuxt-link>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        products : {
            type: Array,
            required: true,
            default: () => []
        }
    },
    methods: {
        handerDelete(id) {
            if(id) {
                this.$emit('handerDelete', id)
            }
        }
    }
}
</script>