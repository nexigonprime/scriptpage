function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('visible');

    // Fechar o menu depois de selecionar uma seção
    toggleSidebar();
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('open');
}

function showSubSection(subSectionId) {
    const subSections = document.querySelectorAll('.subsection');
    subSections.forEach(subSection => {
        subSection.classList.remove('visible');
    });

    const selectedSubSection = document.getElementById(subSectionId);
    selectedSubSection.classList.add('visible');
    
    // Mostrar a seção pai
    showSection('section2');  // Ajuste o ID da seção pai conforme necessário
}
