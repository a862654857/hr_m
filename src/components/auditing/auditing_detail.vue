<template>
  <div>
    <van-tabs v-model="active" sticky color="#1989fa">
      <van-tab title="未审核">
        <div class="box1">
          <span class="left ">头像</span>
          <span class="left ">昵称/加入时间</span>
          <span class="right">活跃度</span>
        </div>
      </van-tab>
      <van-tab title="已审核">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return { active: 0 };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.auditingitem {
  margin-top: 1.5rem;
}
.box1{
  font-size: 0.7rem;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #1989fa;
}
.left{
  float: left;
}
.right{
  float: right;
}
</style>