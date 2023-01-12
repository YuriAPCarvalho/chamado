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
  
  <style>
  .login-form {
    width: 300px;
    margin: 0 auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
    background-color: white;
  }
  
  .input-field {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button, .signup-button, .google-button {
    width: 100%;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-button {
    background-color: #4CAF50;
    color: white;
  }
  
  .login-button:hover {
    background-color: #45a049;
  }
  
  .signup-button {
    background-color: #2196F3;
    color: white;
  }
  
  .signup-button:hover {
    background-color: #1E88E5;
  }
  
  .google-button {
    background-color: #d62d20;
    color: white;
  }
  
  .google-button:hover {
    background-color: #f74336;
  }
  </style>