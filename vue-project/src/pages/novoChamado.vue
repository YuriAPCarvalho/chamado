<template>
    <h1>Novo chamado</h1>
    <div>
        <form class="register-form">
            <label>Categoria:</label>
            <br>
            <select name="name" id="name">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <br />
            <label>Descrição:</label>
            <textarea name="descricao" id="descricao" cols="38" rows="30"></textarea>
            <br />
            <button @click.prevent="register" class="register-button">Cadastrar</button>
        </form>
    </div>
</template>