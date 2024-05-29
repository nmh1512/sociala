<template>
    <div class="min-h-screen bg-light-theme-body relative">
        <Disclosure as="nav" class="bg-white shadow-custom-xs fixed z-40 w-full" v-slot="{ open }">
            <div class="mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-24">
                <div class="flex h-full items-center justify-between">
                    <div class="flex items-center gap-x-2 md:gap-x-4  xl:gap-x-20">
                        <div class="flex-shrink-0">
                            <router-link :to="{ name: 'Home' }" class="flex items-center gap-x-2.5 text-color-theme-blue">
                                <BoltIcon class="w-7 h-7 lg:w-9 lg:h-9 text-success font-bold"/>
                                <span class="font-bold text-2xl lg:text-4xl font-logoFont">Sociala.</span>
                            </router-link>
                        </div>
                        <div class="hidden sm:flex items-center">
                            <div class="">
                                <form action="">
                                    <div
                                        class="relative flex items-center text-gray-400 focus-within:text-gray-600"
                                    >
                                        <MagnifyingGlassIcon
                                            class="w-4 h-4 absolute ml-2 md:ml-3 pointer-event-none"
                                        />
                                        <input
                                            type="text"
                                            name="search"
                                            :placeholder="$t('search_placeholder')"
                                            autocomplete="off"
                                            :aria-label="$t('search_placeholder')"
                                            class="pr-3 pl-7 md:pl-10 py-3 md:py-4 text-xxs md:text-xs md:w-48 lg:w-64 xl:w-80 placeholder-gray-500 text-black rounded-3xl border-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div class="ml-3 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
                                <router-link
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :to="item.to"
                                    :class="[
                                        this.$route.name === item.to.name
                                            ? 'bg-light-blue text-color-theme-blue'
                                            : 'bg-gray-100 text-gray-400',
                                            'rounded-full'
                                    ]"
                                    >
                                    <component :is="item.icon" class="inline-block w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-2 lg:p-3" />
                                    </router-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="hidden sm:block">
                        <div class="flex items-center lg:ml-6 gap-x-2 md:gap-x-6">
                            <button
                                type="button"
                                class="relative text-color-theme-blue"
                            >
                                <span class="absolute -inset-1.5" />
                                <BellIcon class="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                class="relative text-color-theme-blue"
                                @click="handleToogleNavChat"
                            >
                                <span class="absolute -inset-1.5" />
                                <ChatBubbleLeftIcon class="h-6 w-6 md:h-8 md:w-8 focus:ring-0" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                class="relative text-color-theme-blue"
                            >
                                <span class="absolute -inset-1.5" />
                                <Cog8ToothIcon class="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                            </button>
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative">
                                <div>
                                    <MenuButton
                                        class="relative flex h-6 w-6 md:h-8 md:w-8 items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span class="absolute -inset-1.5" />
                                        <span class="sr-only"
                                            >Open user menu</span
                                        >
                                        <img
                                            class="h-6 w-6 md:h-8 md:w-8 rounded-full"
                                            :src="user.imageUrl"
                                            alt=""
                                        />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <MenuItem
                                            v-for="item in userNavigation"
                                            :key="item.name"
                                            v-slot="{ active }"
                                            @[item.eventName]="item.callback"
                                        >
                                            <a
                                                :href="item.href"
                                                :class="[
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700',
                                                ]"
                                                >{{ item.name }}</a
                                            >
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                    <div class="-mr-2 flex sm:hidden gap-x-4">
                        <button @click="handleToggleSearchMobile" class="rounded-full h-11 w-11 p-3 bg-gray-100">
                            <MagnifyingGlassIcon class="w-5 h-5 text-gray-900 font-bold"/>
                        </button>
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="relative inline-flex items-center justify-center"
                            @click="handleToogleNavLeft"
                        >
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <Bars3BottomRightIcon
                                v-if="!open"
                                class="block h-6 w-6 text-gray-900"
                                aria-hidden="true"
                                @click="handleToogleNavLeft"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6 text-gray-900"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>
        </Disclosure>

        <div
            :class="[
                !isOpenSearch ? '-translate-y-full' : '',
                'absolute top-0 w-full h-16 bg-white transition-all duration-500 ease-in-out flex items-center shadow-lg z-50'
            ]"
        >
            <form class="w-full" action="">
                <input
                    type="text"
                    name="search"
                    :placeholder="$t('search_placeholder_mobile')"
                    autocomplete="off"
                    :aria-label="$t('search_placeholder_mobile')"
                    class="pr-3 pl-5 px-5 py-4 border-none w-full focus:border-none focus:ring-0"
                />
            </form>
            <div class="flex items-center">
                <XMarkIcon
                    class="block h-7 w-7 mr-2 text-gray-400"
                    aria-hidden="true"
                    @click="handleToggleSearchMobile"
                />
            </div>
        </div>
        <NavLeft ref="navLeftRef" />
        <NavChat ref="navChatRef" />
        <router-view></router-view>
    </div>
</template>

<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import {
    Bars3BottomRightIcon,
    BellIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
    HomeIcon,
    BoltIcon,
    VideoCameraIcon,
    UserGroupIcon,
    ChatBubbleLeftIcon,
    Cog8ToothIcon
} from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';
import NavLeft from '../components/NavLeft.vue'
import NavChat from './../components/NavChat.vue'
export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        NavLeft,
        NavChat,
        Bars3BottomRightIcon,
        BellIcon,
        XMarkIcon,
        MagnifyingGlassIcon,
        HomeIcon,
        VideoCameraIcon,
        UserGroupIcon,
        BoltIcon,
        ChatBubbleLeftIcon,
        Cog8ToothIcon
    },

    setup() {
        const navLeftRef = ref(null);
        const navChatRef = ref(null);
        const isOpenSearch = ref(false);
        const store = useStore();
        const router = useRouter();
        const { t } = useI18n();
        const logout = () => {
            store.commit("logout");
            router.push({
                name: "Login",
            });
        };
        const navigation = [
            { name: t("home"), to: { name: "Home" }, icon: HomeIcon },
            { name: t("stories"), to: { name: "Stories" }, icon: BoltIcon },
            { name: t("videos"), to: { name: "Videos" }, icon: VideoCameraIcon },
            { name: t("groups"), to: { name: "Groups" } , icon: UserGroupIcon},
        ];
        const userNavigation = [
            { name: t("your_profile"), href: "#" },
            { name: t("settings"), href: "#" },
            {
                name: t("sign_out"),
                href: "#",
                eventName: "click",
                callback: logout,
            },
        ];

        const handleToggleSearchMobile = () => {
            isOpenSearch.value = !isOpenSearch.value
        }
        const handleToogleNavChat = () => {
            if (navChatRef.value) {
                navChatRef.value.toogleNavChat();
            }
        };
        const handleToogleNavLeft = () => {
            if (navLeftRef.value) {
                navLeftRef.value.toogleNavLeft();
            }
        };
        return {
            user: computed(() => store.state.user.data),
            navigation,
            userNavigation,
            logout,
            isOpenSearch,
            handleToggleSearchMobile,
            handleToogleNavChat,
            handleToogleNavLeft,
            navLeftRef,
            navChatRef,
            t
        };
    },
};
</script>
