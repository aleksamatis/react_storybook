<template>
<div class="divmainS">
    <div class="blogtag-flex page-new-item">
    <div v-for="(tag, index) in tags" v-bind:key="index">
        <div class="mr-sl"><el-tag type="info" size="small">{{tag}}</el-tag></div>
    </div>
    </div>
</div>
</template>
<script>
export default {
    components: {},
    props: ["tags"]
};
</script>
<style lang="scss">
.blogtag-flex {
    display: flex;
    flex-wrap: wrap;
}
.own-btn-blogtag {
    margin-right: 13%;
}
.mr-sl {
    margin-right:10px;
}
</style>
