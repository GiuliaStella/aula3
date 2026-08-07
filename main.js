// importa o java script do bootstrap

import * as bootstrap from 'bootstrap';

// importa os estilos css
import './style.ccs';

// logica de interacao com os elementos do DOM
document.addEventListener('DOMContentLoaded', () => {
    const btnNotificacao = document.getElementById('btnNotificacao');
    if (btnNotificacao){
        btnNotificacao.addEventListener('click', () => {
            alert('sucesso!. Node.js, npn, vite e bootstrap estao entegrados e funcionando');
        });
    }
});
