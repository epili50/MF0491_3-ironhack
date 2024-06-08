async function getPuzzle(wordCount) {
    // let hiddenSentence = 'hola';
        console.log('nro palabras', wordCount);
    
        let url = ' https://puzzle.mead.io/puzzle?wordCount=' + wordCount;
    
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log('Objeto data', data);

    
    let hiddenSentence = data.puzzle;
    console.log('la palabra es ', hiddenSentence);
   

    return hiddenSentence;
}
