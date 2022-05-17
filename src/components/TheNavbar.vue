<template>
    <div class="navbar">
        <div @click="this.$router.push('/')" style="cursor: default">Task list</div>
        <div class="navbar__btns">
            <my-button @click="this.$router.push('/todos')">To tasks</my-button>
            <my-button @click="this.$router.push('/about')" style="margin-left: 20px">About us</my-button>
            <my-button
                    @click="this.$router.push('/login')"
                    style="margin-left: 20px"
                    v-if="!this.$store.state.isAuth"
            >
                Login
            </my-button>
            <my-button
                    style="margin-left: 20px"
                    @click="logout"
                    v-else
            >
                Logout
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$store.commit('logout')
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .navbar {
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .navbar__btns {
        margin-left: auto;
    }
</style>
