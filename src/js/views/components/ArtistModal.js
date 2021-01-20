const artist = ({
    artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
    artistName,
    primaryGenreName,
    artistLinkUrl,
}) => {
    const template = `
  <section class="modal-type">
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
          <img src="${artworkUrl100}" alt="${artistName}">
          <h2>${artistName}</h2>
        <p>Musical genre: ${primaryGenreName}</p>
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
