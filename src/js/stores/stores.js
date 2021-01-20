import {footer} from '../views/components/Footer.js';
import {filter} from '../views/components/Filter.js';
import {navbar} from '../views/components/Navbar.js';
import {countryOptions} from '../views/components/CountryOptions.js';
import {main} from '../views/components/Main.js';
import {musicCard} from '../views/components/MusicCard.js';
import {animationModal, renderView} from '../views/renderView.js';
import {get, getCountry} from '../api.js';
import {createFragmentList, updateLocalstorage, compareObjects} from '../helpers/helpers.js';
import {modal} from '../views/components/Modal.js';
import {status} from '../actions/actions.js';
import {dispatcher, dispatcherStar} from '../dispatcher/dispatcher.js';

let searchArray = [];
const mainPage = () => {
    status.page = 'home';
    getCountry().done(result => {
        const fragment = $(document.createDocumentFragment());
        $(fragment).append(navbar);
        $(fragment).append(filter);
        $(fragment).append(main);
        $(fragment).append(modal);
        $(fragment).append(footer);
        renderView(fragment);
        if (status.favorites.length) {
            renderView(createFragmentList(status.favorites, musicCard),
                $('.main'));
            searchArray = status.favorites
            searchArray.forEach((el, i) => {
                //contemplar algunas cosillas
                status.favorites.forEach(fav => {
                    if (compareObjects(el, fav)) {
                        $('.starred').eq(i).text('star');
                    }
                })
            })
        }
        $(countryModal).append(createFragmentList(result, countryOptions));
        $('#countryModal option[value = "US"]').attr('selected', 'selected');
    });
};


const search = url => {
    get(url).done(({results}) => {
        searchArray = [...results];
        console.log(searchArray);
        renderView(createFragmentList(results, musicCard), $('.main'));
        searchArray.forEach((el, i) => {
            status.favorites.forEach(fav => {
                if (compareObjects(el, fav)) {
                    $('.starred').eq(i).text('star');
                }
            })
        })
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
    status.favorites.forEach(fav => {
        if (compareObjects(searchArray[positionArray], fav)) {
            $('.modal .starred').text('star');
        }
    });
    animationModal();
};
const hideModal = e => {
    e.preventDefault();
    status.page = 'home';
    animationModal();
    dispatcher(status.page);
};

const starManager = (positionStar, e) => {
    const sameObject = status.favorites.filter(object => {
        return compareObjects(object, searchArray[positionStar])
    });

    if (!sameObject.length) {
        $(e.target).text('star')
        updateLocalstorage(searchArray[positionStar]);
    } else {
        $(e.target).text('star_border')
        status.favorites = status.favorites.filter(object => {
            return !compareObjects(object, searchArray[positionStar])
        })
        updateLocalstorage();
    };
}

export {
    mainPage,
    search,
    showOrHideFilter,
    createModal,
    hideModal,
    starManager,
};
