window.onload = function() {
    if(!localStorage.loaded) {
        localStorage.setItem('loaded', 'yes')
        window.location.reload();
    }
} 