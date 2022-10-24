var dataAttuale = new Date();


const mesi = [
"Gennaio",
"Febbraio",
"Marzo",
"Aprile",
"Maggio",
"Giugno",
"Luglio",
"Agosto",
"Settembre",
"Ottobre",
"Novembre",
"Dicembre"
];

document.getElementById('titolo').innerHTML += `${dataAttuale.getDate()}/${mesi[dataAttuale.getMonth()]}/${dataAttuale.getFullYear()}`;
document.getElementById('oraLegale').innerHTML = dataAttuale;
document.getElementById('giorno').innerHTML += dataAttuale.getDate();
document.getElementById('mese').innerHTML += mesi[dataAttuale.getMonth()];
document.getElementById('oggi').innerHTML += dataAttuale.toLocaleDateString('it-IT');


if (dataAttuale.getHours() < 13) {
  dataAttuale = 'Buongiorno';
} 
else if (dataAttuale.getHours() < 18 ) {
    dataAttuale = 'Buon Pomeriggio';
} 
else{
 dataAttuale = 'Buonasera';
}
document.getElementById('saluto').innerHTML = dataAttuale + ' Massimo';
