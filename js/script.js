const mail = ['alberto@gmail.com', 'giuseppe@gmail.com', 'cristoforo@gmail.com', 'samantha@gmail.com'];
const userMail = prompt('Inserire la propria Mail:');

const output = document.getElementById('output');
const gioca = document.getElementById('gioca');
const gameResults = document.getElementById('game-results');

let mailResults = false;
let textResults = '';

for(let i = 0; i < mail.length; i++){
  if(userMail == mail[i]){
    mailResults = true;
    textResults = 'La mail da lei inserita è corretta, ora può accedere al gioco dei dadi!';

    const btnGioca = document.createElement('button');
    btnGioca.className = "btn btn-outline-dark";
    btnGioca.innerHTML = 'Gioca';
    gioca.append(btnGioca);

    btnGioca.addEventListener('click',function(){
  
      const dadoPlayer = Math.floor(Math.random()*6) + 1;
      console.log('Player', dadoPlayer);
      const dadoPc = Math.floor(Math.random()*6) + 1;

      if(dadoPlayer > dadoPc){
        gameResults.innerHTML = `<h2> Congratulazioni, hai vinto! </h2> il tuo dato ha dato ${dadoPlayer} mentre Il computer ha tirato ${dadoPc}. `;
      }else if (dadoPlayer < dadoPc){
        gameResults.innerHTML = `<h2> Peccato, hai perso!</h2> Il tuo dato ha dato ${dadoPlayer} mentre il computer ha tirato ${dadoPc}. `;
      }else{
        gameResults.innerHTML = `<h2> Pareggio, ritenta!</h2> Sia il tuo dado che il computer avete tirato ${dadoPc} `;
      }
    })
  }
}

if(!(mailResults)){
  textResults = 'La mail è errata oppure non autorizzata, inserire un\'altra mail.';
}

output.innerHTML = textResults;