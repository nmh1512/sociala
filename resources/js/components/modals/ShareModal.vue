<template>
    <PopoverPanel ref="selfRef" class="absolute z-10 top-8 right-0 shadow-custom-lg p-5 rounded-lg bg-white">
        <div class="flex items-center justify-between">
            <span class="font-bold text-gray-800 text-base">{{ $t("share") }}</span>
            <div @click="close" role="button" class="w-6 h-6 rounded-full bg-gray-100 p-1">
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
                <font-awesome-icon @click="copyURL" role="button" icon="fa-regular fa-clone" class="w-4 h-4 absolute right-3" />
                <input ref="urlRef" readonly type="text" :value="url"
                    class="bg-gray-100 border-0 w-full rounded-md text-xs max-h-12 h-12 focus:outline-0 focus:ring-0">
            </div>
        </div>
    </PopoverPanel>
</template>
<script setup>
import {
    XMarkIcon
} from "@heroicons/vue/24/outline";
import { PopoverPanel } from '@headlessui/vue'
import { ref } from "vue";
import { setupPopoverPosition } from "../../composables/popoverComposable"

const props = defineProps({
    url: String,
    close: Function
})

const urlRef = ref(null);
const selfRef = ref(null)
const copyURL = () => {
    try {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(content);
        } else {
            urlRef.value.focus();
            urlRef.value.select();
            document.execCommand('copy');
            setTimeout(() => {
                urlRef.value.setSelectionRange(0, 0);
                urlRef.value.blur();
            }, 0);
        }
        alert('copyed')
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
}

setupPopoverPosition(selfRef);
</script>
