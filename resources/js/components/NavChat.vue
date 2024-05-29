<template>
    <div class="fixed right-0 h-screen lg:w-72 px-4 pt-2 bg-transparent top-24">
        <div class="shadow-custom-xss rounded-2xl px-6 pb-2 mt-1 mb-3 bg-white">
            <div class="pt-4" v-for="sidebar in sideBars" :key="sidebar.key">
                <span class="text-xxs font-semibold text-gray-400 uppercase">{{ sidebar.name }}</span>
                <ul class="mt-2">  
                    <li
                    v-for="item in sidebar.items"
                    :key="item.name"
                    class="py-1"
                    >
                        <router-link
                            :key="item.name"
                            :to="item.to"
                            :class="['flex justify-between items-center py-1 text-gray-500', `hover:${getColorTheme()}`]"
                            > 
                            <div class="flex items-center space-x-2">
                                <div :style="{ backgroundImage: item.color }" class="rounded-full bg-slate-500 w-9 h-9 px-3 py-2">
                                    <component :is="item.icon" class="inline-block w-5 h-5 text-white" />
                                </div>
                                <span class="font-semibold text-xs">{{ item.name }}</span>
                            </div>
                            <span class="bg-success rounded-full w-2 h-2"></span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { getColorTheme } from "../helpers/helpers";

export default {
    setup() {
        const { t } = useI18n();

        const sideBars = [
            {
                name: t('contacts'),
                items: [
                    { name: "Hurin Seary", avatar: "", isOnline: true, lastActive: "" },
                    { name: "Victor Exrixon", avatar: "", isOnline: true, lastActive: "" },
                    { name: "Surfiya Zakir", avatar: "", isOnline: false, lastActive: "2 days" },
                    { name: "Goria Coast", avatar: "", isOnline: true, lastActive: "" },
                ]
            },
            {
                name: t('groups'),
                items: [
                    { name: "Studio Express", avatar: "", isOnline: true, lastActive: "" },
                    { name: "Armany Design", avatar: "", isOnline: true, lastActive: "" },
                    { name: "De fabous", avatar: "", isOnline: false, lastActive: "2 days" },
                ]
            },
            {
                name: t('pages'),
                items: [
                    { name: "Armany Seary", avatar: "", isOnline: true, lastActive: "" },
                    { name: "Entropio Inc", avatar: "", isOnline: true, lastActive: "" },
                ]
            }
        ]

        return {
            sideBars,
            getColorTheme
        }
    }
}
</script>

