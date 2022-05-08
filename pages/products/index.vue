<template>
    <div class="container mx-auto">
        <PageHeader :path="dataPageInfo.path" :name="dataPageInfo.name" />
        <div class="bock-items mb-5">
            <ProductList :products="getAllProduct" @handerDelete="handerDelete" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageHeader from '~/components/molecules/PageHeader'
import ProductList from '~/components/organisms/ProductList'

const NAME = 'Create'
const PATH = 'products/create'
export default {
    data() {
        return {
            dataPageInfo : {
                name : NAME,
                path : PATH
            }
        }
    },
    async fetch({ store }){
        await store.dispatch('products/setProducts')
    },
    computed: {
        ...mapGetters('products',[
            'getAllProduct'
        ])
    },
    methods: {
        handerDelete(id) {
            let text = "Are you sure you want to delete this item?";
            if (confirm(text) == true) {
                this.$store.dispatch('products/deleteProduct', id)
                .then((res)=>{
                    //TODO:hander notifications on UI
                })
                .catch((err)=>{
                    console.log(err);
                    //TODO:hander notifications on UI
                })
            }
        }
    },
    components: {
        PageHeader,
        ProductList
    }
}
</script>
