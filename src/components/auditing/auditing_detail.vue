<template>
  <div>
    <div class="loading" v-show="loading">
      <van-loading type="spinner"  />
    </div>
    <div class="top">
      <van-tabs v-model="status" sticky color="#1989fa" @click="getdata">
        <van-tab title="全部" name=""> </van-tab>
        <van-tab title="待审批" name="40010"> </van-tab>
        <van-tab title="待领取" name="40020"> </van-tab>
        <van-tab title="已领取" name="40030"> </van-tab>
        <van-tab title="已拒绝" name="40040"></van-tab>
      </van-tabs>
      <div class="box1">
        <span class="name">耗材名称</span>
        <span>申请数量</span>
        <span>状态</span>
        <span class="date">申请时间</span>
      </div>
    </div>
    <div :style="styleObject" class="main">
      <van-empty
        v-show="consumablesdata.length == 0"
        image="search"
        description="无"
      />
      <div v-for="item in consumablesdata" :key="item.consumables_outbound_key">
        <div class="box2">
          <span class="name">{{ item["耗材名称"] }}</span>
          <span>{{ item["申请数量"] }}</span>
          <span>{{ item["状态"] }}</span>
          <span class="date">{{ item["申请时间"] }} </span>
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
    return {
      status: "",
      consumablesdata: [],
      styleObject: {
        overflow: "auto",
      },
      loading: false,
    };
  },
  created() {
    this.getconsumablesdata();
    // this.styleObject.height=window.screen.height+'px'
    // console.log(this.styleObject.height);
  },
  mounted() {},
  methods: {
    getconsumablesdata() {
      this.loading = true;
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
        if (res.errid == 0) {
          this.consumablesdata = res.result;
        }else{
          this.$Notify({ type: "warning", message: res.message });
        }
        this.loading = false;
      });
    },
    getdata(name, title) {
      this.getconsumablesdata();
    },
  },
};
</script>
<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.date {
  width: 7.5rem;
}
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
.name {
  width: 7rem;
}
.data {
  overflow: auto;
}

.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main {
  margin-top: 84px;
  margin-bottom: 50px;
}
</style>
<style>
</style>