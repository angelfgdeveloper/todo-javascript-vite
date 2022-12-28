import html from './app.html?raw'

/**
 * 
 * @param {String} elementId
 */
export const App = (elementId) => {

  // Cuando la funcion App() se llama
  (() => {
    const app = document.createElement('div');
    // app.innerHTML = '<h1>Hola Mundo</h1>';
    app.innerHTML = html;
    document.querySelector(elementId).append(app); // insertar el app

  })();

}