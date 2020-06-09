<template>
    <div id="main-wrap">
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("../../../styles/config.scss");
#main-wrap {
//   width: 100wh;
//   height: 100vh;
//   padding: 75px 0 0 250px;
    position: fixed;
    left:$navMenu;
    top: 75px;
    right: 0;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    -webkit-box-sizing: border;
}
</style>