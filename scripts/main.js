// MILESTONE 1: Generazione e visualizzazione dei numeri casuali
const randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1); // Genera numeri casuali da 1 a 100
}

// Visualizza i numeri sulla pagina
const numbersElement = document.createElement('h1');
for (let i = 0; i < randomNumbers.length; i++) {
  const span = document.createElement('span');
  span.textContent = randomNumbers[i] + ' ';
  numbersElement.appendChild(span);
}
document.body.appendChild(numbersElement);

//MILESTONE 2: imposto il timer 30 secondi e nascondo i numeri
setTimeout(() => {
//MILESTONE 3: Richiesta dell'utente
const userNumbers = [];
setTimeout(() => {
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Inserisci i numeri che ti ricordi:");
    userNumbers.push(parseInt(userInput, 10));
  }
  console.log("Numeri inseriti dall'utente", userNumbers);
})
}, 30000); //Tempo di 30 secondi