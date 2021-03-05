<template>
  <div>
      <router-view />
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item icon-prefix="iconfont icon-shenpi" icon="icon-shenpi" to="/auditing" @click="edittitle('审批单')">审批单</van-tabbar-item>
      <van-tabbar-item icon-prefix="iconfont icon-shenqing1" icon="icon-shenqing1" to="/apply" @click="edittitle('申请')">申请</van-tabbar-item>
      <!-- <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
        active: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    edittitle(title){
      document.title=title
    }
  },
};
</script>
<style scoped>
</style>