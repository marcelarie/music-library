
const songModal = ({
    artworkUrl100 =
    'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
    collectionPrice,
    releaseDate,
    trackTimeMillis,
    artistName,
    trackName,
    collectionName,
    primaryGenreName,
    previewUrl,
    trackViewUrl,
}) => {
    const template = `
  <section class="song-modal">
    <section class="song-modal__buttons">
        <button>play</button>
        <button>info</button>
    </section>
    <section class="song-modal__content">
      <section class="song-content__cover">
          <img src="${artworkUrl100}" alt="${trackName}">
          <h2>${trackName}</h2>
          <h3>${artistName}</h3>
      </section>
      <section class="song-content__info">
        <p>Name of the song: ${trackName}</p>
        <p>Artist name: ${artistName}</p>
        <p>Album name: ${collectionName}</p>
        <p>Song Price: ${collectionPrice}</p>
        <p>Song length: ${trackTimeMillis}</p>
        <p>Release date: ${releaseDate}</p>
        <p>Musical genre: ${primaryGenreName}</p>
        <p>Song Link in iTunes: ${trackViewUrl}</p>
      </section>
    </section>
    <section class="song-modal__player">
        <video name="media" controls>
          <source src="${previewUrl}" type="audio/x-m4a">
        </video>
        <button>⭐</button>
    </section>
  </section>
  `;
    return template;
};

export {songModal};
