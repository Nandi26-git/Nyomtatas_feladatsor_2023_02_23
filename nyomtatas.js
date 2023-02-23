const kalkulalGomb = document.querySelector("#kalkulalGomb")
kalkulalGomb.addEventListener("click", kalkulal);

function kalkulal() {
    //Űrlapadatok
    const szelesseg = document.querySelector("#szelesseg").value;
    const magassag = document.querySelector("#magassag").value;
    const papir = document.getElementById('papirtipus').value;
    //Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);
    let koltseg = terulet * papir;
    //Megjelenítés
    const teruletMegjelenito = document.querySelector("#terulet");
    const arMegjelenito = document.querySelector("#papir");
    const vegOsszegMegjelenito = document.querySelector("#koltseg");
    teruletMegjelenito.innerText = terulet;
    arMegjelenito.innerText = papir;
    vegOsszegMegjelenito.innerText = koltseg;
    document.getElementById('valasz').style.visibility = "visible";
}



