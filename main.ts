// Your implementations
//
class Game {
    public player1Points: number = 0;
    public player2Points: number = 0;
}

export function updateGameScore(player1Points: number, player2Points: number): Game {
    const game = new Game;
    // if (player1Points > player2Points) {
    game.player1Points = player1Points  
    // } else if (player1Points > player2Points) {
    game.player2Points = player2Points
    // }
    return game;
}


export function decideGameWinner(game) {
    if (game.player1Points - game.player2Points > 1 && game.player1Points >= 4) {
        return 'Player 1'
    } else if (game.player2Points - game.player1Points > 1 && game.player2Points >= 4) {
        return 'Player 2'
    }
}

export function printScore([player1Points, player2Points]) {
    if (player1Points === 3 && player2Points ===3) {
        return 'deuce'
    }

    if (player1Points - player2Points >= 1 && player1Points >= 3) {
        return 'advantage player 1'
    }

    if (player2Points - player1Points >= 1 && player2Points >= 3) {
        return 'advantage player 2'
    }

    const scoreArray = ['love', 'fifteen', 'thirty', 'forty']
    return `${scoreArray[player1Points]} - ${scoreArray[player2Points]}`
}