<template>
    <div class="flex justify-between content-center mb-5">
        <AtomsBaseTitle :title="`Product List`" />
        <AtomsBaseButtonLink :path="path" :name="name" />
    </div>
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