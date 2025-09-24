document.addEventListener("DOMContentLoaded", function () {

  const headerPanelContainer = document.getElementById("header-panels-container");
  const headerPanelContent = document.getElementById("header-panel-content");
  const templates = document.querySelector('.panel-templates');

  let activeButton = null;

  // 🧾 Validate required elements
  if (!headerPanelContainer || !headerPanelContent || !templates) {
    console.error("❌ Required elements not found.");
    return;
  }
  
 // Handle nav button clicks
    document.querySelectorAll('.header-toggle').forEach(button => {
    button.addEventListener('click', function (event) {
    event.stopPropagation();
      
      const rawTarget = button.getAttribute('data-target');
       if (!rawTarget) {
        console.warn("⚠️ Este botón no tiene data-target:", button);
        return;
         
      }
      const templateId = rawTarget.replace("panel-", "");
      const template = templates.querySelector(`#${templateId}`);
      const isActive = button.classList.contains("active");
      const isSameButton = activeButton === button;

      // 🔄 Collapse panel if same button is clicked again
      if (isActive && isSameButton) {
        headerPanelContainer.hidden = true;
        headerPanelContent.innerHTML = '';
        button.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        activeButton = null;
        return;
      }

      // 🧠 Inject template content into header panel
      if (template) {
        headerPanelContent.innerHTML = '';
        headerPanelContent.appendChild(template.content.cloneNode(true));
        headerPanelContainer.hidden = false;

        // Reset all buttons
          document.querySelectorAll('.header-toggle').forEach(btn => {
          btn.classList.remove("active");
          btn.setAttribute("aria-expanded", "false");
        });

        // Activate current button
        button.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        activeButton = button;
      } else {
        headerPanelContent.innerHTML = "<p>Content not available for this section.</p>";
        headerPanelContainer.hidden = false;
      }
    });
  });

  // ❌ Close header panel when clicking outside
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

    // Rowdown arrow navigation when clic
    document.querySelectorAll('.toggle-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const isExpanded = arrow.getAttribute('aria-expanded') === 'true';
      const subList = arrow.parentElement.querySelector('.sub-list');

      arrow.setAttribute('aria-expanded', String(!isExpanded));
      if (subList) {
        subList.classList.toggle('hidden');
      }
    });
  });

      // Rowdown section navigation when clic
    document.querySelectorAll('.tree-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const subList = toggle.parentElement.querySelector('.sub-list');

      toggle.setAttribute('aria-expanded', String(!isExpanded));
      if (subList) {
        subList.classList.toggle('hidden');
      }
    });
  });

  // 🍔 Toggle dropdown menu from hamburger button
  const navToggle = document.querySelector('.nav-toggle');
  const modalMenu = document.getElementById('modal-content-menu');

  if (navToggle && modalMenu) {
    navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    modalMenu.hidden = isExpanded;
  });
  } else {
    console.warn("⚠️ nav-toggle or modal-content-menu not found.");
  }

  document.addEventListener('click', (event) => {
    const isClickInsideMenu = modalMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      modalMenu.hidden = true;
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
