const musicVideo = ({
    artworkUrl100 = 'https://findicons.com/files/icons/2770/ios_7_icons/100/music.png',
    trackName,
    artistName,
    trackPrice,
    releaseDate,
    trackTimeMillis,
    primaryGenreName,
    previewUrl,
    trackViewUrl,
}) => {
    const template = `
  <section class="modal-type">
    <section class="modal-type__buttons">
        <button>play</button>
        <button>info</button>
    </section>
    <section class="modal-type__player">
        <video name="media" controls>
          <source src="${previewUrl}" type="audio/x-m4a">
        </video>
    </section>
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
          <h2>${trackName}</h2>
          <h3>${artistName}</h3>
        <button id="starred">⭐</button>
      </section>
      <section class="modal-type-content__info">
        <img src="${artworkUrl100}" alt="${trackName}">
        <p>Name of the song: ${trackName}</p>
        <p>Artist name: ${artistName}</p>
        <p>Song Price: ${trackPrice}</p>
        <p>Song length: ${trackTimeMillis}</p>
        <p>Release date: ${releaseDate}</p>
        <p>Musical genre: ${primaryGenreName}</p>
        <p>Song Link in iTunes: ${trackViewUrl}</p>
      </section>
    </section>
  </section>
  `;
    return template;
};

export {musicVideo};
