<template>
    <div>
        <div class="flex justify-between content-center mb-5">
            <AtomsBaseTitle :title="`Form Create Product`" />
        </div>
        <product-form @onSubmit="onSubmit" />
    </div>
</template>

<script>
import ProductForm from '~/components/organisms/ProductForm.vue'
export default {
    data() {
        return {}
    },
    methods: {
        onSubmit(val) {
            if(val) {
                this.$store.dispatch('products/createProduct', val)
                return this.$router.push('/products')
            }
        }
    },
    components: {
        ProductForm
    }
}
</script>