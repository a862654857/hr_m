<template>
  <div>
    <div class="auditingitem">
      <van-cell :border="true" @click="to('/auditing_detail')" title="耗材申请" is-link size="large"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {  };
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
.auditingitem {
  margin-top: 1.5rem;
}
</style>