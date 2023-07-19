function translateText() {
    const inputText = document.getElementById('inputText').value;

    // Substitua 'en' pelo código do idioma de origem que você deseja
    // Substitua 'pt' pelo código do idioma de destino que você deseja
    const sourceLang = 'pt';
    const targetLang = 'en';

    // Chave de API do Google Translate
    const apiKey = 'SUA_CHAVE_DE_API_AQUI';

    // Construindo a URL da API
    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(inputText)}`;

    // Fazendo a requisição para a API do Google Translate
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