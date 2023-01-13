<template>
    <div>
        <h1>LOGIN</h1>
    </div>
    <div>
      <form class="login-form">
        <label>Email:</label>
        <input type="email" v-model="email" required class="input-field"/>
        <br />
        <label>Senha:</label>
        <input type="password" v-model="password" required class="input-field"/>
        <br />
        <button @click.prevent="login" class="login-button">Login</button>
        <button @click.prevent="signup" class="signup-button">Cadastre-se</button>
        <button @click.prevent="loginWithGoogle" class="google-button">Logar com o Google</button>
    </form>

    </div>
  </template>
