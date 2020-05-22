<template>
  <div>
    <header-section />
    <blog-content-header />
    <blog-author v-bind:content="content" class="divmainS page-fixed-item"/>
    <blog-content v-bind:content="content" class=""/>
    <blog-tags v-bind:tags="tags" />
    <blog-rating v-bind:rating="rating" class="divmainS" />
    <comment-component v-bind:comments="content.comments" />
    <footer-component />
  </div>
</template>
<script>
import HeaderSection from "~/components/HeaderSection.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import BlogContentHeader from "~/components/blog2/BlogContentHeader.vue";
import BlogContent from "~/components/blog2/BlogContent.vue";
import BlogAuthor from "~/components/blog2/BlogAuthor.vue";
import BlogTags from "~/components/blog2/BlogTags.vue";
import BlogRating from "~/components/blog2/BlogRating.vue";
import CommentComponent from "~/components/blog2/CommentComponent.vue"
export default {
  components: {
    HeaderSection,
    FooterComponent,
    BlogContentHeader,
    BlogContent,
    BlogAuthor,
    BlogTags,
    BlogRating,
    CommentComponent
  },
  asyncData: function({$axios, params, error}) {
   const dataUrl = "/api/blog/" + params.id + ".json";
   return $axios.get(dataUrl)
    .then(res => {
      return res.data;
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' });
    });
  }
};
</script>

<style lang="scss">
.text-into-class {
  margin-top:20px;
}
.divmainS {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
}
.margin-marcet-recap {
  margin-top:5%;
  margin-bottom:3%;
}
.first-span {
  font-size: 24px;
  line-height: 34px;
  color: #666666;
}
@media (max-width: 600px) {
    .first-span {
      font-size:17px;
      padding-top: 0px;
      line-height: 34px;
      color: #666666;
    }
}
</style>
