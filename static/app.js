document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInput = document.getElementById('modal-input');
    const modalForm = document.getElementById('modal-form');
    const modalClose = document.getElementById('modal-close');

    const projectList = document.getElementById('project-list');
    const taskList = document.getElementById('task-list');

    const newProjectBtn = document.getElementById('new-project-btn');
    const newTaskBtn = document.getElementById('new-task-btn');

    // Estado
    let currentMode = '';

    // Abrir modal
    const openModal = (mode) => {
        currentMode = mode;
        modalTitle.textContent = mode === 'project' ? 'Crear Proyecto' : 'Crear Tarea';
        modalInput.placeholder = mode === 'project' ? 'Nombre del proyecto' : 'Nombre de la tarea';
        modalInput.value = '';
        modal.classList.remove('hidden');
    };

    // Cerrar modal
    const closeModal = () => {
        modal.classList.add('hidden');
    };

    // Manejar formulario del modal
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = modalInput.value.trim();
        if (!value) return;

        if (currentMode === 'project') {
            const li = document.createElement('li');
            li.textContent = value;
            projectList.appendChild(li);
        } else if (currentMode === 'task') {
            const li = document.createElement('li');
            li.textContent = value;
            taskList.appendChild(li);
        }

        closeModal();
    });

    // Eventos de botones
    newProjectBtn.addEventListener('click', () => openModal('project'));
    newTaskBtn.addEventListener('click', () => openModal('task'));
    modalClose.addEventListener('click', closeModal);
});
