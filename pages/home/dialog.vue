<!--
 * @Description: 微信公众号组件
 * @Author: lihk
 * @Date: 2024-10-22 16:42:22
-->
<template>
  <div>
    <el-dialog
    v-model="dialogVisible"
    title="联系客服"
    width="500"
    :before-close="handleClose"
  >
    <span><img class="w-full" src="~/assets/images/wechat.png" alt=""></span>
  </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, onMounted, toRefs, watchEffect } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue'])
const dialogVisible = computed({
  get() {
    console.log("🚀 ~ get ~ props.value:", props.modelValue)
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  },
})
const { tableData } = toRefs(
  reactive({
   tableData: [] as any[],
})
)

onMounted(() => {
  console.log('tableData:', tableData.value);
})

watchEffect(() => {
  console.log('tableData:', tableData.value);
})

</script>
<style lang='scss' scoped>
</style>