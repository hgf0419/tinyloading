const defaultConfig = {
    color: '#3498db',
    size: 'medium', // small | medium | large
    type: 'spin',   // spin | pulse
    fullScreen: true,
    zIndex: 9999,
    message: ''
};

const sizes = {
    small: { width: 24, border: 3 },
    medium: { width: 40, border: 4 },
    large: { width: 60, border: 6 }
};

class TinyLoading {
    constructor(config = {}) {
        this.config = { ...defaultConfig, ...config };
        this.loadingElement = null;
        this.styleElement = null;
        this.initStyles();
    }

    initStyles() {
        if (document.getElementById('tiny-loading-styles')) return;

        this.styleElement = document.createElement('style');
        this.styleElement.id = 'tiny-loading-styles';
        this.styleElement.textContent = `
        @keyframes spin { 
          100% { transform: rotate(360deg); } 
        }
        @keyframes pulse {
          0%, 100% { transform: scale(0.5); opacity: 0.5 }
          50% { transform: scale(1); opacity: 1 }
        }
        .tiny-loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.8);
        }
        .tiny-loading-container {
          text-align: center;
        }
        .tiny-loading-spin {
          animation: spin 1s linear infinite;
          border-radius: 50%;
          border-style: solid;
        }
        .tiny-loading-pulse {
          animation: pulse 1.5s ease-in-out infinite;
          background-color: currentColor;
          border-radius: 50%;
        }
        .tiny-loading-message {
          margin-top: 12px;
          color: currentColor;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }
      `;
        document.head.appendChild(this.styleElement);
    }

    createLoader() {
        const { color, size, type, message, fullScreen, zIndex } = this.config;
        const { width, border } = sizes[size];

        const overlay = document.createElement('div');
        overlay.className = fullScreen ? 'tiny-loading-overlay' : '';
        if (fullScreen) overlay.style.zIndex = zIndex;

        const container = document.createElement('div');
        container.className = 'tiny-loading-container';

        const loader = document.createElement('div');
        loader.className = `tiny-loading-${type}`;
        loader.style.width = `${width}px`;
        loader.style.height = `${width}px`;
        loader.style.color = color;

        if (type === 'spin') {
            loader.style.borderWidth = `${border}px`;
            loader.style.borderColor = `${color} transparent transparent transparent`;
        }

        container.appendChild(loader);

        if (message) {
            const messageEl = document.createElement('div');
            messageEl.className = 'tiny-loading-message';
            messageEl.textContent = message;
            container.appendChild(messageEl);
        }

        fullScreen ? overlay.appendChild(container) : container;
        return fullScreen ? overlay : container;
    }

    show(container) {
        if (this.loadingElement) return;

        this.loadingElement = this.createLoader();
        const target = container || document.body;
        target.appendChild(this.loadingElement);
    }

    hide() {
        if (!this.loadingElement) return;

        this.loadingElement.parentNode.removeChild(this.loadingElement);
        this.loadingElement = null;
    }

    setConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
}

export default TinyLoading;