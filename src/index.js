// import postTpl from

// function getFruit(name) {

//     const fruits = {
//       strawberry: '🍓',
//       kiwi: '🥝 ',
//       apple: '🍎',
//     };
  
//     return Promise.resolve(fruits[name]);
//   }

//   async function aMakeSmoothie(){
//     const kiwi =  getFruit('kiwi');
//     console.log(kiwi);
  
//     const apple =  getFruit('apple');
//     console.log(apple); 

//     const strawberry =  getFruit('strawberry');
//     console.log(strawberry); 

//     const smothie = await Promise.all([kiwi, apple, strawberry])
//     console.log(smothie);
//   }


// async function createMovie() {
//     const options={
//         method: 'POST',
//         headers:{'Content-type':"application/json"},
//         body:JSON.stringify(newMovie)
// }
//     const result = await fetch(`${BASE_URL}/movies`, options)
//     const parsed = await result.json()
// }




// Отримання списку постів


const BASE_URL = 'http://localhost:3000/posts'

async function getPosts() {

    try {
        const posts = await fetch(BASE_URL)
        return await posts.json()
    } catch (error) {
    
    console.error(error);
    
    }}

    
    // Створення нового поста
    
    async function createPost(title, content) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Оновлення поста
    
    async function updatePost(id, title, content) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Видалення поста
    
    async function deletePost(id) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Додавання коментаря до поста
    
    async function createComment(postId, comment) {
    
    try {
    
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    
    // Оновлення відображення постів на сторінці
    
    function renderPosts(posts) {
      postBoxEl.insertAdjacentHTML("beforebegin", postTpl(posts))
    }
    
    // Обробник події для створення поста
    
    document.getElementById('createPostForm').addEventListener('submit', cb);
    
    // Обробник події для редагування поста
    
    document.addEventListener('click', cb);
    
    // Обробник події для видалення поста
    
    document.addEventListener('click', cb);
    
    // Обробник події для додавання коментаря
    
    document.addEventListener('submit', cb);
    
    // Запуск додатку
    
    async function startApp() {
    
    const posts = await getPosts();
    
    renderPosts(posts);
    
    }
    
    startApp();