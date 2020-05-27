const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}
const hands = [...document.querySelectorAll(".hands")];

//funkcje
function handSelection(){
    game.playerHand = this.dataset.option;
    //console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow ="");
    this.style.boxShadow = "0 0 0 4px yellow";
}


function aiChoice(){
    const aiHand = hands[Math.floor(Math.random()*3)].dataset.option;
    return aiHand;
}

function checkResult(player,ai){
    //console.log(player,ai);
    if(player == ai){
        //console.log("remis");
        return 'draw'
    }
    else if(((player === "papier")&&(ai === "kamień")) || 
    ((player === "kamień")&&(ai ==="nożyce")) || ((player === "nożyce")&&(ai ==="papier"))){
        //console.log("wygrałeś");
        return 'win'
    }
    else{
        //console.log("przegrałeś");
        return 'loss';
    }


}

//wynik rundy
function publishResult(player,ai,result){
    document.querySelector('[data-summary="your-choice"]').textContent = player ;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai ;
    document.querySelector(".numbers span").textContent= ++gameSummary.numbers;
    if(result === "win"){
        document.querySelector(".wins span").textContent= ++gameSummary.wins; 
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";

    }
    else if(result === "loss"){
        document.querySelector(".losses span").textContent= ++gameSummary.losses; 
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    }
    else{
        document.querySelector(".draws span").textContent= ++gameSummary.draws; 
        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
        document.querySelector('[data-summary="who-win"]').style.color = "black";
    }
}

//sterująca funkcja
function startGame(){
    if(game.playerHand === ""){
        alert("wybierz dłoń");
        return
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand,game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand,game.aiHand,gameResult);
    endGame();
}

function endGame(){
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}
hands.forEach(hand => hand.addEventListener("click",handSelection));
document.querySelector("button.play-button").addEventListener("click",startGame);












