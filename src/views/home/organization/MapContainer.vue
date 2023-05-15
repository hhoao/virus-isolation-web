<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
  import AMapLoader from '@amap/amap-jsapi-loader';

  const AMAP_KEY = import.meta.env.AMAP_KEY;
  AMapLoader.load({
    key: AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
  })
    .then((AMap) => {
      new AMap.Map('container', { zoom: 10 });
      // map.addControl(new AMap.Scale());
    })
    .catch((e) => {
      console.error(e); //加载错误提示
    });
</script>

<style scoped>
  #container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 200px;
  }
</style>
