function createMatrixEffect() {
    const matrix = document.getElementById('matrix');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        setTimeout(() => {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = i * 20 + 'px';
            char.style.animationDelay = Math.random() * 5 + 's';
            char.style.animationDuration = (Math.random() * 10 + 5) + 's';
            matrix.appendChild(char);
            
            setTimeout(() => {
                if (char.parentNode) {
                    char.parentNode.removeChild(char);
                }
            }, 15000);
        }, Math.random() * 3000);
    }
}

createMatrixEffect();
setInterval(createMatrixEffect, 10000);

function createGlitchEffect() {
    const glitchTexts = [
        'エラー', 'ERROR', '警告', 'BREACH', 'システム異常', '0x4F4', 
        'ウイルス', 'CORRUPT', '危険', 'FAIL', 'バグ', '404', 
        'ハッキング', 'DENIED', '不正', 'NULL', 'クラッシュ', 'VOID'
    ];
    
    if (Math.random() < 0.3) {
        const glitch = document.createElement('div');
        glitch.className = 'glitch-text';
        glitch.textContent = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
        glitch.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        glitch.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        
        document.body.appendChild(glitch);
        
        setTimeout(() => {
            if (glitch.parentNode) {
                glitch.parentNode.removeChild(glitch);
            }
        }, 500);
    }
}

setInterval(createGlitchEffect, 2000 + Math.random() * 3000);

function toggleCommissions() {
    const modal = document.getElementById('commissionsModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCommissions() {
    const modal = document.getElementById('commissionsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('commissionsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCommissions();
    }
});

function openImageZoom(img) {
    const zoomOverlay = document.getElementById('imageZoom');
    const zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.src = img.src;
    zoomedImage.alt = img.alt;
    zoomOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeImageZoom() {
    const zoomOverlay = document.getElementById('imageZoom');
    zoomOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('imageZoom').addEventListener('click', function(e) {
    if (e.target === this) {
        closeImageZoom();
    }
});

createGlitchEffect();
setInterval(createGlitchEffect, 3000 + Math.random() * 2000);