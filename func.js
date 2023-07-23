
  
function translateText() {
    const inputText = document.getElementById('inputText').value;

    
    const sourceLang = 'pt';
    const targetLang = 'en';

    
    const apiKey = 'SUA_CHAVE_DE_API_AQUI';

    
    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(inputText)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const translation = data[0][0][0];
            document.getElementById('outputText').value = translation;
        })
        .catch(error => {
            console.error('Erro ao traduzir:', error);
        });
}

  