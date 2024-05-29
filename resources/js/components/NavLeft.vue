<template>
    <div class="fixed h-screen lg:w-72 px-4 pt-2 bg-transparent top-24">
        <div class="shadow-custom-xss rounded-2xl pt-3 px-6 pb-2 mt-1 mb-3 bg-white" v-for="sidebar in sideBars" :key="sidebar.key">
            <span class="text-xs font-semibold text-gray-400">{{ sidebar.name }}</span>
            <ul class="mt-2">  
                <li
                v-for="item in sidebar.items"
                :key="item.name"
                >
                    <router-link
                        :key="item.name"
                        :to="item.to"
                        :class="['flex items-center space-x-4 py-1 text-gray-500', `hover:${getColorTheme()}`]"
                        > 
                        <div :style="{ backgroundImage: item.color }" class="rounded-full bg-slate-500 w-11 h-11 px-3 py-2">
                            <component :is="item.icon" class="inline-block w-5 h-5 text-white" />
                        </div>
                        <span class="font-semibold text-sm">{{ item.name }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {
    ComputerDesktopIcon,
    CheckBadgeIcon,
    GlobeAltIcon,
    BoltIcon,
    Cog8ToothIcon,
    ChartPieIcon,
    ChatBubbleLeftIcon,
    UserIcon
    
} from "@heroicons/vue/24/outline";

import { useI18n } from 'vue-i18n';
import { getColorTheme } from "../helpers/helpers";

export default {
    setup() {
        const { t } = useI18n();

        const sideBars = [
            {
                name: t('new_feeds'),
                items: [
                    { name: t('new_feeds'), to: { name: "Home" }, icon: ComputerDesktopIcon, color: 'linear-gradient(to right, #0575e6, #021b79)' },
                    { name: t('badges'), to: { name: "Stories" }, icon: CheckBadgeIcon, color: 'linear-gradient(to right, #e44d26, #f16529)'},
                    { name: t('explode_stories'), to: { name: "Videos" }, icon: GlobeAltIcon, color: 'linear-gradient(to right, #f2994a, #f2c94c)' },
                    { name: t('popular_group'), to: { name: "Groups" } , icon: BoltIcon, color: 'linear-gradient(to right, #ee0979, #ff6a00)'},
                    { name: t('author_profile'), to: { name: "Groups" } , icon: UserIcon, color: 'linear-gradient(135deg, #05f, #09f)'},
                ]
            },
            // {
            //     name: 'More Pages',
            //     items: [
            //         { name: "Email Box", to: { name: "Home" }, icon: ComputerDesktopIcon },
            //         { name: "Stories", to: { name: "Stories" }, icon: CheckBadgeIcon },
            //         { name: "Videos", to: { name: "Videos" }, icon: GlobeAltIcon },
            //         { name: "Groups", to: { name: "Groups" } , icon: BoltIcon},
            //     ]
            // },
            {
                name: t('account'),
                items: [
                    { name: t('settings'), to: { name: "Home" }, icon: Cog8ToothIcon },
                    { name: t('analytics'), to: { name: "Stories" }, icon: ChartPieIcon },
                    { name: t('chat'), to: { name: "Videos" }, icon: ChatBubbleLeftIcon },
                ]
            },
            
        ]

        return {
            sideBars,
            getColorTheme
        }
    }
}
</script>

