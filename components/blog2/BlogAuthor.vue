<template>
  <div class="divmainS m-blog-author">
    <div class="flex-display-author">
      <div>
        <img src="/img/blogs-img/second_bl_face_2.png" />
      </div>
      <div class="flex-display-author-subscribe-top">
        <div class="blog-author">{{content.author.name}}</div>
        <div class="blog-author-subscribe">{{content.published}}</div>
      </div>
      <div class="m-special">
        <el-button disabled size="small" class="relative-btn-blogaut"><img src="/img/blogs-img/heart.png"
            class="abs-img-blogaut" />Добавить в избранное</el-button>
      </div>
    </div>
    <div v-bind:content="content" class="blogcontent-title">
      <img class="blogcontent-img-absolute" src="/img/blogs-img/blog-content-img.png">
      {{content.title}}
    </div>
    <div class="first-undertitle-span">{{content.text}}</div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: ["content"]
  };

</script>

<style lang="scss">
  .flex-display-author {
    flex-direction: row;
    display: flex;
    margin-top: 5.5%;
    align-items: center;
  }
  .flex-display-author-subscribe-top {
    padding-left:14px;
  }

  .blog-author {
    color: $blue-color-and-link;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
  }

  .m-blog-author {
    margin-top: 50px;
  }

  .blog-author-subscribe {
    color: $gray-font-color-blog-author;
    font-size: 13px;
    line-height: 18px;
  }
  .relative-btn-blogaut {
    position: relative;
    padding-left: 30px;
  }

  .abs-img-blogaut {
    position: absolute;
    left: 10px;
    top: 30%;
    padding-right: 10px;
  }

  .m-special {
    margin-top: -20px;
    margin-left: 20px;
    display: block;
  }


  .first-undertitle-span {
    font-size: 24px;
    font-weight: normal;
    line-height: 34px;
    color: #666666;
  }

  @media (max-width: 600px) {
    .first-undertitle-span {
      font-size: 17px;
      font-weight: normal;
      line-height: 34px;
      color: #666666;
    }
  }
  @media (max-width: 600px) {
    .m-special {
    margin-top: -20px;
    margin-left: 20px;
    display: none;
  }
  }

</style>
