<template>
    <h2 class="text-3xl font-bold" v-text="title" />
</template>

<script>
export default {
    props: {
        title : {
            type : String,
            required : false,
            default : ''
        }
    }
}
</script>