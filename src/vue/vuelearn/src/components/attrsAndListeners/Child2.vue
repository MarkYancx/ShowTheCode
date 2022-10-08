<template>
  <div class="child-2">
    <h2>in child2:</h2>
    <p>props: {{ pChild2 }}</p>
    <p>$attrs: {{ $attrs }}</p>
    <p>pchild3Name: {{ $attrs.pchild3.name }}</p>
    <hr/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child2:'child2'
    };
  },
  props: {
    pChild2:{
      type:String,
    }
  },
  inheritAttrs: false,
  mounted() {
    this.$emit("method2",this.child2);
  },
};
</script>
