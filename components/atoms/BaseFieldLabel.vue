<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" :for="forLabel"> {{ label }} </label>
</template>

<script>
export default {
    props : {
        label : {
            type : String,
            required : true,
            default : ''
        },
        forLabel : {
            type : String,
            required : false,
            default : ''
        }
    }
}
</script>