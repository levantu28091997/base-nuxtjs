<template>
  <div>
    <input
      :id="forLabel"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="typeInput"
      autofocus="autofocus"
      :placeholder="placeholder"
      :aria-describedby="ariaDescribedby"
      :v-model="modelInput"
    >
    {{ errors }}
    <span class="text-xs text-red-700" :id="ariaDescribedby">{{ errors[0] }}</span>
  </div>
</template>

<script>
export default {
    props : {
        forLabel : {
            type : String,
            required : false,
            default: ''
        },
        typeInput : {
            type : String,
            required : true,
            default : 'text'
        },
        ariaDescribedby : {
            type : String,
            required : false,
            default : ''
        },
        placeholder : {
            type : String,
            required : true,
            default : ''
        },
        errors : {
            type : Array,
            required : true,
            default : ()=>([])
        },
        modelInput : {
            type : String,
            required : true,
            default : ''
        }
    }
}
</script>