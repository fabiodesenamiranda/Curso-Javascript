"use strict";
function showFeedback(message, type) {
    alert(type.toUpperCase() + " - " + message);
}
const feedback = showFeedback("ola", "info");
function showError(message) {
    throw new Error("função marcada com never nunca retorna nada");
}
const error = showError("mensagem de erro");
