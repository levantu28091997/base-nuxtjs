<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" :class="required ? 'required':''" :for="forLabel"> {{ label }} </label>
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
        },
        required : {
            type: Boolean,
            required : false,
            default : false
        }
    }
}
</script>

<style lang="scss" scoped>
    label {
        &.required {
            &::after {
                content: '*';
                color: red;
            }
        }
    }
</style>