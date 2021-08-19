function calculate(){
    area = document.getElementById("length").value * document.getElementById("length").value;
    document.getElementById("lblArea").innerHTML = area;

    perimeter = document.getElementById("length").value * 4;
    document.getElementById("lblPerimeter").innerHTML = perimeter;

    console.log(area);
    console.log(perimeter);
}