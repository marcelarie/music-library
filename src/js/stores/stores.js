import {footer} from '../views/components/Footer.js';
import {filter} from '../views/components/Filter.js';
import {navbar} from '../views/components/Navbar.js';
import {countryOptions} from '../views/components/CountryOptions.js';
import {main} from '../views/components/Main.js';
import {musicCard} from '../views/components/MusicCard.js';
import {renderView} from '../views/renderView.js';
import {get, getCountry} from '../api.js';
import {createFragmentList} from '../helpers/helpers.js';
import {songModal} from '../views/components/SongModal.js';
import {modal} from '../views/components/Modal.js';
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
    get(url).done(({results}) => {
        searchArray = [...results];
        console.log(searchArray);
        renderView(createFragmentList(results, musicCard), $('.main'));
    });
};

const showOrHideFilter = e => {
    e.preventDefault();
    $('.filter__drop-down').toggle('none');
};

const createSongModal = positionArray => {
    renderView(
        createFragmentList([searchArray[positionArray]], songModal),
        $('.modal'),
    );
};
const createArtistModal = positionArray => {
    renderView(
        createFragmentList([searchArray[positionArray]], artistModal),
        $('.modal'),
    );
};
const createAlbumModal = positionArray => {
    renderView(
        createFragmentList([searchArray[positionArray]], albumModal),
        $('.modal'),
    );
};
const createVideoModal = positionArray => {
    renderView(
        createFragmentList([searchArray[positionArray]], videoModal),
        $('.modal'),
    );
};

export {mainPage, search, showOrHideFilter, createSongModal};
