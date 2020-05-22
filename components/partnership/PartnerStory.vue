<template>
<div class="partnerstory">
  <div class="page-fixed-item-partner-story">
    <div class="story-partnership-title">{{ story.title }}</div>
    <div class="partnerstory-gentitle">
      <div><img class="partner-story-size-avatar" v-bind:src="story.author.avatar" /></div>
      <div class="partnership-pading-author">
      <div class="story-partnership-nameauthor"> {{story.author.name}} </div>
      <div class="story-partnership-descrauthor"> {{story.author.description}} </div>
      </div>
    </div>
    <div v-html="story.description" class="story-big-partnership-description"> {{story.description}}</div>
  </div>
  <div class="cnt-flex-story">
      <div class="cnt-flex-col1"> 
         <div class="partner-story-coltitle">{{story.programs[0].name}}</div>
         <div class="partner-storydescription"> {{story.programs[0].description}}</div>
       </div>
      <div class="cnt-flex-col2">
         <div class="partner-story-coltitle">{{story.programs[1].name}}</div> 
         <div class="partner-storydescription">{{story.programs[1].description}}</div> 
      </div>
    </div>
</div>
</template>
 
<script>
export default {
  components: {},
  props: ["story"]
};
</script>

<style lang="scss">
.page-fixed-item-partner-story{
  padding-left:0px;
  padding-right: 0px;
}
@media (max-width: 900px) {
.page-fixed-item-partner-story{
  padding-left:20px;
  padding-right: 20px;
}
}
.partnerstory {
   max-width: 700px; 
   display: flex;
   flex-direction: column;
   flex-wrap:wrap; 
   margin: auto;
}
.cnt-flex-story {
  display: flex;
  justify-content: space-between;
  margin-top:6%;
}
.cnt-flex-col1 {
  display: flex;
  flex-direction: column; 
  background-color: #ffffff;
  margin-bottom: 20px;
  padding:20px;
  padding-left:0px;
  padding-right: 10px;
  margin-right:30px;
}
@media (max-width: 1175px) {
 .cnt-flex-col1 {
  display: flex;
  flex-direction: column; 
  background-color: #007FD8;
  margin-bottom: 20px;
  padding:20px;
  padding-left:20px;
  padding-right: 20px;
  margin-right:10px;
}
}
@media (max-width: 600px) {
 .cnt-flex-col1 {
  display: flex;
  flex-direction: column; 
  background-color: #007FD8;
  margin-bottom: 20px;
  padding:20px;
  padding-left:20px;
  padding-right: 20px;
  margin-right:0px;
}
}
.cnt-flex-col2 {
  display: flex;
  flex-direction: column; 
  background-color: #ffffff;
  margin-bottom: 20px;
  padding:20px;
  padding-left: 10px;
  padding-right: px;
}
@media (max-width: 1175px) {
 .cnt-flex-col2 {
  display: flex;
  flex-direction: column; 
  background-color: #007FD8;
  margin-bottom: 20px;
  padding:20px;
  padding-left:20px;
  padding-right: 20px;
}
}
@media (max-width: 600px) {
 .cnt-flex-story {
  margin-top:0.5%;
  display: flex;
  flex-wrap:wrap;
  width:100%;
  flex-direction: column; 
 }
}
.partner-storydescription {
  color: $gray-font-color-mobile;
   font-size: 14px;
  line-height: 160%;
  margin-top:10px;
}
@media (max-width: 1175px) {
.partner-storydescription {
  color: white;
  padding-left: 0px;
  font-size: 14px;
  line-height: 160%;
  margin-top: 10px;
}
}
.partner-story-coltitle {
  color: $blue-color-and-link;
  font-size: 28px;
  line-height: 120%;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
@media (max-width: 1175px) {
.partner-story-coltitle {
  color: white;
  padding-bottom: 10px;
  font-size: 28px;
  line-height: 120%;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
} 
.partnership-pading-author {
  padding-left: 20px;
}
.partnerstory-gentitle {
  display:flex;
  align-items: center;
 
}
.story-partnership-title {
  font-size:50px;
  font-weight: bold;
  color: #000000;
  margin-top: 105px;
  margin-bottom:20px;
}
@media (max-width: 600px) {
.story-partnership-title {
  font-size:24px;
  font-weight: bold;
  color: #000000;
  margin-top: 40px;
  margin-bottom:20px;
}
}
.story-partnership-nameauthor {
  font-size:36px;
  font-weight:bold;
  color: #000000;
}
@media (max-width: 600px) {
.story-partnership-nameauthor {
  font-size:20px;
  font-weight:bold;
  color: #000000;
} 
}
.story-partnership-descrauthor {
   font-size:18px;
   color: $gray-font-color-mobile;
}
@media (max-width: 600px) {
.story-partnership-descrauthor {
   font-size:14px;
   color: $gray-font-color-mobile;
}
}
.story-big-partnership-description {
  margin-top: 50px;
  font-size: 18px;
  line-height: 32px;
  color: $gray-font-color-desktop;
}
@media (max-width: 600px) {
.story-big-partnership-description {
  margin-top: 10px;
  font-size: 17px;
  line-height: 27px;
  color: $gray-font-color-mobile;
}
}
@media (max-width: 600px) {
.partner-story-size-avatar {
  width: 80px;
  height: 80px;
}
}

</style>
