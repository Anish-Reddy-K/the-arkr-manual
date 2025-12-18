(function() {
    'use strict';

    let currentTheme = 'dark';
    let starfieldCanvas = null;
    let gridContainer = null;

    function loadDarkStarfield() {
        // Switch body class immediately (no transition)
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        // Get or create canvas for starfield
        if (!starfieldCanvas) {
            starfieldCanvas = document.getElementById('starfield-canvas');
            if (!starfieldCanvas) {
                const container = document.getElementById('background-container');
                if (container) {
                    starfieldCanvas = document.createElement('canvas');
                    starfieldCanvas.id = 'starfield-canvas';
                    starfieldCanvas.className = 'starfield-background';
                    container.appendChild(starfieldCanvas);
                }
            }
        }

        // Show canvas, hide grid
        if (starfieldCanvas) {
            starfieldCanvas.style.display = 'block';
        }

        // Initialize starfield immediately
        if (starfieldCanvas && window.darkStarfieldBg && window.darkStarfieldBg.init) {
            window.darkStarfieldBg.init('starfield-canvas');
        }
    }

    function loadLightGrid() {
        // Switch body class immediately (no transition)
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');

        // Hide starfield canvas immediately
        if (starfieldCanvas) {
            starfieldCanvas.style.display = 'none';
        }
    }

    function switchTheme() {
        const toggleIcon = document.querySelector('.toggle-icon');
        if (currentTheme === 'dark') {
            currentTheme = 'light';
            loadLightGrid();
            toggleIcon.textContent = 'light_mode';
        } else {
            currentTheme = 'dark';
            loadDarkStarfield();
            toggleIcon.textContent = 'dark_mode';
        }
    }

    function init() {
        // Set up theme toggle button
        const toggleButton = document.getElementById('theme-toggle');
        toggleButton.addEventListener('click', switchTheme);

        // Load dark mode (starfield) by default
        loadDarkStarfield();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
