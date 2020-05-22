<template>
  <div class="saved-main page-new-item">
    <div class="saved-justify">
      <div class="saved-main-flex">
        <div class="saved-relative">
        <div class="img-saved-align" >
          <img v-bind:src="content.author.image" />
        </div>
        <el-button disabled size="small" class="visiability-savedElbtn">
          Удалить из закладок
        </el-button>
        </div>
        <div>
          <div class="favorites-authors-flex">
            <div>
              <div class="saved-title-font">{{content.title}}</div>
              <div class="saved-text-font">{{content.text}}</div>
            </div>
          </div>
          <div class="saved-authors-flex">
            <div class="saved-link-cl">{{content.author.name}}</div>
            <div>{{content.time}}</div>
          </div>
        </div>
      </div>
      <div class="visiability-savedBtn">
        <button class="btn-saved btn-defaultbtn-saved">Удалить из закладок</button>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    components: {},
    props: ["content"],
    methods: {
      formatFromIsoToString(val) {
        return moment(val).fromNow();
      }
    }
  };

</script>

<style lang="scss">
  .visiability-savedBtn {
    align-self: center;
    display: block;
  }
  @media (max-width: 600px) {
    .visiability-savedBtn {
      align-self: center;
      display: none;
    }
  }
  .img-saved-align {
    align-self: start
  }
  .visiability-savedElbtn {
    align-self: center;
    display: none;
  }
  @media (max-width: 600px) {
    .visiability-savedElbtn {
      align-self: center;
      display: block;
      position: absolute;
      left: 110%; 
      bottom: 15px
    }
  }
  .saved-main {
    border-bottom: 1px solid #ededed;
    margin-bottom: 10px;
    width: 80%;
    display: flex;
    margin: auto;
    padding: top 30px;
    padding-bottom: 1%;
    padding-top: 1%;
  }
  .saved-main-flex {
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    .saved-main-flex {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  .saved-justify{
    justify-content: space-between;
    display: flex;
    width: 100%
  }
  .saved-relative{
    position:relative;
  }
  .saved-title-font {
    font-size: 18px;
    line-height: 26px;
    margin-left: 20px;
    color: black;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    .saved-title-font {
      font-size: 18px;
      line-height: 26px;
      margin-left: 0px;
      color: black;
      font-weight: bold;
    }
  }
  .saved-text-font {
    font-size: 13px;
    line-height: 18px;
    margin-left: 20px;
    font-weight: normal;
    color: #666666;
  }
  @media (max-width: 600px) {
    .saved-text-font {
      font-size: 13px;
      line-height: 18px;
      margin-left: 0px;
      font-weight: normal;
      color: #666666;
    }
  }

  .saved-authors-flex {
    display: flex;
    align-items: center;
  }

  .saved-link-cl {
    font-size: 11px;
    cursor: pointer;
    margin-left: 20px;
    line-height: 140.62%;
    color: #007fd8;
  }
  @media (max-width: 600px) {
    .saved-link-cl {
      font-size: 11px;
      cursor: pointer;
      margin-left: 0px;
      line-height: 140.62%;
      color: #007fd8;
    }
  }
  .btn-saved {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 6px 16px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 50px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .btn-defaultbtn-saved {
    color: #333;
    background-color: white;
    border: 1px solid #c4c4c4;
    color: #aaaaaa;
  }

</style>
