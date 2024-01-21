document.addEventListener('DOMContentLoaded', function () {
    const coursesContainer = document.getElementById('courses-container');
  
    fetch('/api/courses')
      .then(response => response.json())
      .then(courses => {
        courses.forEach(course => {
          const courseCard = document.createElement('a'); // Use <a> element for links
          courseCard.href = `/courseDetails.html?coursecode=${course.coursecode}`;
          courseCard.classList.add('course-card', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition', 'duration-300', 'ease-in-out');
          courseCard.innerHTML = `
              <div class="p-6">
                  <h2 class="text-2xl font-semibold text-purple-800 mb-3">${course.coursename}</h2>
                  <p class="text-gray-700 mb-2"><strong>Code:</strong> ${course.coursecode}</p>
                  <p class="text-gray-700 mb-2"><strong>Type:</strong> ${course.coursetype}</p>
                  <p class="text-gray-700 mb-2"><strong>Credits:</strong> ${course.creditpoints}</p>
              </div>
          `;
          coursesContainer.appendChild(courseCard);
        });
      })
      .catch(error => console.error('Error fetching courses:', error));
  });
  