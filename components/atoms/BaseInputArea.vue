<template>
    <textarea
        rows="11"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        autofocus="autofocus"
        ref="inputRef"
        :value="value"
        @input="updateInput()"
        @blur="updateInput()"
    />
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