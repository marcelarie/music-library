const navbar = () => {
    const template = `
  <header class="header">
    <nav>
      <h1>Music Library</h1>
      <input type="text">
    </nav>
  </header>
  <section class="options">
        <section class="options__item">
            <label for="checkBoxSong"> 
                <input id="checkBoxSong" type="radio" name="checkbox-search" value="song" checked> 
            Song</label>
        </section>
        <section class="options__item">
            <label for="checkBoxArtist">
                <input id="checkBoxArtist" type="radio" name="checkbox-search" value="artist">
            Artist</label>
        </section>
        <section class="options__item">
            <label for="checkBoxAlbum">
                <input id="checkBoxAlbum" type="radio" name="checkbox-search" value="album">
            Album</label>
        </section>
        <section class="options__item">
            <label for="checkBoxMusicVideo">
                <input id="checkBoxMusicVideo" type="radio" name="checkbox-search" value="musicVideo">
            Music Video</label>
        </section>
    </section>
  `;
    return template;
};

export {navbar};
