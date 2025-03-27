const lamp = document.getElementById('primeiro');
const btnTurnOn = document.getElementById('on');
const btnTurnOff = document.getElementById('off');

btnTurnOn.addEventListener("click", () => {
    if (lamp.classList.contains("off")) {
        lamp.classList.remove("off");
        lamp.classList.add("on");
    }
    lamp.src = "./img/lampada_ligada.png";
    console.log(lamp.className);
});

btnTurnOff.addEventListener("click", () => {
    if (lamp.classList.contains("on")) {
        lamp.classList.remove("on");
        lamp.classList.add("off");
    }
    lamp.src = "./img/lampada_desligada.png";
    console.log(lamp.className);
});