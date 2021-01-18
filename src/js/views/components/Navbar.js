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
            <input type="checkbox" name="song">
            <label for="song">Song</label>
        </section>
        <section class="options__item">
            <input type="checkbox" name="artist">
            <label for="artist">Artist</label>
        </section>
        <section class="options__item">
            <input type="checkbox" name="album">
            <label for="album">Album</label>
        </section>
        <section class="options__item">
            <input type="checkbox" name="musicVideo">
            <label for="musicVideo">Music Video</label>
        </section>
    </section>
  `;
  return template;
};

export { navbar };
