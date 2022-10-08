<template>
  <div class="child-1">
    <h2>in child1</h2>
    <p>props: {{ pchild1 }}</p>
    <p>$attrs: {{ $attrs }}</p>
     <p>$listeners: {{ $listeners }}</p>
    <hr/>
    <!-- 通过 v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
    <!-- C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
    <child2  v-bind="$attrs" v-on="$listeners"></child2>
  </div>
</template>

<script>
import Child2 from "./Child2.vue";
export default {
  data() {
    return {
      child1:'child1'  
    };
  },
  components: { Child2 },
  props: {
    pchild1:{
      type:String
    }
  },  
  inheritAttrs: false,
  mounted() {
    this.$emit("method1",this.child1);
  },
};
</script>
