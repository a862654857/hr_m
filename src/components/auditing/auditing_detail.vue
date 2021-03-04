<template>
  <div>
    <van-tabs v-model="status" sticky color="#1989fa" @click="getdata">
      <van-tab title="全部" name=""> </van-tab>
      <van-tab title="待审批" name="待审批"> </van-tab>
      <van-tab title="待领取" name="待领取"> </van-tab>
      <van-tab title="已领取" name="已领取"> </van-tab>
      <van-tab title="已拒绝" name="已拒绝"></van-tab>
    </van-tabs>
    <div class="box1">
      <span class="name">耗材名称</span>
      <span>申请数量</span>
      <span>状态</span>
      <span>申请时间</span>
    </div>
    <div>
      <div v-for="item in consumablesdata" :key="item.consumables_outbound_key">
        <div class="box2">
          <span class="name">{{ item["耗材名称"] }}</span>
          <span>{{ item["申请数量"] }}</span>
          <span>{{ item["状态"] }}</span>
          <span>{{ item["申请时间"] }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  query,
  apiparas,
  execute,
  pub_query,
  querytocache,
  getquerybycache,
  getcachetoxls,
} from "../../api/api";
import { Cookie } from "../../js/common";
export default {
  data() {
    return { status: "", consumablesdata: [] };
  },
  created() {
    this.getconsumablesdata();
  },
  mounted() {},
  methods: {
    getconsumablesdata() {
      let jsonparas = [
        {
          name: "status",
          value: this.status,
        },
        {
          name: "user_name",
          value: Cookie.Get("uname"),
        },
      ];
      let _paras = apiparas.getParas(
        "default",
        "hr|hr_consumables|get_consumable_application_order",
        jsonparas
      );
      query(_paras).then((res) => {
        this.consumablesdata = res.result;
      });
    },
    getdata(name, title) {
      this.getconsumablesdata();
    },
  },
};
</script>
<style scoped>
.auditingitem {
  margin-top: 1.5rem;
}
.box1,
.box2 {
  background-color: #fff;
}
.box1 {
  display: flex;
  justify-content: space-around;
  font-size: 0.5rem;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #1989fa;
}
.box2 {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  height: 3rem;
  line-height: 3rem;
}
span {
  display: inline-block;
  width: 5rem;
  text-align: center;
  font-size: 0.9rem;
}
.name{
    width: 7rem;
}
</style>