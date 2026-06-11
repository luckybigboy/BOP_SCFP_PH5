<script setup lang="ts">
import { ref } from "vue";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import vueLogo from "../assets/vue.svg";

const count = ref(0);
</script>

<template>
  <van-button type="danger" round style="width: 150px">
    <van-swipe
      vertical
      class="notice-swipe"
      :autoplay="2000"
      :touchable="false"
      :show-indicators="false"
    >
      <van-swipe-item>做任务</van-swipe-item>
      <van-swipe-item>抽大奖</van-swipe-item>
    </van-swipe>
  </van-button>

  <section id="center">
    <div class="hero">
      <img :src="heroImg" class="base" width="170" height="179" alt="" />
      <img :src="vueLogo" class="framework" alt="Vue logo" />
      <img :src="viteLogo" class="vite" alt="Vite logo" />
    </div>
    <div>
      <h1>Get started</h1>
      <p>Edit <code>src/App.vue</code> and save to test <code>HMR</code></p>
    </div>
    <button type="button" class="counter" @click="count++">
      Count is {{ count }}
    </button>
  </section>

  <div class="ticks"></div>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
<style>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
