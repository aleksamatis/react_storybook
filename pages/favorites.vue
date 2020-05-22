<template>
  <div>
    <button v-on:click="settingSasa" class="authors-main-trigger">
        Переключить состояние
     </button>
    <header-section />
    <favorites-content-header />
    <div class="authors-title page-fixed-item">Любимые авторы</div>
    <!--message-->
    <div class="authors-main width-toEmpty-favorites" v-if="content.length == 0">
      <div class="spec-Emptytop">Вы пока не добавляли авторов в этот список.</div>
      <div class="spec-emptyTop">
        Сделать это можно нажав кнопку
        <el-button disabled size="small" class="relative-btn-favorites">
          <img src="/img/blogs-img/heart.png" class="abs-img-favorites" />Добавить в избранное
        </el-button> рядом с именем автора.
      </div>
    </div>
    <div v-for="(item, index) in content" v-bind:key="index">
      <author v-bind:item="item" />
    </div>
    <footer-component />
  </div>
</template>

<script>
  import HeaderSection from "~/components/HeaderSection.vue";
  import FavoritesContentHeader from "~/components/favorites/FavoritesContentHeader.vue";
  import FooterComponent from "~/components/FooterComponent.vue";
  import Author from "~/components/favorites/Author.vue";
  export default {
    components: {
      HeaderSection,
      FooterComponent,
      FavoritesContentHeader,
      Author
    },
    methods: {
      settingSasa() {
        this.fullData = !this.fullData;
        const url = this.fullData ? '/api/favorites.json' : '/api/favorites-empty.json';
        this.$axios.get(url).then(res =>{
          this.content = res.data.content;
        })
      }
    },

    asyncData: function ({
      $axios
    }) {
      return $axios.get("/api/favorites-empty.json").then(res => {
        return res.data;
      });
    }
  };

</script>

<style lang="scss">
  .relative-btn-favorites {
    position: relative;
    padding-left: 35px;
    padding-right: 15px;
  }

  .abs-img-favorites {
    position: absolute;
    left: 15px;
    top: 30%;
    padding-right: 10px;
  }

  .width-toEmpty-favorites {
    width: 35%;
    color: $gray-font-color-desktop;
    line-height: 32px;
    font-size: 18px;
  }
  .spec-Emptytop {
    margin-top: -10px;
  }
  .spec-emptyTop {
    margin-top: 5%;
    margin-bottom: 13%;
  }

  @media (max-width: 600px) {
    .width-toEmpty-favorites {
      width: 90%;
      color: $gray-font-color-desktop;
      line-height: 32px;
      font-size: 16px;
    }
  }

  .authors-title {
    font-size: 36px;
    padding-bottom: 20px;
    padding-top: 20px;
    line-height: 42px;
    margin-top: 1%;
    text-align: center;
    font-weight: bold;
    color: black;
  }

  @media (max-width: 600px) {
    .authors-title {
      font-size: 30px;
      padding-bottom: 20px;
      padding-top: 20px;
      line-height: 42px;
      margin-top: 1%;
      text-align: left;
      font-weight: bold;
      color: black;
    }
  }

</style>
