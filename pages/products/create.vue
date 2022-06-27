<template>
    <div>
        <div class="flex justify-between content-center mb-5">
            <AtomsBaseTitle :title="`Form Create Product`" />
        </div>
        <ProductForm @onSubmit="onSubmit" />
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
            if(!val){
                return
            }

            this.$store.dispatch('products/createProduct', val)
            .then((res)=>{
                return this.$router.push('/products')
                //TODO:hander notifications on UI
            })
            .catch((err)=>{
                console.log(err);
                //TODO:hander notifications on UI
            })
        }
    },
    components: {
        ProductForm
    }
}
</script>