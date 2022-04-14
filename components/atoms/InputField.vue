<template>
  <ValidationProvider v-slot="{ errors }" rules="required" vid="price" :name="$t('product.form._price')">
    <input
      id="inputPrice"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      autofocus="autofocus"
      :placeholder="$t('product.form._price_pl')"
      aria-describedby="priceHelp"
      :v-model="model"
    >
    <span class="text-xs text-red-700" id="priceHelp">{{ errors[0] }}</span>
  </ValidationProvider>
</template>


<script>
export default {
    props : {
        model : {
            type : String,
            required : false,
            default : ''
        }
    }
}
</script>