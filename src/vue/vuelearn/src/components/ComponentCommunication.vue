<template>
  <div>
  
    
        <router-link to="/propsAndEmit" tag="button">propsAndEmit</router-link><br>
        <!-- <router-link to="/propsAndEmit" tag="button">parentsAndChildren</router-link><br>
        <router-link to="/propsAndEmit" tag="button">provideAndInjected</router-link><br> -->

    
  
  </div>
</template>

<script>
export default {
  name: 'ComponentCommunication',
  data () {
    return {
      communications:['propsAndEmit','parentsAndChildren','provideAndInjected']
    }
  }
}
</script>

<style scoped>
.button {
    display: block;
}
</style>