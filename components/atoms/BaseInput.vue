<template>
    <input
        id="inputName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        autofocus="autofocus"
        :placeholder="$t('product.form._name_pl')"
        aria-describedby="nameHelp"
        ref="inputRef"
        :value="value"
        @input="updateInput()"
    >
</template>

<script>
export default {
    props: {
        value : {
            type : String,
            requires : false,
            default : ''
        }
    },
    methods: {
        updateInput() {
            this.$emit('input', this.$refs.inputRef.value)
        }
    }
}
</script>