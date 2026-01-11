// Sample realistic social media posts in English
const samplePosts = [
  { title: "My morning coffee ritual", body: "I can't start my day without a cup of coffee. ☕ How do you start your mornings?" },
  { title: "Weekend vibes", body: "Spent the weekend hiking and enjoying nature. Highly recommend the local trails!" },
  { title: "Favorite book this month", body: "Just finished reading 'Atomic Habits'. It's a game-changer for building routines." },
  { title: "Cooking adventures", body: "Tried making homemade pasta today. It was messy but so worth it!" },
  { title: "Movie night!", body: "Watched 'Inception' again. Still blows my mind every time!" },
  { title: "Fitness goals", body: "Completed a 5k run this morning. Feeling great!" },
  { title: "Work from home setup", body: "Finally organized my desk. Productivity is up!" },
  { title: "Travel dreams", body: "Planning a trip to Italy this summer. Any tips for first-time visitors?" }
];

// Function to shuffle posts for randomness
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Function to display posts on the page
function displayPosts(posts) {
  const ul = document.getElementById('post-list');
  ul.innerHTML = ''; // Clear previous posts

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

// Async function to simulate fetching posts
async function getAndDisplayPosts() {
  try {
    // Simulate network delay (like fetching from an API)
    await new Promise(resolve => setTimeout(resolve, 500));

    const randomPosts = shuffle(samplePosts).slice(0, 5); // pick 5 random posts
    displayPosts(randomPosts);

  } catch (error) {
    console.error('Error displaying posts:', error);
    const ul = document.getElementById('post-list');
    ul.innerHTML = `<li style="color:red;">Failed to load posts. Please try again later.</li>`;
  }
}

// Call the function to show posts
getAndDisplayPosts();


