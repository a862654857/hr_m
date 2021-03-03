<template>
  <div>
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
          readonly
          clickable
          :value="consumables"
          label="耗材"
          placeholder="点击选择耗材"
          @click="showPicker = true"
        />
        <van-field
          v-model="quantity"
          label="数量"
          placeholder="数量"
          type="digit"
          :rules="[
            { required: true, message: '请填写数量' },
            { validator, message: '库存不足' },
          ]"
        />
        <div style="margin: 16px">
          <van-button round block type="info">提交</van-button>
        </div>
      </van-form>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          value-key="consumables_name"
          :columns="consumablesdata"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
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
export default {
  data() {
    return {
      consumables: "",
      consumablesdata: [],
      showPicker: false,
      quantity: 0,
      consumables_key: 0,
      maxquantity: 0,
    };
  },
  created() {
    this.get_consumablesdata();
  },
  mounted() {},
  methods: {
    validator(val) {
      return val <= this.maxquantity;
    },
    onConfirm(value) {
      console.log(value);
      this.consumables = value.consumables_name;
      this.consumables_key = value.consumables_key;
      this.maxquantity = value["剩余数量"];
      this.showPicker = false;
    },
    get_consumablesdata() {
      let jsonparas = [];
      let _paras = apiparas.getParas(
        "default",
        "hr|hr_consumables|get_consumablesdata",
        jsonparas
      );
      query(_paras).then((response) => {
        this.consumablesdata = response.result;
      });
    },
    onSubmit() {
      let jsonparas = [
        {
          name: "apply_quantity",
          value: this.quantity,
        },
        {
          name: "consumables_key",
          value: this.consumables_key,
        },
      ];
      let _paras = apiparas.getParas(
        "default",
        "hr|hr_consumables|consumable_application",
        jsonparas
      );
      execute(_paras).then((res) => {
        if (res.errid == 0) {
          this.consumables=''
          this.quantity=0
          this.consumables_key=0
          this.maxquantity=0
          this.$Notify({ type: "success", message: "申请操作成功" });
        } else {
          this.$Notify({ type: "warning", message: res.errmsg });
        }
      });
    },
  },
};
</script>
<style scoped>
div .from {
  margin-top: 1.5rem;
}
</style>