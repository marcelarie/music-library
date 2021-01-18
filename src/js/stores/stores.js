import { footer } from '../views/components/Footer.js';
import { navbar } from '../views/components/Navbar.js';
import { renderView } from '../views/renderView.js';

const mainPage = () => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append(navbar);
  $(fragment).append(footer);
  renderView(fragment);
};

export { mainPage };
