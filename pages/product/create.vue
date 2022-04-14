<template>
  <div class="w-full max-w-xs">
    <ValidationObserver v-slot="{ handleSubmit }" ref="validateFormRef">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit(onSubmit)">
        <div class="mb-4">
          <AtomsBaseFieldLabel :label="$t('product.form._name')" :for-label="`inputName`" />
          <ValidationProvider v-slot="{ errors }" rules="required" vid="name" :name="$t('product.form._name')">
            <input
              id="inputName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              autofocus="autofocus"
              :placeholder="$t('product.form._name_pl')"
              aria-describedby="nameHelp"
              v-model="formData.name"
            >
            <span class="text-xs text-red-700" id="nameHelp">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-4">
          <AtomsBaseFieldLabel :label="$t('product.form._price')" :for-label="`inputPrice`" />
          <ValidationProvider v-slot="{ errors }" rules="required" vid="price" :name="$t('product.form._price')">
            <input
              id="inputPrice"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              autofocus="autofocus"
              :placeholder="$t('product.form._price_pl')"
              aria-describedby="priceHelp"
              v-model="formData.price"
            >
            <span class="text-xs text-red-700" id="priceHelp">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="mb-6">
          <AtomsBaseFieldLabel :label="$t('product.form._description')" :for-label="`inputDescription`" />
          <ValidationProvider v-slot="{ errors }" rules="required" vid="price" :name="$t('product.form._description')">
            <textarea
              rows="3"
              id="inputDescription"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              autofocus="autofocus"
              :placeholder="$t('product.form._description_pl')"
              aria-describedby="descriptionHelp"
              v-model="formData.description"
            />
            <span class="text-xs text-red-700" id="descriptionHelp">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formData : {
                name : '',
                price : '',
                description : ''
            }
        }
    }
}
</script>