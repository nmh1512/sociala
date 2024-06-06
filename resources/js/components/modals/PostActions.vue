<template>
    <MenuItems ref="selfRef"
        class="absolute w-fit z-30 right-0 p-5 mt-4 shadow-custom-lg rounded-2xl bg-white focus:outline-none      ">
        <MenuItem v-slot="{ active }">
        <button :class="[
            active ? 'bg-gray-200 ' : '',
            'flex w-full rounded-md text-sm p-1 text-gray-900',
        ]">
            <div class="text-gray-400 w-[25px] mr-4">
                <vue-feather type="bookmark" size="25"></vue-feather>
            </div>
            <div class="text-left">
                <h4 class="text-xs font-semibold">{{ $t("save_link") }}</h4>
                <span class="text-[10px] text-gray-400 tracking-normal font-medium text-nowrap">{{ $t("save_link_desc")
                    }}</span>
            </div>
        </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
        <button :class="[
            active ? 'bg-gray-200 ' : '',
            'flex w-full rounded-md text-sm mt-1 p-1 text-gray-900',
        ]">
            <div class="text-gray-400 w-[25px] mr-4">
                <vue-feather type="alert-circle" size="25"></vue-feather>
            </div>
            <div class="text-left">
                <h4 class="text-xs font-semibold">{{ $t("hide_post") }}</h4>
                <span class="text-[10px] text-gray-400 tracking-normal font-medium text-nowrap">{{ $t("hide_post_desc")
                    }}</span>
            </div>
        </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
        <button :class="[
            active ? 'bg-gray-200 ' : '',
            'flex w-full rounded-md text-sm mt-1 p-1 text-gray-900',
        ]">
            <div class="text-gray-400 w-[25px] mr-4">
                <vue-feather type="alert-octagon" size="25"></vue-feather>
            </div>
            <div class="text-left">
                <h4 class="text-xs font-semibold">{{ $t("hide_all_from") }}</h4>
                <span class="text-[10px] text-gray-400 tracking-normal font-medium text-nowrap">{{
                    $t("hide_all_from_desc") }}</span>
            </div>
        </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
        <button :class="[
            active ? 'bg-gray-200 ' : '',
            'flex w-full rounded-md text-sm mt-1 p-1 text-gray-900',
        ]">
            <div class="text-gray-400 w-[25px] mr-4">
                <vue-feather type="lock" size="25"></vue-feather>
            </div>
            <div class="text-left">
                <h4 class="text-xs font-semibold">{{ $t("unfollow") }}</h4>
                <span class="text-[10px] text-gray-400 tracking-normal font-medium text-nowrap">{{ $t("save_link_desc")
                    }}</span>
            </div>
        </button>
        </MenuItem>
    </MenuItems>
</template>
<script setup>
import { MenuItems, MenuItem } from '@headlessui/vue'
import { setupPopoverPosition } from "../../composables/popoverComposable"
import { ref } from "vue";

const selfRef = ref(null)
setupPopoverPosition(selfRef);

</script>
