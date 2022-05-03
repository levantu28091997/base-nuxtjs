<template>
    <div>
        <div class="flex justify-between content-center mb-5">
            <AtomsBaseTitle :title="`Form Create Product`" />
        </div>
        <ProductForm @onSubmit="onSubmit" :data="showProduct" ref="productFormRef" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ProductForm from '~/components/organisms/ProductForm.vue'
export default {
    name: 'ProductDetail',
    async fetch({ store, route }){
        await store.dispatch('products/setProduct', route.params.id)
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters('products',['showProduct']),
    },
    methods: {
        onSubmit(val) {
            let productId = this.$route.params.id
            if(productId && val){
                this.$store.dispatch('products/updateProduct', { id:productId, data: val})
            }
        }
    },
    components: {
        ProductForm
    }
}
</script>