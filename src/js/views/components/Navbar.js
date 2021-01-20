const navbar = () => {
    const template = `
  <header class="header">
    <nav>
      <h1 class="no-select">Libefy</h1>
      <input type="text">
    </nav>
  </header>
  <section class=" no-select options">
        <section class="options__items">
            <input class="change-on-check" id="checkBoxSong" type="radio" name="checkbox-search" value="song" checked>
            <label for="checkBoxSong">Song</label>
        </section>
        <section class="options__items">
            <input class="change-on-check" id="checkBoxArtist" type="radio" name="checkbox-search" value="musicArtist">
            <label for="checkBoxArtist">Artist</label>
        </section>
        <section class="options__items">
            <input class="change-on-check" id="checkBoxAlbum" type="radio" name="checkbox-search" value="album">
            <label for="checkBoxAlbum">Album</label>
        </section>
        <section class="options__items">
            <input class="change-on-check" id="checkBoxMusicVideo" type="radio" name="checkbox-search" value="musicVideo">
            <label for="checkBoxMusicVideo">Music Video</label>
        </section>
    </section>
  `;
    return template;
};

export {navbar};
