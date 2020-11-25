import React, { Component } from "react";

class StartingTheProject extends Component {
    render() {
    return (
        <div>
            <h2>Primeiros Passos</h2>
            <p>Para iniciar a nosso app simples, utilizando React Router, siga os seguintes passos:</p>
            <p>Crie uma pasta, onde deseja salvar seu projeto;</p>
            <p>Abra sua pasta em um terminal de sua preferência  e digite o comando para iniciar seu projeto React</p>
            <p><b>yarn create react-app usando_react_router</b></p>
            <p><b>cd usando_react_router</b></p>
            <p>Certamente seu projeto react já está pronto e pode ser testado em seu navegador. Agora vamos instalar o pacote React Router, dê o seguinte comando:</p>
            <p><b>npm i react-router-dom --save</b></p>
            <p>Agora você já tem os arquivos apropriados em seu package.json</p>

        </div>
    );
    }
}

export default StartingTheProject;