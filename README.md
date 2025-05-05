### 🧠 Explicação

- `fetch(...)`: faz a requisição GET.
- `.then(res => res.json())`: converte a resposta para JSON.
- `.forEach(...)`: percorre cada item da resposta (no caso, cada `post`).
- `document.createElement("li")`: cria um item de lista para cada post.
- `post.title`: pegamos apenas o título do post.
- `appendChild`: adiciona o item na `<ul>` da página.
