<!--
 * @Description: 首页组件
 * @Author: lihk
 * @Date: 2024-10-17 11:58:09
-->
<template>
  <div class="flex overflow-hidden pl-[20px]">
    <div class="absolute bottom-[50px] right-[40px] z-999">
      <img class="w-[30px] h-[30px] cursor-pointer" src="~/assets/images/customer-service.png" alt=""
        @click="handleCustomerService">
    </div>
    <div class="max-h-screen border rounded-1 mr-[20px] text-white">
      <div v-for="item, index in webDataList" :key="index" class="flex flex-col">
        <div class="p-[10px] w-[120px] cursor-pointer rounded-[4px]" :class="activeName === item.name ? 'activeName' : ''"
          @click="handleClick(item.name)">{{ item.name }}</div>
      </div>
    </div>
    <div class="flex-1 overflow-auto max-h-screen pr-[20px] text-white scrollbar-hidden" ref="scrollContainer">
      <div v-for="item, index in webDataList" :key="index">
        <div class="mr-[10px] my-[10px] font-bold text-[24px] activeId" :class="item.name">{{ item.name }}</div>
        <div class="flex flex-wrap gap-[10px]">
          <div class="flex flex-col my-[10px] min-w-[250px] w-[18%] border cursor-pointer" v-for="ele, i in item.list"
            :key="i" @click="openUrl(ele.link)">
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
    <Logo class="w-[60px] mr-[60px]"></Logo>
    <Dialog v-model="dialogVisible"></Dialog>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import Logo from '../logo/index.vue'
import { webDataList } from './data'
import Dialog from './dialog.vue'
const activeName = ref('前端框架')
const dialogVisible = ref(false)
const scrollContainer = ref<HTMLElement | null>(null);
const isClickScroll = ref(false)
function openUrl(url: string) {
  window.open(url, '_blank')
}
// 点击跳转到指定位置
function handleClick(name: string) {
  isClickScroll.value = true
  activeName.value = name
  const targetElement = document.querySelector(`.${name}`);
  console.log("🚀 ~ handleClick ~ targetElement:", targetElement, `.${name}`)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isClickScroll.value = false; // 延时设置，确保滚动完成后再允许滚动事件更新 activeName
    }, 1000); // 延时时间可以根据实际情况调整
  }
}
function handleCustomerService() {
  dialogVisible.value = true
  console.log("🚀 ~ handleCustomerService ~ dialogVisible.value:", dialogVisible.value)
}
const lastKnownScrollPosition = ref(0);
const ticking = ref(false);

onMounted(() => {
  // 确保获取了子容器的引用
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
   // 组件卸载时移除事件监听
   if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll);
  }
});

function handleScroll() {
  if(isClickScroll.value) return
  // 获取子容器的滚动位置
  const scrollTop = scrollContainer.value?.scrollTop || 0;
  const scrollOffsetTop = 40; // 定义距离顶部40px时更新activeName

  // 遍历所有需要检查的元素
  webDataList.forEach((item) => {
    const element = document.querySelector(`.${item.name}`) as HTMLElement;

    if (element) {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      // 检查元素是否在子容器的可视区域内
      if (elementTop <= scrollTop + scrollOffsetTop && elementTop + elementHeight >= scrollTop) {
        activeName.value = item.name;
      }
    }
  });
}

function requestTick() {
  console.log('111', 111)
  if (!ticking.value) {
    requestAnimationFrame(updateActiveName);
    ticking.value = true;
  }
}

async function updateActiveName() {
  const currentScrollPosition = lastKnownScrollPosition.value;
  const titles = document.querySelectorAll('.max-h-screen .mr-[10px].my-[10px].font-bold');
  console.log("🚀 ~ titles.forEach ~ title.getAttribute('class'):", titles)
  
  titles.forEach((title) => {
    const rect = title.getBoundingClientRect();
    if (rect.top <= 20 && rect.bottom >= 0) { // 元素进入顶部20px内
      activeName.value = title.getAttribute('class');
    }
  });

  ticking.value = false;
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
}

.scrollbar-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>