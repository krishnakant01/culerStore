const homeBannerTemplate = document.createElement('template');

homeBannerTemplate.innerHTML = `

<div class="overlay-image-container">
    <img class="image-responsive" src="images/retro.png" alt="retro kits">
    <div class="overlay-banner-text">
      <p class="banner-img-description">BACK TO RETRO</p>
      <button class="btn btn-contained-primary">SHOP NOW</button>
    </div>
  </div>

  <div class="banner-cards">

    <span class="material-icons btn-navigate">navigate_before</span>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/retro-dejong-home.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">VINTAGE 1899 COLLECTION </p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/retro-dejong.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">VINTAGE 1974-75 COLLECTION</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/retro-pedri.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">VINTAGE CAPTAIN'S SHIRT</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/retro-garcia.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">VINTAGE 1980-81 COLLECTION</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <span class="material-icons btn-navigate">navigate_next</span>
  </div>

  <div class="spacer-div light-gradient-card"></div>

  <div class="overlay-image-container">
    <img class="image-responsive" src="images/barca-kits.png" alt="barca kits">
    <div class="overlay-banner-text">
      <p class="banner-img-description">BARÇA KITS</p>
      <button class="btn btn-contained-primary">SHOP NOW</button>
    </div>
  </div>

  <div class="banner-cards">

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/fcb-third-kit.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description"> 2021-22 THIRD KIT COLLECTION </p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/trending-home-kit.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">2021-22 HOME KIT COLLECTION</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/trending-men-away-kit.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">2021-22 AWAY KIT COLLECTION</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image image-responsive" src="/images/fourth-kit.png" alt="kits">
      <div class="overlay-text">
        <p class="overlay-img-description">2021-22 FOURTH KIT COLLECTION</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

  </div>

  <div class="spacer-div light-gradient-card"></div>

  <div class="overlay-image-container">
    <img class="image-responsive" src="images/football-boots-banner.png" alt="adidas shoes">
    <div class="overlay-banner-text">
      <p class="banner-img-description">SHOES</p>
      <button class="btn btn-contained-primary">SHOP NOW</button>
    </div>
  </div>

  <div class="banner-cards">

    <span class="material-icons btn-navigate">navigate_before</span>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/adidas-nemeziz-0.3-fg.png" alt="shoes">
      <div class="overlay-text">
        <p class="overlay-img-description">ADIDAS NEMEZIZ</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/adidas-predator-freak-fg.png" alt="shoes">
      <div class="overlay-text">
        <p class="overlay-img-description">ADIDAS PREDATOR</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/adidas-x-19.1-sg.png" alt="shoes">
      <div class="overlay-text">
        <p class="overlay-img-description">ADIDAS X</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <div class="overlay-card dark-gradient-card">
      <img class="overlay-card-image" src="/images/adidas-x-speedflow.png" alt="shoes">
      <div class="overlay-text">
        <p class="overlay-img-description">ADIDAS SPEEDFLOW</p>
        <button class="btn btn-contained-primary">SHOP NOW</button>
      </div>
    </div>

    <span class="material-icons btn-navigate">navigate_next</span>
  </div>

  <div class="spacer-div light-gradient-card"></div>

`;

document.querySelector("#homeBanner").appendChild(homeBannerTemplate.content);