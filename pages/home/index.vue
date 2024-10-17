<!--
 * @Description: 首页组件
 * @Author: lihk
 * @Date: 2024-10-17 11:58:09
-->
<template>
  <div class="flex overflow-hidden pl-[20px]">
    <div class="max-h-screen border rounded-1 mr-[20px]">
      <div v-for="item, index in webDataList" :key="index" class="flex flex-col">
        <div class="p-[10px] w-[120px] cursor-pointer rounded-[4px]" :class="activeName === item.name ? 'activeName' : ''"
          @click="handleClick(item.name)">{{ item.name }}</div>
      </div>
    </div>
    <div class="flex-1 overflow-auto max-h-screen pr-[20px]">
      <div v-for="item, index in webDataList" :key="index">
        <div class="mr-[10px] my-[10px] font-bold text-[24px]" :class="item.name">{{ item.name }}</div>
        <div class="flex flex-wrap gap-[10px]">
          <div class="flex flex-col my-[10px] min-w-[250px] w-[18%] border cursor-pointer" v-for="ele, i in item.list" :key="i"
            @click="openUrl(ele.link)">
            <div class="text-[20px] mb-[10px]">{{ ele.title }}</div>
            <el-popover :width="300" trigger="hover" :content="ele.description">
              <template #reference>
                <div class="desc-container">{{ ele.description }}</div>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, onMounted, toRefs, watchEffect } from 'vue';
import { webDataList } from './data'

const activeName = ref('')

function openUrl(url: string) {
  window.open(url, '_blank')
}
// 点击跳转到指定位置
function handleClick(name: string) {
  activeName.value = name
  const targetElement = document.querySelector(`.${name}`);
  console.log("🚀 ~ handleClick ~ targetElement:", targetElement,`.${name}`)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>
<style lang='scss' scoped>
.desc-container {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.border {
  border: 1px solid #e2e3e5;
  padding: 15px 10px;
  border-radius: 8px;
}

.max-h-screen {
  margin-top: 20px;
  max-height: calc(100vh - 40px);
}

.activeName {
  background-color: #b3d8ff;
}</style>