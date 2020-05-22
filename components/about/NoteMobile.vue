<template>
  <div>
    <div>
      <div class="flex_Picture_Note">
        <div class="picture_Notebook">
          <div class="picture_Note"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .flex_Picture_Note {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    .flex_Picture_Note {
      display: flex;
    }
  }

  .picture_Notebook {
    width: 100%;
  }

  .picture_Note {
    background-image: url(/img/note.svg);
    background-size: contain;
    background-repeat: no-repeat;
    height: 698px;
    background-position-x: center;
    background-position-y: center;
  }

  @media (max-width: 500px) {
    .picture_Note {
      background-image: url(/img/telephon.png);
      padding: 150px;
      padding-top: 200px;
      background-size: cover;
      height: 500px;
    }
  }

  @media (max-width: 400px) {
    .picture_Note {
      background-image: url(/img/telephon.png);
      padding: 80px;
      background-size: cover;
      height: 500px;
      /* background-position-x: center; */
      /* background-position-y: center; */
    }
  }

</style>
