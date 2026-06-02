// Simulate fetching data from an API
function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 1, title: 'First Post' },
                { id: 2, title: 'Second Post' },
                { id: 3, title: 'Third Post' }
            ];
            resolve(posts);
        }, 2000); // 2 second delay
    });
}

// Using async/await
async function displayPosts() {
    console.log('Fetching posts...');

    try {
        const posts = await fetchPosts();
        console.log('Posts received:', posts);

        // Do something with posts
        posts.forEach(post => {
            console.log(`- ${post.title}`);
        });
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

displayPosts();

// The same Promise function
function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 1, title: 'First Post' },
                { id: 2, title: 'Second Post' }
            ];
            resolve(posts);
            // Uncomment below to test error handling:
            // reject('Failed to fetch posts');
        }, 2000);
    });
}

console.log('=== METHOD 1: Using .then() and .catch() ===');
fetchPosts()
    .then((posts) => {
        console.log('Posts received:', posts);
        posts.forEach(post => console.log(`- ${post.title}`));
    })
    .catch((error) => {
        console.log('Error:', error);
    });

console.log('\n=== METHOD 2: Using async/await ===');
async function displayPosts() {
    try {
        const posts = await fetchPosts();
        console.log('Posts received:', posts);
        posts.forEach(post => console.log(`- ${post.title}`));
    } catch (error) {
        console.log('Error:', error);
    }
}

displayPosts();

// BONUS: You can even mix them (but don't - pick one style)
console.log('\n=== METHOD 3: Calling async function with .then() ===');
displayPosts().then(() => {
    console.log('Display posts completed!');
});