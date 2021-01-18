import {footer} from '../views/components/Footer.js';
import {navbar} from '../views/components/Navbar.js';
import {main} from '../views/components/Main.js';
import {musicCard} from '../views/components/MusicCard.js'
import {renderView} from '../views/renderView.js';
import {get} from '../api.js'

const mainPage = () => {
    const fragment = $(document.createDocumentFragment());
    $(fragment).append(navbar);
    $(fragment).append(main);
    $(fragment).append(footer);
    renderView(fragment);
};

const search = () => {
    const option = $('.options input:checked').val()
    const value = $('.header input').val();
    get(value, option).done(({results}) => {
        console.log(results)
        renderView(createFragmentList(results, musicCard), $('.main'));
    })
}

const createFragmentList = (data, component) => {
    const fragment = $(document.createDocumentFragment());
    data.forEach(element => {
        $(fragment).append(component(element));
    });
    return fragment;
};



export {mainPage, search};
