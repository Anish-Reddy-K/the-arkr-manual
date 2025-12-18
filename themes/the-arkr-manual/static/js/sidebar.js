(function() {
    'use strict';

    const SIDEBAR_STORAGE_KEY = 'arkr-sidebar-state';
    const MOBILE_BREAKPOINT = 768;

    let sidebarOpen = true;
    let isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    function updateSidebarState() {
        // Update menu toggle active state
        if (menuToggle) {
            if (sidebarOpen) {
                menuToggle.classList.add('active');
            } else {
                menuToggle.classList.remove('active');
            }
        }
        
        if (isMobile) {
            // Mobile: show/hide sidebar
            if (sidebarOpen) {
                body.classList.add('sidebar-open');
            } else {
                body.classList.remove('sidebar-open');
            }
        } else {
            // Desktop: toggle visibility
            if (sidebarOpen) {
                body.classList.remove('sidebar-hidden');
            } else {
                body.classList.add('sidebar-hidden');
            }
        }
    }

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
        updateSidebarState();
        saveSidebarState();
    }

    function closeSidebar() {
        if (sidebarOpen) {
            sidebarOpen = false;
            updateSidebarState();
            saveSidebarState();
        }
    }

    function saveSidebarState() {
        try {
            localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify({
                open: sidebarOpen,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Could not save sidebar state to localStorage:', e);
        }
    }

    function loadSidebarState() {
        try {
            const saved = localStorage.getItem(SIDEBAR_STORAGE_KEY);
            if (saved) {
                const state = JSON.parse(saved);
                // Only restore if saved within last 24 hours
                const dayInMs = 24 * 60 * 60 * 1000;
                if (Date.now() - state.timestamp < dayInMs) {
                    sidebarOpen = state.open;
                }
            }
        } catch (e) {
            console.warn('Could not load sidebar state from localStorage:', e);
        }
    }

    function handleResize() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        
        // If switching between mobile/desktop, reset sidebar state
        if (wasMobile !== isMobile) {
            if (isMobile) {
                sidebarOpen = false; // Start closed on mobile
            } else {
                sidebarOpen = true; // Start open on desktop
            }
            updateSidebarState();
        }
    }

    function init() {
        // Load saved sidebar state
        loadSidebarState();
        
        // Set initial state
        updateSidebarState();
        
        // Event listeners
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleSidebar);
        }
        
        // Close sidebar on escape key (mobile only)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebarOpen && isMobile) {
                closeSidebar();
            }
        });
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 150);
        });
        
        // Initial resize check
        handleResize();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
