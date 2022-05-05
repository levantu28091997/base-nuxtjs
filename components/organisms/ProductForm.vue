<template>
    <ValidationObserver v-slot="{ handleSubmit }" ref="validateFormRef">
        <form class="bg-white rounded pt-6 pb-8 mb-4" @submit.prevent="handleSubmit(onSubmit)">
            <div class="mb-4">
                <AtomsBaseFieldLabel :label="$t('product.form._name')" :required="true" :for-label="`inputName`" />
                <ValidationProvider v-slot="{ errors }" rules="required" vid="name" :name="$t('product.form._name')">
                    <AtomsBaseInput v-model="formData.name"/>
                    <span class="text-xs text-red-700" id="nameHelp">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="mb-4">
                <AtomsBaseFieldLabel :label="$t('product.form._price')" :required="true" :for-label="`inputPrice`" />
                <ValidationProvider v-slot="{ errors }" rules="required" vid="price" :name="$t('product.form._price')">
                    <AtomsBaseInput id="inputPrice" v-model="formData.price" :placeholder="$t('product.form._price_pl')" aria-describedby="priceHelp" type="number" />
                    <span class="text-xs text-red-700" id="priceHelp">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="mb-6">
                <AtomsBaseFieldLabel :label="$t('product.form._description')" :required="true" :for-label="`inputDescription`" />
                <ValidationProvider v-slot="{ errors }" rules="required" :name="$t('product.form._description')">
                    <AtomsBaseInputArea id="inputDescription" v-model="formData.description" aria-describedby="descriptionHelp" :placeholder="$t('product.form._description_pl')" />
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
            this.$emit('onSubmit', {...this.formData, thumbnail: 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg'})
        },
        getDetail() {
            if(this.data) {
                this.formData = Object.assign({}, this.data);
            }
        }
    }
}
</script>