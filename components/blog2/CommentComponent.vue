<template>
  <div class="wrapper-comments page-new-item" v-loading="loading">
    <div class="divmain-cc">
      <span class="comments">{{comments.length}} комментариев</span>
      <div class="input-comments" v-loading="newCommentLoading">
        <div>
          <img class="little-img-comments" src="/img/blogs-img/comment-photo.png" />
        </div>
        <el-form class="class-el-form" @submit.native.prevent>
          <el-input v-if="!authorName" v-model="newAuthorName" class="comment-input" placeholder="Имя"></el-input>
          <div class="class-el-input">
            <el-input v-model="newComment" @keyup.enter.native="onSubmitComment" class="comment-input" placeholder="Введите текст коментария"></el-input>
          </div>
        </el-form>
      </div>
      <div v-for="(comment,index) in comments" v-bind:key="index" class="item-comment" v-bind:class="{responseTo:comment.replyTo}">
        <div class="comments-flex">
          <div class="cc-display-flex">
            <div>
              <img v-if="comment.authorAvatar" :src="comment.authorAvatar" class="little-img-comments" />
              <img v-else class="little-img-comments" src="/img/blogs-img/comment-photo.png" />
            </div>
            <div class="margin-commentComponent">
              <div class="athor-comments">{{comment.authorName}}</div>
              <div class="author-comments-time">{{formatFromIsoToString(comment.time)}}</div>
            </div>
          </div>
        </div>
        <div v-html="comment.content" class="comments-txt">{{comment.content}}</div>
        <div class="comments-txt-to-signs">
          <span class="comments-assessment">{{comment.assessment}}</span>
          <img src="/comments/like.png" class="like-comments">
          <img src="/comments/deslike.png" class="like-comments">
          <span class="comments-answer" v-on:click="addId(comment.id)">Ответить</span>
        </div>
        <div v-if="replyTo==comment.id" class="input-comments" v-loading="newCommentLoading" style="margin-left:40px;margin-top:40px;">
        <div>
          <img class="little-img-comments" src="/img/blogs-img/comment-photo.png" />
        </div>
        <el-form class="class-el-form" @submit.native.prevent>
          <el-input v-if="!authorName" v-model="newAuthorName" class="comment-input-name" placeholder="Имя"></el-input>
          <div class="class-el-input">
            <el-input v-model="newAnswer"  @keyup.enter.native="onSubmitAnswer" class="comment-input" placeholder="Введите текст коментария"></el-input>
          </div>
        </el-form>
      </div>
    </div>
  
   </div>
</div>
</template>
<script>
 import moment from 'moment';
  export default {
    data() {
      return {
        comments: [],
        newComment: "",
        newAnswer: "",
        authorName: "",
        newAuthorName:"",
        loading: false,
        newCommentLoading: false,
        replyTo: null,
      };
    },
    components: {},
    methods: {
      onSubmitComment() {
        const authorName = this.getAuthorName();
        this.submitComment(this.newComment, null, authorName).then(() => {
          this.newComment = "";
        }).catch(err => {
          this.newComment = "";
        })
      },
      addId(id){
         this.replyTo = id;
         this.newAnswer = '';
      },
      onSubmitAnswer() {
        const authorName = this.getAuthorName();
        this.submitComment(this.newAnswer, this.replyTo, authorName).then(() => {
          this.newAnswer = "";
          this.replyTo = null;
        }).catch(err => {
          this.newAnswer = "";
          this.replyTo = null;
        })
      },
      submitComment(commentText, replyTo, authorName ) {
        const dataUrl = "/api/comments/" + this.$route.params.id;
        this.newCommentLoading = true;
        return this.$axios.post(dataUrl, {
          authorName:authorName,
          replyTo:replyTo,
          content:commentText
        }).then(res => {
          this.newCommentLoading = false;
          return this.loadComments();
        }).catch(err => {
          console.error(err);
          this.newCommentLoading = false;
        })
      },
      getAuthorName() {
        let authorName = "Аноним";
        if (this.authorName) {
          authorName = this.authorName;
        } else if(this.newAuthorName) {
          authorName = this.newAuthorName;
          this.authorName = this.newAuthorName;
        }
        return authorName;
      },
      formatFromIsoToString(val) {
        return moment(val).fromNow();
      },
      loadComments() {
        this.loading = true;
        const dataUrl = "/api/comments/" + this.$route.params.id;
        this.$axios.get(dataUrl)
        .then(res => {
          this.comments = res.data.sort((a, b) => {
            // console.log(a.id, a.replyTo, b.id, b.replyTo);
            if (a.replyTo && a.replyTo != b.replyTo) {
              if (a.replyTo < b.id ) {
                return -1;
              }
              if (a.replyTo > b.id ) {
                return 1;
              }
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            if (a.id > b.id) {
              return 1;
            }
            return 0;
          });
          this.loading = false;
        })
        .catch((e) => {
          console.error(e);
          this.comments = [];
          this.loading = false;
        });
      }
    },
    mounted() {
      this.loadComments();
    },
  };
</script>

<style lang="scss">
  .comments {
    color: $gray-font-color-desktop;
    font-size: 18px;
    margin-top: 5%;
    margin-bottom: 3%;
    line-height: 100%;
  }

  .comments-flex {
    display: flex;
  }

  .input-comments {
    display: flex;
    align-items: center;
    background-color: white;
    color: $gray-comments-assets-txt;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border: 1px solid #EDEDED;
    border-radius: 4px;

  }
  .divmain-cc {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    padding-bottom: 10px;
  }
 .cc-display-flex {
    display: flex;
  }
  .athor-comments {
    font-size: 15px;
    line-height: 100%;
    font-weight: normal;
    color: $blue-color-and-link;
  }
  .author-comments-time {
    font-size: 12px;
    color: $gray-comments-time;
  }
  .comments-txt {
    font-size: 15px;
    line-height: 26px;
    color: $gray-font-color-blog;
    padding-right: 30px;
    margin-left: 64px;
  }
  @media(max-width: 600px) {
    .comments-txt {
    font-size: 15px;
    line-height: 26px;
    color: $gray-font-color-blog;
    padding-right: 30px;
    margin-left: 10px;
  }
  }
  .margin-commentComponent {
    margin: auto;
  }
  .like-comments {
    margin-right: 10px;
    cursor: pointer;
  }

  .comments-answer {
    font-size: 12px;
    color: $gray-font-color-blog;
    cursor: pointer;
    margin-left: 4%;
  }

  .wrapper-comments {
    box-sizing: border-box;
    width: 100%;
    background-color: #F9F9F9;
  }

  .item-comment {
    border: 1px solid #EDEDED;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .little-img-comments {
    padding-left: 15px;
    padding-right: 10px;
  }

  .responseTo {
    margin-top: 0px;
    margin-left: 7%;
  }

  .comments-assessment {
    font-size: 12px;
    color: black;
    font-weight: bold;
    margin-right: 2%;
  }

  .comments-txt-to-signs {
    font-size: 15px;
    line-height: 26px;
    color: $gray-font-color-blog;
    margin-left: 64px;
    display: flex;
    align-items: center;
  }
  @media(max-width: 600px) {
    .comments-txt-to-signs {
    font-size: 15px;
    line-height: 26px;
    color: $gray-font-color-blog;
    margin-left: 12px;
    display: flex;
    align-items: center;
  }
  }

  .comment-input {
    margin-right: 5px;
  }
  .comment-input-else {
    display: none;
  }
  .comment-input-name {
    width: 50%;
    border:1px solid red;
  }
  .class-el-form {
    width: 100%; 
    margin-right: 20px;
  }
  .class-el-input {
    display: flex;
    flex-direction: row
  }

</style>
