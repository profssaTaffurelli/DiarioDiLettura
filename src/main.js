"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TARIFFA_GIORNALIERA = 30; // euro al giorno
const SOGLIA_GIORNI = 6; // oltre questa soglia scatta lo sconto
const PERCENTUALE_SCONTO = 10; // %
function calcolaPrezzoNoleggio() {
    const risultato = document.getElementById("risultato");
    // 1. Controllo che non sia null
    if (risultato === null) {
        console.error("Elemento 'risultato' non trovato");
        return;
    }
    // 2. Leggo il testo e tolgo gli spazi
    let testo = document.getElementById("giorni").value.trim();
    // 3. Stringa vuota?
    if (testo === "") {
        risultato.innerHTML = "<strong>Inserisci il numero di giorni.</strong>";
        return;
    }
    let giorni = Number(testo);
    // 3. Controllo che sia un numero
    if (Number.isNaN(giorni)) {
        risultato.innerHTML = "<strong>Il valore inserito non è un numero.</strong>";
        return;
    }
    // 4. Controllo che sia un intero positivo
    if (!Number.isInteger(giorni) || giorni <= 0) {
        risultato.innerHTML = "<strong>Il numero di giorni deve essere un intero positivo.</strong>";
        return;
    }
    let totale = giorni * TARIFFA_GIORNALIERA;
    if (giorni > SOGLIA_GIORNI) {
        let sconto = totale * PERCENTUALE_SCONTO / 100;
        totale = totale - sconto;
    }
    risultato.innerHTML = `<strong>Il totale è ${totale.toFixed(2)} €</strong>`;
}
//# sourceMappingURL=main.js.map