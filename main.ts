// Your implementations
//
class Game {
    public player1Points: number = 0;
    public player2Points: number = 0;
}

function updateGameScore(player1Points: number, player2Points: number): Game {
    const game = new Game;
    if (player1Points > player2Points) {
        game.player1Points += 1   
    } else if (player1Points > player2Points) {
        game.player2Points += 1
    }
    return game;
}


function decideGameWinner(game) {
    if (game.player1Points - game.player2Points > 1 && game.player1Points >= 4) {
        return 'Player 1'
    } else if (game.player2Points - game.player1Points > 1 && game.player2Points >= 4) {
        return 'Player 2'
    }
}

function printScore([player1Points, player2Points]) {
    const scoreArray = ['love', '“fifteen', 'thirty', 'forty']
    return `${scoreArray[player1Points]} - ${scoreArray[player2Points]}`
}