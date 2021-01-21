import { footer } from '../views/components/Footer.js';
import { filter } from '../views/components/Filter.js';
import { navbar } from '../views/components/Navbar.js';
import { countryOptions } from '../views/components/CountryOptions.js';
import { main } from '../views/components/Main.js';
import { musicCard } from '../views/components/MusicCard.js';
import { animationModal, renderView } from '../views/renderView.js';
import { get, getCountry } from '../api.js';
import {
  createFragmentList,
  updateLocalstorage,
  compareObjects,
  printStar,
} from '../helpers/helpers.js';
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
    if (status.favorites.length) {
      renderView(createFragmentList(status.favorites, musicCard), $('.main'));
      searchArray = status.favorites;
      printStar(searchArray);
    }
    $(countryModal).append(createFragmentList(result, countryOptions));
    $('#countryModal option[value = "US"]').attr('selected', 'selected');
  });
};

const search = url => {
  if ($('.main').is(':hidden')) {
    animationModal();
  }
  get(url).done(({ results }) => {
    searchArray = [...results];
    renderView(createFragmentList(results, musicCard), $('.main'));
    printStar(searchArray);
  });
};

const showOrHideFilter = e => {
  e.preventDefault();
  $('.filter__drop-down').toggle('none');
};

const createModal = (positionArray, modalType) => {
  $('#showOrHideModal').text('arrow_circle_down');
  renderView(
    createFragmentList([searchArray[positionArray]], modalType),
    $('.modal'),
  );
  status.favorites.forEach(fav => {
    if (compareObjects(searchArray[positionArray], fav)) {
      $('.modal .starred').text('star');
    }
  });
  animationModal();
};
const hideModal = e => {
  $('#showOrHideModal').text('arrow_circle_up');
  e.preventDefault();
  status.page = 'home';
  animationModal();
  dispatcher(status.page);
};

const starManager = (positionStar, e) => {
  const sameObject = status.favorites.filter(object => {
    return compareObjects(object, searchArray[positionStar]);
  });

  if (!sameObject.length) {
    $(e.target).text('star');
    updateLocalstorage(searchArray[positionStar]);
  } else {
    $(e.target).text('star_border');
    status.favorites = status.favorites.filter(object => {
      return !compareObjects(object, searchArray[positionStar]);
    });
    updateLocalstorage();
  }
  printStar(searchArray);
};

const changeInfoOrFrontFace = e => {
  e.preventDefault();
  $(e.target).text() === 'cover'
    ? $(e.target).text('info')
    : $(e.target).text('cover');
  animationModal('.modal-type-content__info', '.modal-type-content__cover');
};

const playOrPause = e => {
  e.preventDefault();
  document.getElementById('mediaPlayer').paused
    ? $('#mediaPlayer').trigger('play')
    : $('#mediaPlayer').trigger('pause');
};

const checkModal = e => {
  e.preventDefault();
  if ($('.modal').children().length) {
    $('#showOrHideModal').text('arrow_circle_down');
    status.page = $('.modal-type').data('modaltype');
    animationModal();
    dispatcher(status.page);
  } else {
    $('html, body').animate({ scrollTop: 0 }, 800);
  }
};
export {
  mainPage,
  search,
  showOrHideFilter,
  createModal,
  hideModal,
  starManager,
  changeInfoOrFrontFace,
  playOrPause,
  checkModal,
};
