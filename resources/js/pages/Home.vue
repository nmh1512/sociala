<template>
    <PageComponent>
        <div class="flex gap-x-4">
            <div class="flex-initial w-full lg:w-7/10">
                <Stories />
                <Post />
            </div>
            <div class="flex-initial hidden lg:block w-3/10">
                <div class="bg-white shadow-custom-xs rounded-2xl">
                    <div class="flex justify-between items-center p-6 border-b border-b-gray-200">
                        <h4 class="text-gray-900 text-xs font-bold">{{ $t("friend_request") }}</h4>
                        <a href="" class="text-color-theme-blue text-xs font-semibold">{{ $t("see_all") }}</a>
                    </div>
                    <div class="px-6 pb-6">
                        <div class="pt-6" v-for="item in friendRequest">
                            <router-link :key="item.name" :to="item.to">
                                <div class="flex items-center space-x-2">
                                    <div :style="{ backgroundImage: item.color }"
                                        class="rounded-full bg-slate-500 w-11 h-11 px-3 py-2">
                                        <component :is="item.icon" class="inline-block w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p class="font-semibold text-xs text-gray-800">{{ item.name }}</p>
                                        <p class="text-xs mt-1 text-gray-400">{{ item.mutualFriends + ' ' +
                                            $t("mutual_friends") }}</p>
                                    </div>
                                </div>
                            </router-link>
                            <div class="flex gap-x-2 mt-4">
                                <button
                                    class="btn bg-color-theme-blue border-0 ring-0 rounded-3xl w-24 h-9 min-h-9 text-xs text-white hover:bg-color-theme-blue">{{
                                    $t("confirm") }}</button>
                                <button
                                    class="btn bg-gray-200 border-0 ring-0 rounded-3xl w-24 h-9 min-h-9 text-xs text-gray-600 hover:bg-gray-400">{{
                                    $t("delete") }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 bg-white shadow-custom-xs rounded-2xl">
                    <div class="flex justify-between items-center p-6 border-b border-b-gray-200">
                        <h4 class="text-gray-900 text-xs font-bold">{{ $t("suggest_groups") }}</h4>
                        <a href="" class="text-color-theme-blue text-xs font-semibold">{{ $t("see_all") }}</a>
                    </div>
                    <div class="px-6 pb-6">
                        <div class="pt-6" v-for="group in suggestGroups">
                            <router-link :key="group.name" :to="group.to">
                                <img class="rounded-2xl" src="https://uitheme.net/sociala/images/e-2.jpg" alt="">
                            </router-link>
                            <div class="mt-1">
                                <p class="text-gray-800 font-bold text-xs">{{ group.name }}</p>
                                <ul class="relative h-9 mt-1">
                                    <li :class="['absolute', `left-[${key * 22}px]`]"
                                        v-for="(item, key) in group.memberJoined">
                                        <img class="w-9 h-9" :src="item.avatar" alt="">
                                    </li>
                                    <li
                                        class="absolute left-[88px] min-w-9 h-9 px-1 bg-gray-100 leading-9 text-center rounded-full">
                                        <span class="text-xs">+ 10</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
import Post from './../components/Post.vue'
import PageComponent from './../components/PageComponent.vue'
import Stories from './../components/Stories.vue'
import { useI18n } from 'vue-i18n';
import { getColorTheme } from "../helpers/helpers";

const { t } = useI18n();
const friendRequest = [
    { name: "Hurin Seary", avatar: "", mutualFriends: 2 },
    { name: "Victor Exrixon", avatar: "", mutualFriends: 3 },
    { name: "Surfiya Zakir", avatar: "", mutualFriends: 5 },
    { name: "Goria Coast", avatar: "", mutualFriends: 11 },
];
const suggestGroups = [
    {
        name: "Hurin Seary",
        avatar: "",
        memberJoined:
            [
                { name: "Hurin Seary", avatar: "https://uitheme.net/sociala/images/user-6.png" },
                { name: "Victor Exrixon", avatar: "https://uitheme.net/sociala/images/user-7.png" },
                { name: "Surfiya Zakir", avatar: "https://uitheme.net/sociala/images/user-8.png" },
                { name: "Goria Coast", avatar: "https://uitheme.net/sociala/images/user-9.png" },
            ]
    },
    {
        name: "Hurin Seary",
        avatar: "",
        memberJoined:
            [
                { name: "Hurin Seary", avatar: "https://uitheme.net/sociala/images/user-6.png" },
                { name: "Victor Exrixon", avatar: "https://uitheme.net/sociala/images/user-7.png" },
                { name: "Surfiya Zakir", avatar: "https://uitheme.net/sociala/images/user-8.png" },
                { name: "Goria Coast", avatar: "https://uitheme.net/sociala/images/user-9.png" },
            ]
    },
];
</script>