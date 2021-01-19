
const albumModal = ({
    artworkUrl100 =
    'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
    artistName,
    primaryGenreName,
    artistLinkUrl
}) => {
    const template = `
  <section class="song-modal">
    <section class="song-modal__content">
      <section class="song-content__cover">
          <img src="${artworkUrl100}" alt="${artistName}">
          <h2>${artistName}</h2>
        <p>Musical genre: ${primaryGenreName}</p>
      </section>
    </section>
    <section class="song-modal__player">
    <form action="${artistLinkUrl}">
        <button type="submit">iTunes link</button>
    </form>
        <button>⭐</button>
    </section>
  </section>
  `;
    return template;
};

export {artistModal};
