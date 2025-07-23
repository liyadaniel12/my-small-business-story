function submit()
{
    var UName=document.getElementById("UName").value.trim();
    var comment=document.getElementById("comment").value.trim();
    var commentList=document.getElementById("commentList")
    if(comment===""|| UName===""){
        alert("please fill in both your name and comment");
return;

    }
    var commentItem=document.createElement("div");
    commentItem.className="comment-item";
    commentItem.innerHTML = `
    <p><strong>Name:</strong>${UName}</p>
    <p><strong>Comment:</strong> ${comment}</p>
    `;
    commentList.appendChild(commentItem);
     document.getElementById("UName").value = "";
    document.getElementById("comment").value = ""; 
}

async function loadBlogPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const postContainer = document.getElementById('posts');
    postContainer.innerHTML = ''; // clear loading text

    // Take only first 5 posts
    posts.slice(0, 5).forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
      `;
      postContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    document.getElementById('posts').innerText = 'Failed to load posts.';
  }
}

window.onload = loadBlogPosts;
