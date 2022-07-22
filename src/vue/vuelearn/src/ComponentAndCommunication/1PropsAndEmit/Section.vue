// section父组件
<template>
  <div class="section">
    <com-article :articles="articleList"></com-article>
  </div>
</template>

<script>
import comArticle from './Article'
export default {
  name: 'section',
  components: { comArticle },
  data() {
    return {
      articleList: ['红楼梦', '西游记', '三国演义']
    }
  },
  mounted() {
    console.log("section mounted");
  }
}
</script>
