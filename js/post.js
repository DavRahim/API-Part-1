function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(data => displayPost(data))
}

/*
1. get the container element where you want to add the new element ;
2. create child element
3. set innerText or innerHTML
4.appendChild

 */


function displayPost(posts){
    const postsContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log()
        const PostDiv = document.createElement('div');
        PostDiv.classList = 'post'
        PostDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        
        `
        postsContainer.appendChild(PostDiv)
    }

}

loadPost()