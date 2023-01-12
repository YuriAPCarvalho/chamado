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


<style>

h1 {
    text-align: center;
    margin-top: 50px;
    color: #0c550f;
}

body {
    background-color: rgba(219, 219, 219, 0.753)
}

.register-form {
  width: 300px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ccc;
  background-color: white;
}

.register-form input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-button {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.register-button:hover {
  background-color: #45a049;
}
</style>
  