<template>
  <div class="container mx-auto">
    <div class="flex justify-between content-center">
      <h2 class="font-bold">
        {{ $t('common.title') }}
      </h2>
      <div>
        <Nuxt-link class="px-3 py-1 bg-gray-300 rounded-lg" to="product/create">
          Add item
        </Nuxt-link>
      </div>
    </div>
    <ul>
      <li v-for="(item, index) in getAllProduct" :key="index">
        <div class="flex">
          <div class="title">
            {{ item.title }}
          </div>
          <div>
            <Nuxt-link :to="`/product/${index}`">
              Edit
            </Nuxt-link>
            <button>Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }){
        await store.dispatch('products/setProducts')
    },
    computed:{
        ...mapGetters('products',[
            'getAllProduct'
        ])
    },
    methods:{
    }
}
</script>
