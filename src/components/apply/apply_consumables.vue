<template>
  <div>
      <div class="from">
    <van-form>
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
        :rules="[{ required: true, message: '请填写数量' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info"
          >提交</van-button
        >
      </div>
    </van-form>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="consumablesdata"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      consumables: "",
      consumablesdata: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      quantity:0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    onConfirm(value) {
      this.consumables = value;
      this.showPicker = false;
    },
  },
};
</script>
<style scoped>
div .from{
    margin-top: 1.5rem;
}
</style>