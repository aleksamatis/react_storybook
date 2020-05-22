<template>
  <div class="main">
      <div class="flexBlock">
        <img class="recordImage" v-bind:src="record.image"/>
        <div class="txt text-margins">
          <div class="text-margins">
          <div class="el-icon-collection-tag small-hidden el-icon-collection-tag-custom" />
             <nuxt-link v-bind:to="link">{{record.header}} </nuxt-link>
          </div>
         
          
        </div>
        <div class="text-margins listItem-preview-font">{{record.preview}}</div>
        <div class="listItem-record-author-avatar">
          <div>
            <img v-bind:src="record.author.avatar" />
          </div>
          <div class="listitem-width">
            <div class="author-name-margin">
              <div class="author-name-txt-color">{{record.author.name}}</div>
              <div class="author-name-date-color">{{record.published}}</div>
            </div>
          </div>
          <div class="listItem-views">
            <div class="el-icon-view records-margin"/>
            <div>{{record.views}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  components: {},
  props: ["record"],
  computed: {
    link: function() {
      return "/blog/" + this.record.id;
    }
  }
};
</script>
<style lang="scss">
@media(max-width: 500px) {
  .small-hidden {
    display: none;
  }
}
.author-name-margin {
    margin-top:2.9%; 
    margin-left:2.4%;
}
.author-name-txt-color {
  font-size: 13px;
  line-height: 15px;
  color: $gray-font-color-blog;
}
.author-name-date-color{
  font-size: 11px;
  color: $gray-font-color-blog-author;
}
.records-margin {
  margin-right: 5px;
}
.listitem-width {
  width:100%;
}
.el-icon-collection-tag-custom {
  color:#C4C4C4;
  position: relative;
  left: -30px;
  margin-right: -30px;
}
.listItem-views {
  display: flex;
  justify-content: center; 
  align-items:center; 
  color: $gray-font-color-blog-author;
}
.listItem-preview-font {
  font-size: 13px; 
  color:var(--gray-font-color-blog); 
  margin-bottom: 15px
}
.listItem-record-author-avatar {
  display:flex;
  font-size: 14px; 
}
.text-margins {
  margin-left: 5px;
  margin-right: 5px;
}
.main {
margin-left: 20px;
margin-right:20px;
margin-top: 7%;
}
.txt {
  width:100%; 
  font-size:18px; 
  font-weight: bold; 
  margin-bottom: 15px ;
}
.flexBlock {
 display:flex; 
 flex-direction: column;
 margin: 0 auto; 
}
.recordImage {
  width:100%;
  height:auto; 
  margin-bottom: 20px;
}

</style>