<template>
  <div id="app2">
    <!-- 此处监听了两个事件，可以在B组件或者C组件中直接触发 -->
    <child1
      :test = "test"
      :pchild1="child1"
      :pchild2="child2"
      :pchild3="child3"
      @method1="onMethod1"
      @method2="onMethod2"
    ></child1>
  </div>
</template>

<script>
import Child1 from "./Child1.vue";
export default {
    inheritAttrs: false,
  data() {
    return {
      child1: "1",
      child2: 2,
      child3: {
        name: "child3",
      },
      test: "test"
    };
  },
  components: { Child1 },
  methods: {
    onMethod1(msg1) {
      console.log(`${msg1} running`);
    },
    onMethod2(msg2) {
      console.log(`${msg2} running`);
    },
  },
};
</script>

<style scoped>
  .testClass {
    color: red;
  }
</style>
