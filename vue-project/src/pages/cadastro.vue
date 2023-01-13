<template>
    <div>
        <h1>CADASTRE-SE</h1>
    </div>
    <div>
      <form class="register-form">
        <label>Nome:</label>
        <input type="text" v-model="name" required/>
        <br />
        <label>Login:</label>
        <input type="text" v-model="login" required/>
        <br />
        <label>Senha:</label>
        <input type="password" v-model="password" required/>
        <br />
        <button @click.prevent="register" class="register-button">Cadastrar</button>
      </form>
    </div>
  </template>
  