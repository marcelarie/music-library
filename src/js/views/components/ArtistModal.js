const artist = ({
    artworkUrl100 = 'https://i.ibb.co/PGwBzx7/Untitled.png',
    artistName,
    primaryGenreName,
    artistLinkUrl,
}) => {
    const template = `
  <section class="modal-type" data-modalType="song">
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
        <br>
          <img src="${artworkUrl100}" alt="${artistName}">
          <h2>${artistName}
    <span class="material-icons starred">
        star_border
    </span>
    </h2>
      <section class="modal-type-content__info big-font">
        <p>Musical genre: <strong>${primaryGenreName}</strong></p>
     <a class="smaller-font" href="${artistLinkUrl}" target="_blank">Song Link in iTunes</a>
      </section>
      </section>
    </section>
  </section>
  `;
    return template;
};

export {artist};
