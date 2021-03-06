import {status} from '../actions/actions.js';

const createFragmentList = (data, component) => {
    const fragment = $(document.createDocumentFragment());
    data.forEach(element => {
        $(fragment).append(component(element));
    });
    return fragment;
};

const createUrl = (input, typeSearch) => {
    let url = `term=${input}&entity=${typeSearch}`;
    if ($('#countryModalCheckBox').is(':checked')) {
        url = `${url}&country=${$('#countryModal').val()}`;
    }
    if ($('#limitModalCheckBox').is(':checked')) {
        url = `${url}&limit=${$('#limitModal').val()}`;
    }
    if ($('#explicitModal').is(':checked')) {
        url = `${url}&explicit=YES`;
    } else {
        url = `${url}&explicit=NO`;
    }
    return url;
};

const recoverFavorites = () => {
    if (localStorage.getItem('favorites'))
        status.favorites = JSON.parse(localStorage.getItem('favorites'));
};

const updateLocalstorage = element => {
    if (element) {
        status.favorites.push(element);
    }
    localStorage.setItem('favorites', JSON.stringify(status.favorites));
};

const compareObjects = (original, current) => {
    if (JSON.stringify(original) === JSON.stringify(current)) {
        return true;
    } else {
        return false;
    }
};

const printStar = searchArray => {
    searchArray.forEach((el, i) => {
        status.favorites.forEach(fav => {
            if (compareObjects(el, fav)) {
                $('.starred').eq(i).text('star');
            }
        });
    });
};

const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};

export {
    createFragmentList,
    createUrl,
    recoverFavorites,
    updateLocalstorage,
    compareObjects,
    printStar,
    millisToMinutesAndSeconds
};
