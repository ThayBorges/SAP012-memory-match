import App from './App.js';
import { exibeCard } from './App.js';


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

  it('espera-se que a função exibeCard retorne o HTML da carta', () => {
    const card = exibeCard('url');
    expect(card instanceof HTMLDivElement).toBe(true);
  })
});




