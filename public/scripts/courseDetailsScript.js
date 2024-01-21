document.addEventListener('DOMContentLoaded', function() {
    const courseCode = new URLSearchParams(window.location.search).get('coursecode');

    fetch(`/api/courses/${courseCode}`)
        .then(response => response.json())
        .then(course => {
            document.title = `Course Details - ${course.coursename}`;
            document.getElementById('heading').innerHTML = `Course Details - ${course.coursename}`;
            document.getElementById('course-details').innerHTML = `
                      <h2 class="text-2xl font-semibold text-purple-700 mb-3">${course.coursename}</h2>
                      <p class="text-gray-600 mb-2"><strong>Code:</strong> ${course.coursecode}</p>
                      <p class="text-gray-600 mb-2"><strong>Type:</strong> ${course.coursetype}</p>
                      <p class="text-gray-600 mb-2"><strong>Credits:</strong> ${course.creditpoints}</p>
                      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Course Outcomes:</h3>
                      <ul class="list-disc list-inside text-gray-600">
                          ${course.courseoutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                      </ul>
                  `;

            // Dynamically create modals and add content
            course.modules.forEach((module, index) => {
                const moduleId = `module${index + 1}-modal`;
                const moduleContent = module[`module${index + 1}`].subtopics;

                // Call the createModuleModal function
                createModuleModal(moduleId, `Module ${index + 1}: Subtopics`, [module]);
            });

            // Attach click events to each module node
            document.querySelectorAll('.module-node').forEach((moduleNode, index) => {
                moduleNode.addEventListener('click', () => openModal(`module${index + 1}-modal`));
            });
            addTextbooksToPage(course.textbooks);
            addReferenceBooksToPage(course.referencebooks);
            addResourcesToPage(course.resources);
        })
        .catch(error => console.error('Error fetching course details:', error));

    // Function to dynamically add course details to the page
    function addCourseDetailsToPage(course) {
        const courseDetailsContainer = document.getElementById('course-details');
        courseDetailsContainer.innerHTML = `
                  <h2 class="text-2xl font-semibold text-purple-700 mb-3">${course.coursename}</h2>
                  <p class="text-gray-600 mb-2"><strong>Code:</strong> ${course.coursecode}</p>
                  <p class="text-gray-600 mb-2"><strong>Type:</strong> ${course.coursetype}</p>
                  <p class="text-gray-600 mb-2"><strong>Credits:</strong> ${course.creditpoints}</p>
                  <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Course Outcomes:</h3>
                  <ul class="list-disc list-inside text-gray-600">
                      ${course.courseoutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                  </ul>
              `;
    }

    function createModuleModal(modalId, modalTitle, modules) {
        const modal = document.createElement('div');
        modal.id = modalId;
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = () => closeModal(modalId);

        const title = document.createElement('h2');
        title.classList.add('text-xl', 'font-semibold', 'text-gray-800', 'mb-4');
        title.innerText = modalTitle;

        // Create and append content to modal
        const subtopicsList = document.createElement('ul');
        subtopicsList.classList.add('list-disc', 'list-inside', 'text-gray-600');

        modules.forEach(module => {
            Object.keys(module).forEach(moduleKey => {
                const subtopics = module[moduleKey].subtopics;
                const moduleName = moduleKey;

                // Create list item for module
                const moduleListItem = document.createElement('ol');

                // Create nested unordered list for subtopics
                const subtopicsUl = document.createElement('ul');

                subtopics.forEach(subtopic => {
                    const subtopicListItem = document.createElement('li');
                    subtopicListItem.innerHTML = `&bullet; <strong>${subtopic.subtopic}:</strong> <div>${subtopic.text}</div>`;
                    subtopicsUl.appendChild(subtopicListItem);
                });

                moduleListItem.appendChild(subtopicsUl);
                subtopicsList.appendChild(moduleListItem);
            });
        });

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(title);
        modalContent.appendChild(subtopicsList);
        modal.appendChild(modalContent);

        // Append the modal to the body only if it doesn't exist
        if (!document.getElementById(modalId)) {
            document.body.appendChild(modal);
        }
    }

    // Function to open the modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Function to close the modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Close modal on clicking outside the modal content
    window.onclick = function(event) {
        const modal = document.getElementById('module-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    function addTextbooksToPage(textbooks) {
        const textbooksList = document.getElementById('textbooks-list');
        textbooksList.innerHTML = textbooks.map(textbook => `<li>${textbook}</li>`).join('');
    }

    // Dynamically add reference books to the page
    function addReferenceBooksToPage(referenceBooks) {
        const referenceBooksList = document.getElementById('reference-books-list');
        referenceBooksList.innerHTML = referenceBooks.map(book => `<li>${book}</li>`).join('');
    }

    // Dynamically add resources to the page
    function addResourcesToPage(resources) {
        const resourcesList = document.getElementById('resources-list');
        resourcesList.innerHTML = resources.map(resource => `<li>${resource}</li>`).join('');
    }
});