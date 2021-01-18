const dispatcher = status => {
  $(document).off().find('*').off();
  switch (
    status
    /* case 'home':
      $('.post-item__content h2').on('click', openPostModal);
      $('.nav-page__button').on('click', changePostlist);
      $('.bx-edit').on('click', openEditPostModal);
      $('.bxs-trash').on('click', openDeletePostModal);
      break;
    case 'postModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#comment-button').on('click', showPostComments);
      break;
    case 'editPostModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#save-button').on('click', savePostChanges);
    case 'deletePostModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#yes-button').on('click', deletePost);
      $('#no-button').on('click', closePostModal); */
  ) {
  }
};

export { dispatcher };
