(function() {
    'use strict';

    const THEME_STORAGE_KEY = 'arkr-theme';
    let currentTheme = 'dark';
    let starfieldCanvas = null;
    let gridContainer = null;
    let themeToggle = null;
    let toggleIcon = null;

    function updateThemeState() {
        if (!themeToggle) {
            themeToggle = document.getElementById('theme-toggle');
            toggleIcon = themeToggle ? themeToggle.querySelector('.toggle-icon') : null;
        }
        
        // Button is always inactive - it shows what you'll switch TO, not current theme
        if (themeToggle) {
            themeToggle.classList.remove('active');
        }
        
        // Icon shows what theme you'll switch TO when clicked
        // Dark mode → show sun (to switch to light)
        // Light mode → show moon (to switch to dark)
        if (toggleIcon) {
            toggleIcon.textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    }

    function loadDarkStarfield() {
        // Switch body class immediately (no transition)
        if (document.body) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }

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

        // Initialize starfield immediately (wait for script to be available)
        if (starfieldCanvas) {
            // Wait for darkStarfieldBg to be available
            const initStarfield = () => {
                if (window.darkStarfieldBg && window.darkStarfieldBg.init) {
                    window.darkStarfieldBg.init('starfield-canvas');
                } else {
                    // Retry after a short delay if not ready yet
                    setTimeout(initStarfield, 50);
                }
            };
            initStarfield();
        }
    }

    function loadLightGrid() {
        // Switch body class immediately (no transition)
        if (document.body) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }

        // Hide starfield canvas immediately
        if (starfieldCanvas) {
            starfieldCanvas.style.display = 'none';
        } else {
            // Try to get canvas if it exists
            starfieldCanvas = document.getElementById('starfield-canvas');
            if (starfieldCanvas) {
                starfieldCanvas.style.display = 'none';
            }
        }
    }

    function switchTheme() {
        if (currentTheme === 'dark') {
            currentTheme = 'light';
            loadLightGrid();
        } else {
            currentTheme = 'dark';
            loadDarkStarfield();
        }
        updateThemeState();
        saveThemeState();
    }

    function saveThemeState() {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({
                theme: currentTheme,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Could not save theme state to localStorage:', e);
        }
    }

    function loadThemeState() {
        try {
            const saved = localStorage.getItem(THEME_STORAGE_KEY);
            if (saved) {
                const state = JSON.parse(saved);
                currentTheme = state.theme;
                return true;
            }
        } catch (e) {
            console.warn('Could not load theme state from localStorage:', e);
        }
        // Default to dark if no saved state
        currentTheme = 'dark';
        return false;
    }

    function applyTheme() {
        // Apply theme immediately (before DOMContentLoaded if possible)
        if (document.body) {
            if (currentTheme === 'dark') {
                loadDarkStarfield();
            } else {
                loadLightGrid();
            }
        }
    }

    function init() {
        // Update button state after DOM is ready
        updateThemeState();
        
        // Set up theme toggle button
        themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', switchTheme);
        }
    }

    // Load theme state - check inline script first, then localStorage
    if (window.__savedTheme) {
        currentTheme = window.__savedTheme;
    } else {
        loadThemeState();
    }
    
    // Apply theme immediately - this runs synchronously when script loads
    function applyThemeImmediately() {
        if (document.body) {
            // Force apply theme by directly manipulating classes
            if (currentTheme === 'dark') {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
            }
            // Also call the full function for canvas handling
            applyTheme();
            return true;
        }
        return false;
    }
    
    // Try to apply immediately (script is at bottom of body, so body should exist)
    if (!applyThemeImmediately()) {
        // If body doesn't exist, wait for it (shouldn't happen, but safety check)
        const checkBody = setInterval(function() {
            if (applyThemeImmediately()) {
                clearInterval(checkBody);
            }
        }, 10);
    }
    
    // Also apply on DOMContentLoaded as backup
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyTheme();
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
