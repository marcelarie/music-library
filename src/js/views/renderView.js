import { dispatcher } from '../dispatcher/dispatcher.js';
import { status } from '../actions/actions.js';

const renderView = (fragment, element = '#root') => {
  $(element).html(fragment);
  dispatcher(status.page);
};

const animationModal = () => {
  $('.main').toggle('none');
  $('.modal').toggle('none');
};

export { renderView, animationModal };
