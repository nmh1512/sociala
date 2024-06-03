<template>
    <div class="px-5 pt-5 pb-4 mt-4 bg-white rounded-2xl w-full shadow-custom-xss">
        <form action="">
            <div class="flex items-center gap-x-2">
                <div class="w-9 h-9 rounded-full bg-gray-100 p-2">
                    <PencilSquareIcon class="text-color-theme-blue"/>
                </div>
                <span class="text-xs font-semibold text-gray-400">{{ $t("create_post") }}</span>
            </div>
            <div class="mt-4 relative">
                <div class="absolute class h-8 w-8 top-1 left-2">
                    <img class="rounded-full w-full h-full" src="https://uitheme.net/sociala/images/user-8.png" alt="">
                </div>
                <textarea class="w-full text-gray-400 rounded-xl border-2 border-gray-200 text-xs pl-12 p-2 min-h-24 focus:ring-0 focus:outline-0 focus:border-gray-200" :placeholder="$t('create_post_placeholder')" cols="30" name="" id=""></textarea>
            </div>
        </form>
        <div class="flex items-center gap-x-6 mt-3">
            <div class="flex items-center gap-x-2">
                <PhotoIcon class="w-6 h-6 text-success" />
                <span class="font-semibold text-xs text-gray-800 tracking-wide">{{ $t("photo_or_video") }}</span>
            </div>
            <div class="flex items-center gap-x-2">
                <CameraIcon class="w-6 h-6 text-warning" />
                <span class="font-semibold text-xs text-gray-800 tracking-wide">{{ $t("feeling_or_activity") }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {
    CameraIcon,
    PencilSquareIcon,
    PhotoIcon
} from "@heroicons/vue/24/outline";
import { useI18n } from 'vue-i18n';

export default {
    components: {
        PencilSquareIcon,
        PhotoIcon,
        CameraIcon
    },
    setup() {
        const { t } = useI18n();
        return {
            t,
        }
    }
}
</script>
