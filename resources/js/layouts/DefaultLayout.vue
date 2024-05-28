<template>
    <div class="min-h-full bg-light-theme-body relative">
        <Disclosure as="nav" class="bg-white shadow-custom-xs" v-slot="{ open }">
            <div class="mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-24">
                <div class="flex h-full items-center justify-between">
                    <div class="flex items-center md:gap-x-4 lg:gap-x-20">
                        <div class="flex-shrink-0">
                            <router-link :to="{ name: 'Home' }" class="flex items-center gap-x-2.5 text-color-theme-blue">
                                <BoltIcon class="w-7 h-7 lg:w-9 lg:h-9 text-success font-bold"/>
                                <span class="font-bold text-2xl lg:text-4xl font-logoFont">Sociala.</span>
                            </router-link>
                        </div>
                        <div class="hidden md:flex items-center">
                            <div class="">
                                <form action="">
                                    <div
                                        class="relative flex items-center text-gray-400 focus-within:text-gray-600"
                                    >
                                        <MagnifyingGlassIcon
                                            class="w-4 h-4 absolute ml-3 pointer-event-none"
                                        />
                                        <input
                                            type="text"
                                            name="search"
                                            :placeholder="$t('search_placeholder')"
                                            autocomplete="off"
                                            :aria-label="$t('search_placeholder')"
                                            class="pr-3 pl-10 px-5 py-4 text-xs md:w-48 lg:w-80 placeholder-gray-500 text-black rounded-3xl border-none focus:ring-0 bg-gray-100"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div class="ml-3 lg:ml-10 flex items-baseline space-x-4">
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
                                    <component :is="item.icon" class="inline-block w-12 h-12 p-3" />
                                    </router-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="flex items-center lg:ml-6">
                            <button
                                type="button"
                                class="relative text-color-theme-blue"
                            >
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">View notifications</span>
                                <BellIcon class="h-6 w-6" aria-hidden="true" />
                            </button>

                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative ml-3">
                                <div>
                                    <MenuButton
                                        class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span class="absolute -inset-1.5" />
                                        <span class="sr-only"
                                            >Open user menu</span
                                        >
                                        <img
                                            class="h-8 w-8 rounded-full"
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
                    <div class="-mr-2 flex md:hidden gap-x-4">
                        <button @click="handleToggleSearchMobile" class="rounded-full h-11 w-11 p-3 bg-gray-100">
                            <MagnifyingGlassIcon class="w-5 h-5 text-gray-900 font-bold"/>
                        </button>
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="relative inline-flex items-center justify-center"
                        >
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <Bars3BottomRightIcon
                                v-if="!open"
                                class="block h-6 w-6 text-gray-900"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <ul>  
                        <li
                        v-for="item in navigation"
                        :class="[
                                    this.$route.name === item.to.name
                                        ? 'bg-light-blue text-color-theme-blue'
                                        : '',
                                        'rounded-full'
                                ]"
                        >
                            <router-link
                                :key="item.name"
                                :to="item.to"
                                > 
                                <component :is="item.icon" class="inline-block w-12 h-12 p-3" />
                                <span>{{ item.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="border-t border-gray-700 pb-3 pt-4">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full"
                                :src="user.imageUrl"
                                alt=""
                            />
                        </div>
                        <div class="ml-3">
                            <div
                                class="text-base font-medium leading-none text-white"
                            >
                                {{ user.name }}
                            </div>
                            <div
                                class="text-sm font-medium leading-none text-gray-400"
                            >
                                {{ user.email }}
                            </div>
                        </div>
                        <button
                            type="button"
                            class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <DisclosureButton
                            v-for="item in userNavigation"
                            :key="item.name"
                            as="a"
                            :href="item.href"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            @[item.eventName]="item.callback"
                        >
                            {{ item.name }}</DisclosureButton
                        >
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <div
            :class="[
                !isOpenSearch ? '-translate-y-full' : '',
                'absolute top-0 w-full h-16 bg-white transition-all duration-500 ease-in-out flex items-center shadow-lg'
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
        <NavLeft />
        <NavChat />
        <router-view class="lg:ml-72"></router-view>
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
    UserGroupIcon
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
        BoltIcon
    },

    setup() {
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

        return {
            user: computed(() => store.state.user.data),
            navigation,
            userNavigation,
            logout,
            isOpenSearch,
            handleToggleSearchMobile,
            t
        };
    },
};
</script>
