<template>
  <div>
    <div class="card">
      <span>申请选项</span>
      <div class="apply_item">
        <div @click="to('/apply_consumables')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-haocaishenling"></use>
          </svg>
          <span>耗材申请</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    to(path){
      this.$router.push({path:path})
    }
  },
};
</script>
<style scoped>
.card {
  margin-top: 30px;
}
.apply_item {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.apply_item .icon {
  width: 50px;
  height: 50px;
}
.apply_item span{
    display: block;
    font-size: 0.8rem;
}
.apply_item span,.apply_item svg{
    text-align: center;
}
</style>