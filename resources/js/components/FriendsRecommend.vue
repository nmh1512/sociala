<template>
    <swiper :slidesPerView="'auto'" :spaceBetween="15" class="py-4">
      <swiper-slide v-for="(friend, key) in friends" :key="key">
        <div role="button" class="text-center text-[10px] p-3 pb-4 w-full h-full">
            <img class="w-16 h-16 object-cover rounded-full mx-auto" :src="friend.avatar" alt="">
            <h4 class="text-xs font-bold text-gray-800 mt-4 mb-2">{{ friend.name }}</h4>
            <span>{{ friend.username }}</span>
            <button class="w-[100px] h-[36px] mt-4 mx-auto uppercase flex justify-center items-center text-white font-bold bg-success rounded-[30px]">{{ $t("follow") }}</button>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script setup>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
      
  const friends = [
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
    {
      name: "Victor Exrixon",
      avatar: "https://uitheme.net/sociala/images/user-11.png",
      username: "@hungnm"
    },
  ]
      
  </script>
  <style scoped>
  .swiper-slide {
    width: 150px !important;
    box-shadow: 0 8px 30px rgba(0,0,0,.05);
  }
</style>