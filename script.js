const nomes = [
    "DALVANE", "ITAMAR", "ELIANE", "MARCELO OJEDA", "SIDNEI", 
    "GABRIEL VENTURA", "GUSTAVO", "JHON KERRY", "ROGER", "KETLYN",
    "TAIS OLIVEIRA", "LARISSA", "JULIANA RAMOS", "RAFAEL GUTERRES", 
    "SAMANTA", "RODRIGO", "RAFAEL TEJADA DA FONSECA", "THALYNE", 
    "LEIDIANE", "LUCAS LACKMANN LEAL", "RAMON RODRIGUES", "TIAGO SOUZA SALAZAR",
    "OSEAS KRUGER DE SOUZA", "PAMELA GISELE CARVALHO MENDES", "EDER VIEIRA FERRAZ", 
    "ARLETE", "ADAO SOLISMAR CAMARGO DA COSTA", "MICHELLE GUTERRES", "SHAIANE",
    "DAMATA", "CRISTIEL", "AMANDA RH", "MICHAEL", "CAMILA OLIVEIRA", 
    "NATALIE", "MARTIELO", "ELISEU", "ANA", "PRISCILA", "TAIS OLIVEIRA", 
    "EDUARDA", "ANGELICA SALAZAR", "IASMIN"
];

function sortear() {
    const indice = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indice];
    document.getElementById('resultado').innerText = `Nome sorteado: ${nomeSorteado}`;
}
