<!--
 * @Description: 微信公众号组件
 * @Author: lihk
 * @Date: 2024-10-22 16:42:22
-->
<template>
  <div>
    <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, onMounted, toRefs, watchEffect } from 'vue';
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:dialogVisible'])
const dialogVisible = computed({
  get() {
    return props.value
  },
  set(val) {
    emits('update:dialogVisible', val)
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