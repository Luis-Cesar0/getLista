fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {
    const lista = document.getElementById("post-list");

    posts.forEach(post => {
      const item = document.createElement("li");
      item.textContent = post.title;
      lista.appendChild(item);
    });
  })
  .catch(err => console.error("Erro:", err));




