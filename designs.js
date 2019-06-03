
// create variables for size input and table
const sizeP = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');

//user inputs height and width. passed to makeGrid
sizeP.onsubmit = function(event) {
    event.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}
//creating N x M table using nested for loops. Event listener added for color.
function makeGrid(N, M){
    $('tr').remove();
    for (var row = 1; row <= N; row++){
        tblRow = document.createElement('tr');
        tblRow.setAttribute('id', row);
        canvas.appendChild(tblRow)
        for (var col = 1; col <= M; col++){
            cell = document.createElement('td');
            tblRow.appendChild(cell);
            cell.addEventListener('click', function() {
                color = document.getElementById('colorPicker').value;
                this.style.backgroundColor = color;
            });    
        }
    }
}
