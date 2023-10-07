import axios from 'axios';
import postTpl from './postTpl.handlebars';


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

const formEl =  document.getElementById('createPostForm')

async function getPosts() {

    try {
        const posts = await axios.get(BASE_URL)
        return await posts.json()
    } catch (error) {
    
    console.error(error);
    
    }}

    
    // Створення нового поста
    
    async function createPost(title, text) {
    try {
      const newPost = await axios.post(BASE_URL, {
        title,
        text,
      })
    } 
    catch (error) {
    console.error(error);
    }}
    
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
    
   formEl.addEventListener('submit', async(event)=>{
    event.preventDefault()
      const title = event.currentTarget.elements.title.value
      const text = event.currentTarget.elements.title.value
    await createPost(title, text)
    const posts = await getPosts();
    renderPosts(posts);
   });

   refs.postContainer.addEventListener('click',async(event)=>{
    event.preventDefault()
    if(event.target.classList.contains('deletePostButton')){
      const id = event.target.getAttribute('data-id')
      event.preventDefault()
      await deletePost(id)
      const posts = await getPosts();
      renderPosts(posts);
    }
   })
    
    // Обробник події для редагування поста
    
    // document.addEventListener('click', cb);
    
    // Обробник події для видалення поста
    
    // document.addEventListener('click', cb);
    
    // Обробник події для додавання коментаря
    
    // document.addEventListener('submit', cb);
    
    // Запуск додатку
    
    async function startApp() {
    
    const posts = await getPosts();
    
    renderPosts(posts);
    
    }
    
    startApp();