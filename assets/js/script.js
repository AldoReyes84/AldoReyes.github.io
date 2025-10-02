
document.addEventListener("DOMContentLoaded", function () {
 // console.log("✅ DOM completamente cargado");
  let activeButton = null;

  // 🔍 Base elements validation
  const headerPanelContainer = document.getElementById("header-panels-container");
  const headerPanelContent = document.getElementById("header-panel-content");
  const templates = document.querySelector('.panel-templates');
  const markdown = document.getElementById("markdown-container");
  const headings = document.querySelectorAll("#markdown-container h2[id]");
  const navLinks = document.querySelectorAll(".article-nav-list a");

  //console.log("📦 markdown-container:", markdown);
  //console.log("🔍 Encabezados encontrados:", headings.length);
  //console.log("🔗 Enlaces en lista lateral:", navLinks.length);

  if (!headerPanelContainer || !headerPanelContent || !templates) {
    console.error("❌ Required elements not found.");
    return;
  }

  // 🧭 IntersectionObserver
  if (headings.length > 0 && navLinks.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.article-nav-list a[href="#${id}"]`);

        //console.log("👀 Observed:", id, "¿Visible?", entry.isIntersecting);

        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove("active"));
          if (link) {
            link.classList.add("active");
           // console.log(`✅ Activado: ${id}`);
          }
        }
      });
    }, {
      rootMargin: "0px 0px -30% 0px",
      threshold: 0.1
    });

    headings.forEach(h => observer.observe(h));
  } else {
    console.warn("⚠️ No headers or links to observe.");
  }

  // 🔘 Navigation Bottons
  document.querySelectorAll('.header-toggle').forEach(button => {
    button.addEventListener('click', function (event) {
      event.stopPropagation();
      const rawTarget = button.getAttribute('data-target');
      if (!rawTarget) {
        console.warn("⚠️ This botton has no data-target:", button);
        return;
      }

      const templateId = rawTarget.replace("panel-", "");
      const template = templates.querySelector(`#${templateId}`);
      const isActive = button.classList.contains("active");
      const isSameButton = activeButton === button;

      if (isActive && isSameButton) {
        headerPanelContainer.hidden = true;
        headerPanelContent.innerHTML = '';
        button.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        activeButton = null;
        return;
      }

      if (template) {
        headerPanelContent.innerHTML = '';
        headerPanelContent.appendChild(template.content.cloneNode(true));
        headerPanelContainer.hidden = false;

        document.querySelectorAll('.header-toggle').forEach(btn => {
          btn.classList.remove("active");
          btn.setAttribute("aria-expanded", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        activeButton = button;
      } else {
        headerPanelContent.innerHTML = "<p>Content not available for this section.</p>";
        headerPanelContainer.hidden = false;
      }
    });
  });

  // 🧼 Close with clics outside
  document.addEventListener('click', (event) => {
    const isClickInsidePanel = headerPanelContainer.contains(event.target);
    const isClickOnNavButton = [...document.querySelectorAll('.header-toggle')].some(btn => btn.contains(event.target));

    if (!isClickInsidePanel && !isClickOnNavButton) {
      headerPanelContainer.hidden = true;
      headerPanelContent.innerHTML = '';
      document.querySelectorAll('.header-toggle').forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      });
      activeButton = null;
    }
  });

  // 🍔 Hamburger Menu
  const navToggle = document.querySelector('.nav-toggle');
  const modalMenu = document.getElementById('modal-content-menu');

  if (navToggle && modalMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      modalMenu.hidden = isExpanded;

      if (!isExpanded) {
        cloneNavTreeIntoModal();
      }
    });

    document.addEventListener('click', (event) => {
      const isClickInsideMenu = modalMenu.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        modalMenu.hidden = true;
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    console.warn("⚠️ nav-toggle or modal-content-menu not found.");
  }

  function cloneNavTreeIntoModal() {
    const navTree = document.querySelector('.nav-tree');
    const modalContent = document.querySelector('#modal-content-menu .modal-content');
    if (!navTree || !modalContent) return;

    const previousClone = modalContent.querySelector('.cloned-nav-tree');
    if (previousClone) modalContent.removeChild(previousClone);

    const clone = navTree.cloneNode(true);
    clone.classList.add('cloned-nav-tree');
    modalContent.appendChild(clone);
    activateTreeToggles(clone);
  }

  function activateTreeToggles(container) {
    const toggles = container.querySelectorAll('.tree-toggle');
    toggles.forEach(toggle => {
      const subList = toggle.nextElementSibling;
      if (!subList || !subList.classList.contains('sub-list')) return;

      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        subList.hidden = isExpanded;
      });
    });
  }

  // 🔽 Displayed arrows
  document.querySelectorAll('.toggle-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const isExpanded = arrow.getAttribute('aria-expanded') === 'true';
      const subList = arrow.parentElement.querySelector('.sub-list');
      arrow.setAttribute('aria-expanded', String(!isExpanded));
      if (subList) subList.hidden = !subList.hidden;
    });
  });

  document.querySelectorAll('.tree-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const subList = toggle.parentElement.querySelector('.sub-list');
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      if (subList) subList.hidden = !subList.hidden;
    });
  });

  //🌙 Dark Mode Toggle
  const toggle = document.getElementById('dark-toggle');

  // Restaurar preferencia al cargar
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    toggle.checked = isDark;
  });

  // Alternar y guardar preferencia
  toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

});
