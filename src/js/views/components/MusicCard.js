const musicCard = ({
    artworkUrl100 =
    'https://i.ibb.co/PGwBzx7/Untitled.png',
    artistName,
    trackName,
    collectionName,
    primaryGenreName,
    wrapperType,
    kind
}) => {
    const title = collectionName ? collectionName : primaryGenreName;
    const type = (kind === 'music-video') ? 'musicVideo' : kind;
    const template = `
  <section>
    <button data-wrapperType='${wrapperType === 'track' ? type : wrapperType}'
    class="music-card-item">
          <section>
              <img class="clickCardItem" src="${artworkUrl100}" 
    alt="${trackName}">
          </section>
          <section>
              <span class="material-icons starred"> 
                  star_border 
              </span>
              <h2 class="clickCardItem">${trackName ? trackName : title}</h2>
              <h3 class="clickCardItem">${artistName}</h3>
          </section>
    </button>
  </section>
  `;
    return template;
};

export {musicCard};
