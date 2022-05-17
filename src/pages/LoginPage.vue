<template>
    <div class="card">
        <h2>Авторизуйтесь</h2>
        <form @submit.prevent="submit">
            <div class="input">
                <input type="email" placeholder="Введите email" v-model="email">
            </div>
            <div class="input">
                <input type="password" placeholder="Введите пароль" v-model="password">
            </div>
            <my-button style="margin-top: 20px;">Авторизуйтесь</my-button>
        </form>
    </div>
</template>

<script>
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
