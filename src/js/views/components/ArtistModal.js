const artist = ({
    artworkUrl100 = 'https://i.ibb.co/PGwBzx7/Untitled.png',
    artistName,
    primaryGenreName,
    artistLinkUrl,
}) => {
    const template = `
  <section class="modal-type">
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
        <br>
          <img src="${artworkUrl100}" alt="${artistName}">
        <br>
          <h2>${artistName}</h2>
        <br>
      <section class="modal-type-content__info">
        <p>Musical genre: <strong>${primaryGenreName}</strong></p>
      </section>
      </section>
    </section>
    <section class="modal-type__player">
    <form target="_blank" action="${artistLinkUrl}">
        <button type="submit">iTunes link</button>
    </form>
    <span class="material-icons starred">
        star_border
    </span>
    </section>
  </section>
  `;
    return template;
};

export {artist};
