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
            <Menu as="div" class="relative">
                <MenuButton class="rounded-full w-11 h-11 p-3 bg-gray-100 text-gray-700">
                    <font-awesome-icon icon="fa-solid fa-ellipsis" class="w-full h-4" />
                </MenuButton>
                <transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0">
                    <MenuItems
                        class="absolute z-30 right-0 mt-4 shadow-custom-lg p-5 rounded-lg bg-white">
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <EditIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                Edit
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <DuplicateIcon :active="active" class="mr-2 h-5 w-5 text-violet-400"
                                    aria-hidden="true" />
                                Duplicate
                            </button>
                            </MenuItem>
                        </div>
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <ArchiveIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                Archive
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <MoveIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                Move
                            </button>
                            </MenuItem>
                        </div>

                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                                active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]">
                                <DeleteIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                                Delete
                            </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <div class="mt-4">
            <p class="text-xs text-justify"><span class="mr-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae eligendi eum recusandae ipsa! Eos reprehenderit quam mollitia minus omnis architecto impedit
                    aut magni! Quod in voluptatibus culpa blanditiis iste placeat!</span> <button
                    class="text-custom-primary font-semibold">{{ $t("see_more") }}</button></p>
            <div class="mt-4 grid grid-cols-3 gap-x-2">
                <button>
                    <img class="rounded-md" src="https://www.uitheme.net/sociala/images/t-10.jpg" alt="">
                </button>
                <button>
                    <img class="rounded-md" src="https://www.uitheme.net/sociala/images/t-11.jpg" alt="">
                </button>
                <button class="relative">
                    <img class="rounded-md" src="https://www.uitheme.net/sociala/images/t-12.jpg" alt="">
                    <div
                        class="absolute rounded-md w-full h-full top-0 left-0 flex items-center justify-center bg-rba-06">
                        <span class="text-white font-semibold text-xl">+2</span>
                    </div>
                </button>
            </div>
        </div>
        <div class="flex justify-between mt-4 text-xs font-semibold text-gray-700">
            <div class="flex items-center">
                <button class="flex items-center mr-2">
                    <div class="w-6 h-6 bg-primary-gradient rounded-full p-1 mr-1">
                        <HandThumbUpIcon class="w-4 h-4 text-white" />
                    </div>
                    <div class="w-6 h-6 bg-red-gradient rounded-full p-1 mr-2">
                        <HeartIcon class="w-4 h-4 text-white" />
                    </div>
                    <span>2.8k</span>
                </button>
                <button class="flex items-center">
                    <ChatBubbleOvalLeftIcon class="w-7 h-7 text-gray-800 mr-1" />
                    <span>22 {{ $t("comments") }}</span>
                </button>
            </div>
            <Popover class="relative">
                <PopoverButton class="flex items-center ring-0 focus:ring-0 focus:outline-0"
                    @click="handleTogglePopupShare">
                    <ShareIcon class="w-6 h-6 mr-1" />
                    <span>{{ $t("share") }}</span>
                </PopoverButton>
                <transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0">
                    <ShareModal ref="shareModalRef" v-if="popupShareVisible" :url="435"
                        :close="handleTogglePopupShare" />
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
    ShareIcon
} from "@heroicons/vue/24/outline";
import { Popover, PopoverButton, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ShareModal from "./modals/ShareModal.vue";
import { useI18n } from 'vue-i18n';
import { ref, onMounted, onUnmounted } from "vue";

const { t } = useI18n();

const popupShareVisible = ref(false)
const shareModalRef = ref(null);
const popoverButtonRef = ref(null);

const handleTogglePopupShare = () => {
    popupShareVisible.value = !popupShareVisible.value
}
const handleClickOutside = (event) => {
    if (shareModalRef.value && !shareModalRef.value.$el.contains(event.target)) {
        popupShareVisible.value = false;
    }
}
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
})
</script>
