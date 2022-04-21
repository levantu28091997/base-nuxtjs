<template>
    <h2 class="text-3xl font-bold">{{ title }}</h2>
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