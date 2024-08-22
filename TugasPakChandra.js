let score1 = 0;
let score2 = 0;
let sets1 = 0;
let sets2 = 0;
let currentSet = 1;
let winScore = 25;

function addScore(team) {
    if (team === 1) {
        score1++;
        document.getElementById('score1').textContent = score1;
    } else if (team === 2) {
        score2++;
        document.getElementById('score2').textContent = score2;
    }

    checkWinner();
}

function checkWinner() {
    if (score1 >= winScore && score1 >= score2 + 2) {
        sets1++;
        document.getElementById('sets1').textContent = sets1;
        resetScores();
        checkMatchWinner();
    } else if (score2 >= winScore && score2 >= score1 + 2) {
        sets2++;
        document.getElementById('sets2').textContent = sets2;
        resetScores();
        checkMatchWinner();
    } else if (score1 === 20 && score2 === 20) {
        // Jika kedua tim mencapai skor 20, lanjutkan sampai salah satu tim menang dengan selisih 2 poin.
        winScore = Math.max(score1, score2) + 1;
    }
}

function resetScores() {
    score1 = 0;
    score2 = 0;
    winScore = 25;
    currentSet++;
    document.getElementById('score1').textContent = score1;
    document.getElementById('score2').textContent = score2;
}

function checkMatchWinner() {
    if (sets1 === 3) {
        displayResult("Team 1 Wins the Match!");
    } else if (sets2 === 3) {
        displayResult("Team 2 Wins the Match!");
    }
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
    document.getElementById('result').classList.add('alert', 'alert-success');
    disableButtons();
}

function disableButtons() {
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}
