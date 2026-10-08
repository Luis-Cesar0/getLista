# Listagem de posts com Fetch

Exemplo de leitura de dados da API pública JSONPlaceholder e criação de itens de lista no DOM.

## Conteúdo

- Requisição GET com fetch
- Conversão da resposta para JSON
- Iteração sobre os posts
- Criação e inclusão de elementos na página

## Como visualizar

Abra index.html em um navegador com acesso à internet e consulte a lista retornada pela API.

## Explicação

- `fetch(...)`: faz a requisição GET.
- `.then(res => res.json())`: converte a resposta para JSON.
- `.forEach(...)`: percorre cada item da resposta (no caso, cada post).
- `document.createElement("li")`: cria um item de lista para cada post.
- `post.title`: seleciona o título de cada post.
- `appendChild`: adiciona o item à lista da página.

Mais sobre Luis César: [Portfólio](https://luiscesardev.com.br) · [LinkedIn](https://www.linkedin.com/in/luis-cesar/)
