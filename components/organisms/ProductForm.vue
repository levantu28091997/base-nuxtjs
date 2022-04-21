<template>
    <ValidationObserver v-slot="{ handleSubmit }" ref="validateFormRef">
        <form class="bg-white rounded pt-6 pb-8 mb-4" @submit.prevent="handleSubmit(onSubmit)">
            <div class="mb-4">
                <AtomsBaseFieldLabel :label="$t('product.form._name')" :required="true" :for-label="`inputName`" />
                <ValidationProvider v-slot="{ errors }" rules="required" vid="name" :name="$t('product.form._name')">
                    <input
                        id="inputName"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        autofocus="autofocus"
                        :placeholder="$t('product.form._name_pl')"
                        aria-describedby="nameHelp"
                        name="name"
                        v-model="formData.name"
                    >
                    <span class="text-xs text-red-700" id="nameHelp">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="mb-4">
                <AtomsBaseFieldLabel :label="$t('product.form._price')" :required="true" :for-label="`inputPrice`" />
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
                <AtomsBaseFieldLabel :label="$t('product.form._description')" :required="true" :for-label="`inputDescription`" />
                <ValidationProvider v-slot="{ errors }" rules="required" vid="price" :name="$t('product.form._description')">
                    <textarea
                        rows="11"
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
            <div class="flex items-center justify-center">
                <AtomsBaseButton />
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
export default {
    props : {
        data : {
            type : Object,
            required : false,
            default : () => ({})
        }
    },
    data() {
        return {
            formData : {
                name : '',
                price : '',
                description : ''
            }
        }
    },
    mounted() {
        this.getDetail()
    },
    methods: {
        onSubmit() {
            this.$emit('onSubmit', this.formData)
        },
        getDetail() {
            if(this.data) {
                this.formData = Object.assign({}, this.data);
            }
        }
    }
}
</script>