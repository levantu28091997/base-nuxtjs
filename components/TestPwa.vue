<template>
  <div>
    <button>Add to Home Screen</button> 
    <button @click="toggleScaner">
      Toggle Camera
    </button> 
    <qrcode-stream v-if="this.scan" @decode="onDecode" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            scan: false
        }
    },
    
    methods: {
        toggleScaner() {
            this.scan = ! this.scan
        },
        onDecode (decodedString) {
            console.log(decodedString)
        }
    }
}
</script>

<style>

</style>
