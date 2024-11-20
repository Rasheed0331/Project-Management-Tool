// Sample data (replace with backend integration for real applications)
let projects = [];

// Function to render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects');
    projectsContainer.innerHTML = '';

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>Deadline:</strong> ${project.deadline}</p>
            <p><strong>Tasks:</strong> ${project.tasks.length}</p>
            <button onclick="openTaskModal(${index})">Add Task</button>
        `;
        projectsContainer.appendChild(projectDiv);
    });
}

// Function to open task modal
function openTaskModal(index) {
    const modal = document.getElementById('taskModal');
    const span = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Save task button functionality
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    saveTaskBtn.onclick = function() {
        const taskName = document.getElementById('taskName').value;
        const taskDeadline = document.getElementById('taskDeadline').value;

        if (taskName && taskDeadline) {
            projects[index].tasks.push({ name: taskName, deadline: taskDeadline });
            modal.style.display = 'none';
            renderProjects();
        } else {
            alert('Please fill out all fields.');
        }
    }
}

// Event listener for creating new project button
document.getElementById('newProjectBtn').addEventListener('click', function() {
    const projectName = prompt('Enter project name:');
    const projectDeadline = prompt('Enter project deadline (YYYY-MM-DD):');

    if (projectName && projectDeadline) {
        projects.push({ name: projectName, deadline: projectDeadline, tasks: [] });
        renderProjects();
    } else {
        alert('Please fill out all fields.');
    }
});

// Initial render
renderProjects();