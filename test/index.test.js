import TinyLoading from '../src/index.js';

describe('TinyLoading', () => {
  let loading;

  beforeEach(() => {
    document.body.innerHTML = '';
    loading = new TinyLoading();
  });

  test('should create loading element', () => {
    loading.show();
    expect(document.querySelector('.tiny-loading-overlay')).toBeTruthy();
  });

  test('should remove loading element', () => {
    loading.show();
    loading.hide();
    expect(document.querySelector('.tiny-loading-overlay')).toBeNull();
  });

  test('should apply custom config', () => {
    const customLoading = new TinyLoading({
      color: '#ff0000',
      size: 'large',
      message: 'Testing...'
    });
    customLoading.show();
    
    const spin = document.querySelector('.tiny-loading-spin');
    expect(spin.style.borderColor).toContain('#ff0000');
    expect(spin.style.width).toBe('60px');
  });

  test('should update config dynamically', () => {
    loading.setConfig({ message: 'Updating...' });
    loading.show();
    expect(document.querySelector('.tiny-loading-message').textContent)
      .toBe('Updating...');
  });
});