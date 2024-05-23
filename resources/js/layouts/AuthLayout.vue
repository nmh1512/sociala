<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <router-view></router-view>
    </div>
</template>  

<script>
    import { login } from '../helpers/auth';

    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                type: 'login',
                error: null,
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch("LOGIN");

                login(this.$data.form)
                    .then(res => {
                        this.$store.commit("LOGIN_SUCCESS", res);
                        this.$router.push({path: '/'});
                    })
                    .catch(err => {
                        this.$store.commit("LOGIN_FAILED", {err})
                        this.showAlert(this.authError, 'error');
                    })
            },
        },
        computed: {
            authError() {
                return this.$store.getters.AUTH_ERROR;
            }
        }
    }
</script>