import { footer } from '../views/components/Footer.js';
import { filter } from '../views/components/Filter.js';
import { navbar } from '../views/components/Navbar.js';
import { countryOptions } from '../views/components/CountryOptions.js';
import { main } from '../views/components/Main.js';
import { musicCard } from '../views/components/MusicCard.js';
import { animationModal, renderView } from '../views/renderView.js';
import { get, getCountry } from '../api.js';
import { createFragmentList } from '../helpers/helpers.js';
import { artistModal } from '../views/components/ArtistModal.js';
import { videoModal } from '../views/components/VideoModal.js';
import { albumModal } from '../views/components/AlbumModal.js';
import { songModal } from '../views/components/SongModal.js';
import { modal } from '../views/components/Modal.js';
import { status } from '../actions/actions.js';
import { dispatcher } from '../dispatcher/dispatcher.js';

let searchArray = [];
const mainPage = () => {
  getCountry().done(result => {
    const fragment = $(document.createDocumentFragment());
    $(fragment).append(navbar);
    $(fragment).append(filter);
    $(fragment).append(main);
    $(fragment).append(modal);
    $(fragment).append(footer);
    renderView(fragment);
    $(countryModal).append(createFragmentList(result, countryOptions));
    $('#countryModal option[value = "US"]').attr('selected', 'selected');
  });
};

const search = url => {
  get(url).done(({ results }) => {
    searchArray = [...results];
    console.log(searchArray);
    renderView(createFragmentList(results, musicCard), $('.main'));
  });
};

const showOrHideFilter = e => {
  e.preventDefault();
  $('.filter__drop-down').toggle('none');
};

const createModal = (positionArray, modalType) => {
  renderView(
    createFragmentList([searchArray[positionArray]], modalType),
    $('.modal'),
  );
  animationModal();
};
const hideModal = e => {
  e.preventDefault();
  status.page = 'home';
  animationModal();
  dispatcher(status.page);
};

const saveFavorite = () => {
  //updateLocalstorage(searchArray[status.positionArray]);
};

export {
  mainPage,
  search,
  showOrHideFilter,
  createModal,
  hideModal,
  saveFavorite,
};
