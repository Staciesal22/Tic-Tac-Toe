document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const result = document.querySelector('.result');
    const restartButton = document.querySelector('.restart-button');
    const heading = document.querySelector('.heading');
    let currentPlayer = 'X';
    let moves = 0;
    let board = ['', '', '', '', '', '', '', '', ''];
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (!board[index]) {
                board[index] = currentPlayer;
                cell.textContent = currentPlayer;
                moves++;
                if (checkWin()) {
                    result.textContent = `${currentPlayer} wins!`;
                    disableCells();
                } else if (moves === 9) {
                    result.textContent = "It's a draw!";
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    restartButton.addEventListener('click', () => {
        board = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.textContent = '';
        });
        result.textContent = '';
        currentPlayer = 'X';
        moves = 0;
    });

    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return board[index] === currentPlayer;
            });
        });
    }

    function disableCells() {
        cells.forEach(cell => {
            cell.removeEventListener('click', () => {});
        });
    }
});


