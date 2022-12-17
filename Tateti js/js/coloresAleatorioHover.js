class ColoresAleatorios{
    constructor(){
        this.listacolores = ["rgba(254,187,187,0.50)", "rgba(254,216,176,0.50)", "rgba(254,234,187,0.50)", "rgba(254,252,187,0.50)", "rgba(228,254,187,0.50)","rgba(187,254,187,0.50)", "rgba(187,254,248,0.50)", "rgba(187,221,254,0.50)", "rgba(197,187,254,0.50)", "rgba(223,187,254,0.50)", "rgba(254,187,250,0.50)", "rgba(254,187,210,0.50)"];
    }

    SeleccionDeColor(button){
        let NumeroAleatorio = 1 + Math.floor(Math.random()*this.listacolores.length);
        button.style.backgroundColor = this.listacolores[NumeroAleatorio] ;

    }

    Sacarcolor(button){
        button.style.backgroundColor = "rgb(48, 54, 59)";
    }
}


export default ColoresAleatorios;