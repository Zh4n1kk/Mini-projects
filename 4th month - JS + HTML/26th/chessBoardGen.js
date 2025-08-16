function createSquare(color) {
    const square = document.createElement('div')
    square.style.width = "120px";
    square.style.height = "120px";
    square.style.backgroundColor = color;
    return square;
}

function createChessboard(rows) {
    const board = document.createElement('div')
    board.style.display = "flex"
    board.style.flexDirection = "column"
    board.style.border = "2px solid black"
    board.style.width = `${120 * rows}px`; // Ширина доски фиксированная (8 клеток)

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div')
        row.style.display = "flex"
        for(let j = 0; j < rows; j++) {
            let color = (i + j) % 2 === 0 ? "white" : "black";
            row.appendChild(createSquare(color));
        }
        board.appendChild(row);
    }

    document.body.appendChild(board); // Теперь добавляем готовую доску в body
}