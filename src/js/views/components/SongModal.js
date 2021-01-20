const song = ({
    artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
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
  <section class="modal-type">
    <section class="modal-type__buttons">
        <button id="songModalPlay">play</button>
        <button id="songModalInfo">info</button>
    </section>
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
          <img src="${artworkUrl100}" alt="${trackName}">
          <h2>${trackName}</h2>
          <h3>${artistName}</h3>
      </section>
      <section class="modal-type-content__info">
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
    <section class="modal-type__player">
        <audio name="media" controls>
          <source src="${previewUrl}" type="audio/x-m4a">
        </audio>
        <button id="starred">⭐</button>
    </section>
  </section>
  `;
    return template;
};

export {song};
