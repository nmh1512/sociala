<template>
  <swiper :slidesPerView="'auto'" :spaceBetween="7" :modules="modules" class="mySwiper" navigation>
    <swiper-slide>
      <div class="h-full w-full relative bg-gray-700 rounded-[10px]">
        <div class="absolute bottom-4 px-4 w-full z-10">
            <div>
              <button class="rounded-full bg-white p-3 w-12 h-12 text-color-theme-blue"><PlusIcon /></button>
            </div>
            <span class="text-xs text-white font-semibold">{{ $t("add_story") }}</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide v-for="story in stories">
      <button class="h-full relative after:rounded-[10px] after:content-[''] after:absolute after:z-0 after:top-0 after:bg-story-gradient after:w-full after:h-full after:flex">
        <img class="h-full w-full rounded-[10px]" :src="story.image" alt="">
        <div class="absolute bottom-4 px-4 w-full z-10">
            <img class="w-12 h-12 mx-auto border border-white rounded-full" :src="story.avatar" alt="">
            <span class="text-xs text-white font-semibold">{{ story.name }}</span>
        </div>
      </button>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import {
    PlusIcon
} from "@heroicons/vue/24/outline";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
    
const stories = [
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
  {
    name: "Victor Exrixon",
    avatar: "https://uitheme.net/sociala/images/user-11.png",
    image: "https://uitheme.net/sociala/images/s-1.jpg"
  },
]
const modules = [Pagination, Navigation];
    
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-horizontal {
  height: fit-content;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  object-fit: cover;
}

.swiper-slide {
  width: 125px !important;
  height: 200px;
  border-radius: 10px;
}

.swiper-button-disabled {
  display: none !important;
}
.swiper-button-next::after, .swiper-button-prev::after {
  color: #ffffff;
  width: 36px;
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #3E4042;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>