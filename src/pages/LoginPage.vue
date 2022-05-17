<template>
    <div class="card">
        <h2>Login</h2>
        <form>
            <div class="input">
                <input type="email" placeholder="Enter email" v-model.trim="email">
            </div>
            <div class="input">
                <input type="password" placeholder="Enter password" v-model.trim="password">
            </div>
            <my-button style="margin-top: 20px;" @click.prevent="login">Login</my-button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            isValid() {
                return this.email !== '' && this.password !== ''
            }
        },
        methods: {
            login() {
                if(this.isValid) {
                    this.$store.commit('login')
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style scoped>
    .card {
        text-align: center;
    }

    input {
        padding: 10px;
        margin-top: 15px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        width: 20%;
    }
</style>
