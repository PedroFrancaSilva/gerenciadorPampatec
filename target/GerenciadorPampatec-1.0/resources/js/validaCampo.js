/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/**
 * Filtra os valores de entrada, para receber apenas números 
 * @param {type} e
 * @returns {Boolean}
 */
function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58))
        return true;
    else {
        if (tecla === 8 || tecla === 0)
            return true;
        else
            return false;
    }
}