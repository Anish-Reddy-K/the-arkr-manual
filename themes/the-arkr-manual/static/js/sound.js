(function() {
    'use strict';

    const SOUND_STORAGE_KEY = 'arkr-sound-enabled';
    let soundEnabled = true;
    let soundToggle = null;
    let soundIcon = null;

    function updateSoundState() {
        if (!soundToggle) {
            soundToggle = document.getElementById('sound-toggle');
            soundIcon = soundToggle ? soundToggle.querySelector('.material-symbols-outlined') : null;
        }
        
        if (soundToggle) {
            if (soundEnabled) {
                soundToggle.classList.add('active');
            } else {
                soundToggle.classList.remove('active');
            }
        }
        
        if (soundIcon) {
            soundIcon.textContent = soundEnabled ? 'volume_up' : 'volume_off';
        }
    }

    function toggleSound() {
        soundEnabled = !soundEnabled;
        updateSoundState();
        saveSoundState();
        
        // Placeholder for future sound functionality
        console.log('Sound', soundEnabled ? 'enabled' : 'disabled');
    }

    function saveSoundState() {
        try {
            localStorage.setItem(SOUND_STORAGE_KEY, JSON.stringify({
                enabled: soundEnabled,
                timestamp: Date.now()
            }));
        } catch (e) {
            console.warn('Could not save sound state to localStorage:', e);
        }
    }

    function loadSoundState() {
        try {
            const saved = localStorage.getItem(SOUND_STORAGE_KEY);
            if (saved) {
                const state = JSON.parse(saved);
                soundEnabled = state.enabled;
                return true;
            }
        } catch (e) {
            console.warn('Could not load sound state from localStorage:', e);
        }
        // Default to enabled if no saved state
        soundEnabled = true;
        return false;
    }
    
    function init() {
        // Load saved state
        loadSoundState();
        
        // Set initial active state
        updateSoundState();
        
        soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', toggleSound);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


