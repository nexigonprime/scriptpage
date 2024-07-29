// Função para alternar o modo claro e escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    applyDarkMode();
  }
  
  // Função para aplicar estilos de modo escuro e claro
  function applyDarkMode() {
    const darkModeButton = document.getElementById("darkModeButton");
    const iconMoon = document.getElementById("iconMoon");
    const iconSun = document.getElementById("iconSun");
  
    if (document.body.classList.contains("dark-mode")) {
      darkModeButton.setAttribute("aria-label", "Modo Claro");
      iconMoon.style.display = "inline";
      iconSun.style.display = "none";
    } else {
      darkModeButton.setAttribute("aria-label", "Modo Escuro");
      iconMoon.style.display = "none";
      iconSun.style.display = "inline";
    }
  }
  
  // Monitorar alterações no DOM usando Mutation Observer
  const projectsGrid = document.querySelector(".projects-grid");
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(addedNode => {
          if (addedNode.classList && addedNode.classList.contains("project")) {
            // Uma nova div de projeto foi adicionada
            // Aplicar estilos e funcionalidade apropriados
            applyDarkMode();
          }
        });
      }
    });
  });
  
  const observerConfig = { childList: true };
  observer.observe(projectsGrid, observerConfig);
  
  // Chamar a função applyDarkMode() quando o documento for carregado
  document.addEventListener("DOMContentLoaded", () => {
    applyDarkMode();
  });
  