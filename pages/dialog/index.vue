<!--
 * @Description: 微信公众号组件
 * @Author: lihk
 * @Date: 2024-10-22 16:42:22
-->
<template>
  <div @click="handleCustomerService">
    <div>
      <div class="img-container flex justify-center items-center">
      </div>
      <img class="w-[30px] h-[30px] cursor-pointer absolute cursor-pointer-img" src="~/assets/images/customer-service.png" alt="">
    </div>
    <el-dialog v-model="dialogVisible" title="联系客服" width="80%" style="max-width:600px">
      <span><img class="w-full" src="~/assets/images/wechat.png" alt=""></span>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const dialogVisible = ref(false)
function handleCustomerService() {
  dialogVisible.value = true
  console.log("🚀 ~ handleCustomerService ~ dialogVisible.value:", dialogVisible.value)
}

</script>
<style lang='scss' scoped>
.img-container {
  position: relative;
  width: 20vmin;
  height: 20vmin;
  background: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
  opacity: .8;
  border-radius: 35%;
  animation: rotateMain 8s linear infinite;
  @media (min-width: 768px) {
    width: 10vmin;
    height: 10vmin;
  }
}

.img-container::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #35a0f0 0%, #b233f0 100%);
  opacity: .8;
  box-shadow: 5px 5px 90px rgba(10, 102, 255, 0.5);
  border-radius: 35%;
  animation: rotateMain 8s linear 2s infinite;
}

.img-container::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(60deg, #33580f 0%, #b7ee6d 100%);
  opacity: .8;
  box-shadow: 5px 5px 60px rgba(20, 102, 255, 0.3);
  border-radius: 35%;
  animation: rotateMain 8s linear 4s infinite;
  z-index: -1;
}

@keyframes rotateMain {
  50% {
    transform: rotateZ(180deg);
    border-radius: 50%;
  }

  100% {
    transform: rotateZ(360deg);
    border-radius: 35%;
  }
}
/* 使图片不随容器旋转 */
.cursor-pointer-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>