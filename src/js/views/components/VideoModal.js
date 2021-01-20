import {millisToMinutesAndSeconds} from '../../helpers/helpers.js'

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
    currency
}) => {
    const date = new Date(releaseDate).toLocaleDateString()
    const trackTime = millisToMinutesAndSeconds(trackTimeMillis)
    const template = `
  <section class="modal-type">
    <section class="modal-type__buttons">
        <button>play</button>
        <button>info</button>
    </section>
    <section class="modal-type__player video-player">
        <video name="media" controls>
          <source src="${previewUrl}" type="audio/x-m4a">
        </video>
    </section>
    <section class="modal-type__content">
      <section class="modal-type-content__cover">
          <h2>${trackName}
    <span class="material-icons starred">
        star_border
    </span>
    </h2>
    <br>
          <h3>${artistName}</h3>
    <br>
      </section>
      <section class="modal-type-content__info big-font">
        <img src="${artworkUrl100}" alt="${trackName}">
        <p>Name of the song: <strong>${trackName}</strong></p>
        <p>Artist name: <strong>${artistName}</strong></p>
        <p>Song Price: <strong>${trackPrice} ${currency}</strong></p>
        <p>Song length: <strong>${trackTime}</strong></p>
        <p>Release date: <strong>${date}</strong></p>
        <p>Musical genre: <strong>${primaryGenreName}</strong></p>
     <a href="${trackViewUrl}" target="_blank">Song Link in iTunes</a>
      </section>
    </section>
  </section>
  `;
    return template;
};

export {musicVideo};
