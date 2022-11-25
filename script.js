const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    const btn1 = document.getElementById("color");
    const btn2 = document.getElementById("erase");
    const btn3 = document.getElementById("clear");
    const btn4 = document.getElementById("rainbow");

    for (c=0; c< (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = "white";
        cell.style.cursor = 'pointer';
        container.appendChild(cell).className = "grid-item";

        cell.onmouseover = () => {
            cell.style.backgroundColor = "#333";
        };

        btn1.addEventListener('click', () => {
            cell.onmouseover = () => {
                cell.style.backgroundColor = "#333";
            };
        });

        btn2.addEventListener('click', () => {
            cell.onmouseover = () => {
                cell.style.backgroundColor = "white";
            };
        });

        btn3.addEventListener('click', () => {  
                cell.style.backgroundColor = "white";
                cell.onmouseover = () => {
                    cell.style.backgroundColor = "#333";
                };
        });

        btn4.addEventListener('click', () => {
            cell.style.backgroundColor = "white";
            cell.onmouseover = () => {
                cell.style.backgroundColor = getRandomRgb();
            };
        });

    };
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

function reset() {
    document.querySelectorAll(".grid-item").forEach((e) =>
    e.parentNode.removeChild(e));
}

let row = 20;
let col = 20;

makeGrid(row,col);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
}

slider.addEventListener('mouseup', () => {
    row = slider.value;
    col = slider.value;
    reset();
    makeGrid(row,col);
});



