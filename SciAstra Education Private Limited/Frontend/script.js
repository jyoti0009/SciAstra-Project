// frontend/js/main.js
const DOMContentLoaded = document.addEventListener('DOMContentLoaded');
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    loadBlogPosts();

    // Event listener for course form submission
    const courseForm = document.getElementById('course-form');
    if (courseForm) {
        courseForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const title = document.getElementById('course-title').value;
            const description = document.getElementById('course-description').value;
            const price = document.getElementById('course-price').value;

            await fetch('/api/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, price }),
            });
            courseForm.reset();
            loadCourses();
        });
    }

    // Event listener for blog form submission
    const blogForm = document.getElementById('blog-form');
    if (blogForm) {
        blogForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const title = document.getElementById('blog-title').value;
            const content = document.getElementById('blog-content').value;

            await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            });
            blogForm.reset();
            loadBlogPosts();
        });
    }
});

// Function to load courses
async function loadCourses() {
    const response = await fetch('/api/courses');
    const courses = await response.json();
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><p>Price: $${course.price}</p>`;
        courseList.appendChild(courseItem);
    });
}

// Function to load blog posts
async function loadBlogPosts() {
    const response = await fetch('/api/blog');
    const posts = await response.json();
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postList.appendChild(postItem);
    });
}


//### 3. payment.js

//This JavaScript file handles the payment form submission.

//```javascript
// frontend/js/payment.js
document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const cardNumber = document.getElementById('card-number').value;
            const cardName = document.getElementById('card-name').value;
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;

            // Here you would typically send the payment information to your payment processor
            console.log('Payment submitted:', { cardNumber, cardName, expiryDate, cvv });

            // Reset the form after submission
            paymentForm.reset();
            alert('Payment processed successfully!');
        });
    }
});