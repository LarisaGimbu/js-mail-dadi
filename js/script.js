// Mail 
// 1 - Chiedi all’utente la sua email,
// 2 - controlla che sia nella lista di chi può accedere,
// 3 - stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// 1 - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// 2 - Stabilire il vincitore, in base a chi fa il punteggio più alto.

// console.log('ciao');

const mail = ['alberto@gmail.com', 'giuseppe@gmail.com', 'cristoforo@gmail.com', 'samantha@gmail.com']
// console.log(mail);

const userMail = prompt('Inserire la propria Mail:');
// console.log(userMail);

let mailResults = false;
// console.log(mailResults)

let textResults = '';
const output = document.getElementById('output');
const gioca = document.getElementById('gioca');
const gameResults = document.getElementById('game-results');
// console.log(gameResults);

for(let i = 0; i < mail.length; i++){
  if(userMail == mail[i]){
    mailResults = true
    // console.log(mailResults)
    textResults = 'La mail da lei inserita è corretta, ora può accedere al gioco dei dadi!'
    const btnGioca = document.createElement('button');
    // console.log(btnGioca);
    btnGioca.className = "btn btn-outline-dark";
    btnGioca.innerHTML = 'Gioca';
    gioca.append(btnGioca);

    btnGioca.addEventListener('click',function(){
  
      const dadoPlayer = Math.floor(Math.random()*6) + 1;
      console.log('Player', dadoPlayer);
      const dadoPc = Math.floor(Math.random()*6) + 1;
      console.log('PC', dadoPc);

      if(dadoPlayer > dadoPc){
        gameResults.innerHTML = `<h2> Congratulazioni, hai vinto! </h2> il tuo dato ha dato ${dadoPlayer} mentre Il computer ha tirato ${dadoPc}. `
      }else if (dadoPlayer < dadoPc){
        gameResults.innerHTML = `<h2> Peccato, hai perso!</h2> Il tuo dato ha dato ${dadoPlayer} mentre il computer ha tirato ${dadoPc}. `
      }else{
        gameResults.innerHTML = `<h2> Pareggio, ritenta!</h2> Sia il tuo dado che il computer avete tirato ${dadoPc} `
      }
    })
  }
}



if(!(mailResults)){
  textResults = 'La mail è errata oppure non autorizzata, inserire un\'altra mail.';
}

// console.log(textResults);

output.innerHTML = textResults;