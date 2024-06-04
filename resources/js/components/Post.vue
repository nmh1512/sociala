<template>
    <div class="p-6 bg-white rounded-2xl mt-4 shadow-custom-xss">
        <div class="flex justify-between">
            <div class="flex items-center gap-x-4">
                <img class="w-11 h-11" src="https://uitheme.net/sociala/images/user-7.png" alt="">
                <div class="text-xs">
                    <h4 class="font-bold text-gray-700 mb-1">Surfiya Zakir</h4>
                    <span>3 {{ $t("hour") + ' ' + $t("ago") }}</span>
                </div>
            </div>
            <div class="rounded-full w-11 h-11 p-3 bg-gray-100 text-gray-700">
                <font-awesome-icon icon="fa-solid fa-ellipsis" class="w-full h-4"/>
            </div>
        </div>
        <div class="mt-4">
            <p class="text-xs text-justify"><span class="mr-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eligendi eum recusandae ipsa! Eos reprehenderit quam mollitia minus omnis architecto impedit aut magni! Quod in voluptatibus culpa blanditiis iste placeat!</span> <button class="text-custom-primary font-semibold">{{ $t("see_more") }}</button></p>
            <div class="mt-4 grid grid-cols-3 gap-x-2">
                <button>
                    <img class="rounded-md" src="https://www.uitheme.net/sociala/images/t-10.jpg" alt="">
                </button>
                <button>
                    <img class="rounded-md" src="https://www.uitheme.net/sociala/images/t-11.jpg" alt="">
                </button>
                <button class="relative">
                    <img class="rounded-md" src="https://www.uitheme.net/sociala/images/t-12.jpg" alt="">
                    <div class="absolute rounded-md w-full h-full top-0 left-0 flex items-center justify-center bg-rba-06">
                        <span class="text-white font-semibold text-xl">+2</span>
                    </div>
                </button>
            </div>
        </div>
        <div class="flex justify-between mt-4 text-xs font-semibold text-gray-700">
            <div class="flex items-center">
                <button class="flex items-center mr-2">
                    <div class="w-6 h-6 bg-primary-gradient rounded-full p-1 mr-1">
                        <HandThumbUpIcon class="w-4 h-4 text-white"/>
                    </div>
                    <div class="w-6 h-6 bg-red-gradient rounded-full p-1 mr-2">
                        <HeartIcon class="w-4 h-4 text-white"/>
                    </div>
                    <span>2.8k</span>
                </button>
                <button class="flex items-center">
                    <ChatBubbleOvalLeftIcon class="w-7 h-7 text-gray-800 mr-1" />
                    <span>22 {{ $t("comments") }}</span>
                </button>
            </div>
            <Popover class="relative">
                <PopoverButton class="flex items-center ring-0 focus:ring-0 focus:outline-0">
                    <ShareIcon class="w-6 h-6 mr-1" />
                    <span>{{ $t("share") }}</span>
                </PopoverButton>
                <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0"
                >
                    <PopoverPanel class="absolute z-10 top-[30px] right-0 shadow-custom-lg p-5 rounded-lg bg-white">
                        <div class="flex items-center justify-between">
                            <span class="font-bold text-gray-800 text-base">{{ $t("share") }}</span>
                            <div class="w-6 h-6 rounded-full bg-gray-100 p-1">
                                <XMarkIcon class="w-4 h-4" />
                            </div>
                        </div>
                        <div class="columns-5 gap-x-1 mt-3">
                            <button class="rounded-full w-12 h-12 bg-facebook text-white flex items-center justify-center">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" class="w-5 h-5" />
                            </button>
                            <button class="rounded-full w-12 h-12 bg-black text-white flex items-center justify-center">
                                <font-awesome-icon icon="fa-brands fa-x-twitter" class="w-5 h-5" />
                            </button>
                            <button class="rounded-full w-12 h-12 bg-linkedin text-white flex items-center justify-center">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="w-5 h-5" />
                            </button>
                            <button class="rounded-full w-12 h-12 bg-instagram text-white flex items-center justify-center">
                                <font-awesome-icon icon="fa-brands fa-instagram" class="w-5 h-5" />
                            </button>
                            <button class="rounded-full w-12 h-12 bg-pinterest text-white flex items-center justify-center">
                                <font-awesome-icon icon="fa-brands fa-pinterest-p" class="w-5 h-5" />
                            </button>
                        </div>
                        <div class="mt-6">
                            <span>{{ $t("copy_link") }}</span>
                            <div class="mt-4 relative flex items-center text-gray-400">
                                <font-awesome-icon role="button" icon="fa-regular fa-clone" class="w-4 h-4 absolute right-3" />
                                <input type="text" class="bg-gray-100 border-0 w-full rounded-md text-xs max-h-12 h-12 focus:outline-0 focus:ring-0">
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
        </div>
    </div>
</template>
<script setup>
import {
    HandThumbUpIcon,
    HeartIcon,
    ChatBubbleOvalLeftIcon,
    ShareIcon,
    XMarkIcon
} from "@heroicons/vue/24/outline";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
