<template>
    <Nuxt-link class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :to="path">{{ name }}</Nuxt-link>
</template>

<script>
export default {
    props: {
        path : {
            type : String,
            required : false,
            default : ''
        },
        name : {
            type : String,
            required : false,
            default : ''
        }
    }
}
</script>