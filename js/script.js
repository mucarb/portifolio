document.addEventListener("DOMContentLoaded", function () {

  const projectsContainer = document.getElementById("projects");

  // Função para adicionar projetos dinamicamente
  function addProjects(projects) {
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.innerHTML = `
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">Link para o GitHub</a>
          <hr>
      `;
      projectsContainer.appendChild(projectElement);
    });
  }

  // Adiciona dinamicamente os projetos
  const projects = [
    {
      title: "DSList",
      description: "Projeto de API de listagem de games relacionados a uma ou mais listas, na qual, são organizadas por posições",
      link: "https://github.com/mucarb/dslist-backend",
    },
    {
      title: "API de Teste",
      description: "Projeto prático para implementação de testes de cobertura e unitários com JUnit",
      link: "https://github.com/mucarb/test_with_junit5_mokito",
    },
    {
      title: "App de Compras",
      description: "Projeto Backend que recebe requisições de aplicativo mobile para execução de login, cadastros, inserção em carrinho de compra e entrada de pedidos",
      link: "https://github.com/mucarb/fullcourse-spring-ionic",
    },
    {
      title: "API de Ordem de Serviço",
      description: "Uma API simples de requisições para criação de ordens de servições utilizando Java e Spring Boot, o código fonte para o frontend pode se encontra nesse link: https://github.com/mucarb/apios-front",
      link: "https://github.com/mucarb/apios",
    },
  ];
  addProjects(projects);

  // jQuery: Controle do botão de colapso da barra lateral
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("active");
  });

  // jQuery: Adiciona classe à navbar ao rolar a página
  $(window).scroll(function () {
    const navbar = $(".navbar");
    navbar.toggleClass("navbar-scrolled", $(this).scrollTop() > 50);
  });
});
