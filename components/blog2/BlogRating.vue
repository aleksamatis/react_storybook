<template>
  <div class="blog-main-rating page-new-item">
    <div class="blog-rating-grid" v-if="rating">
      <div class="br1">
        <span class="blog-rating-m">Средняя оценка от {{rating.votes}} читателей</span>
        <div class="blog-rating-flex">
          <div class="block-rating-block">{{rating.rating}}</div>
          <el-rate class="el-rate-class" v-on:change="sendVote" v-bind:value="rating.vote"></el-rate>
        </div>
      </div>
      <div class="br2">
        <span class="blog-rating-m">Поделиться:</span>
        <div class="blog-rating-custom-flex">
          <img src="/img/blogs-img/facebook.png" />
          <img src="/img/blogs-img/twit.png" />
          <img src="/img/blogs-img/wk.png" />
        </div>
      </div>
      <div class="br3">
        <el-button disabled size="small" class="br-relative-btn-blogaut class-custom-btn-blogRating"><img src="/img/blogs-img/blog-2-content-img.png"
            class="abs-img-blograting" />В закладки</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return { 
        rating: null
      };
    },
    mounted() {
      this.loadVotes();
    },
    methods: {
      loadVotes() {
        const ratingsUrl = "/api/ratings/" + this.$route.params.id;
        return this.$axios.get(ratingsUrl)
        .then(res => {
          this.rating = res.data;
        });
      },
      sendVote(value) {
        const ratingsUrl = "/api/ratings/" + this.$route.params.id;
        return this.$axios.post(ratingsUrl, {value: value})
        .then(res => {
          return this.loadVotes();
        });
      }
    }
    
  };

</script>

<style lang="scss">
  .blog-main-rating {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .blog-rating-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "br1 br2 br3"
  }

  @media(max-width: 600px) {
    .blog-rating-grid {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        "br1 br1 br1"
        "br2 br2 br3"

    }
  }
  .blog-rating-custom-flex {
    margin-top:2%;
  }

  .br1 {
    grid-area: br1;
  }

  .br2 {
    grid-area: br2;
    text-align: center;
    // margin-top:auto;
  }
  @media(max-width: 600px) {
     .br2 {
    grid-area: br2;
    text-align: left;
    // margin-top:auto;
  }
  }
  .br3 {
    grid-area: br3;
    text-align: right;
    margin-top:auto;
  }
  .br-relative-btn-blogaut {
    position: relative;
    padding-left: 30px;
  }
  .class-custom-btn-blogRating {
    padding-left: 47px;
    padding-right: 17px;
  }

  .blog-rating-m {
    font-size: 12px;
    color: #999999;
  }

  .block-rating-block {
    background-color: #EEEEEE;
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 3px;
    padding-bottom: 3px;
    width: 22px;
  }

  .blog-rating-flex {
    display: flex;
    align-items: center;
    margin-top: 2%;
  }
  .bookmarks_btn {
    display: inline-block;
    background-color: white;
    margin-bottom: 0;
    margin-right: 10px;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 10px 32px;
    font-size: 15px;
    border-radius: 0px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .el-rate-class {
    margin-left: 2%;
  }

  .bookmarks_btn {
    color: #333;
    background-color: white;
    border: 1px solid grey;
    color: black;
    text-align: center;
  }

  .abs-img-blograting {
    position: absolute;
    left: 26px;
    top: 20%;
    padding-right: 10px;
  }

</style>
