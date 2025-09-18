document.addEventListener("DOMContentLoaded", function () {

  const navButtons = document.querySelectorAll('.nav-toggle');
  const headerPanelContainer = document.getElementById("header-panels-container");
  const headerPanelContent = document.getElementById("header-panel-content");
  const templates = document.querySelector('.panel-templates');

  // 🧾 Validate required elements
  if (!markdownContainer || !panelContent || !headerPanelContainer || !headerPanelContent || !templates) {
    console.error("❌ Required elements not found.");
    return;
  }

   // 🧭 Navigation logic: open header panel or load Markdown
  let activeButton = null;

  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const mdFile = button.querySelector('[data-md]')?.dataset.md;
      const rawTarget = button.dataset.target;

      // 🧩 If data-target is present, show header panel
      if (!rawTarget) {
        console.warn("⚠️ This button has no data-target or data-md:", button);
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
        return;
      }

      // 🧠 Inject template content into header panel
      if (template) {
        headerPanelContent.innerHTML = '';
        headerPanelContent.appendChild(template.content.cloneNode(true));
        headerPanelContainer.hidden = false;

        // Reset all buttons
        navButtons.forEach(btn => {
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
    const isClickOnNavButton = [...navButtons].some(btn => btn.contains(event.target));

    if (!isClickInsidePanel && !isClickOnNavButton) {
      headerPanelContainer.hidden = true;
      headerPanelContent.innerHTML = '';
      navButtons.forEach(btn => btn.setAttribute("aria-expanded", "false"));
    }
  });

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
        return;
      }

      // 🧠 Inject template content into header panel
      if (template) {
        headerPanelContent.innerHTML = '';
        headerPanelContent.appendChild(template.content.cloneNode(true));
        headerPanelContainer.hidden = false;

        // Reset all buttons
        navButtons.forEach(btn => {
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
    
  

      // ❌ Close header panel when clicking outside
    document.addEventListener('click', (event) => {
    const isClickInsidePanel = headerPanelContainer.contains(event.target);
    const isClickOnNavButton = [...navButtons].some(btn => btn.contains(event.target));

    if (!isClickInsidePanel && !isClickOnNavButton) {
      headerPanelContainer.hidden = true;
      headerPanelContent.innerHTML = '';
      navButtons.forEach(btn => btn.setAttribute("aria-expanded", "false"));
    }
    });
});
