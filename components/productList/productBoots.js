const productBootsTemplate = document.createElement('template');

productBootsTemplate.innerHTML = `

<div class="grid-4-column-layout margin-2-auto">

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="/images/adidas-nemeziz-0.3-fg.png" alt="product-image">
                        <span class="text-badge badge-primary">New</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Adidas Nemeziz 0.3</p>
                    <p class="product-price">₹ 7500</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="/images/adidas-predator-freak-fg.png" alt="product-image">
                        <span class="text-badge badge-secondary padding-05-1">35% off</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Adidas Predator Freak</p>
                    <p class="product-price">₹ 6500 <span class="font-weight-400 text-strike-through red-text">₹10000</span></p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="/images/adidas-x-19.1-sg.png" alt="product-image">
                        <span class="text-badge badge-primary">New</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Adidas X Speedflow</p>
                    <p class="product-price">₹ 5000</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="/images/adidas-x-speedflow.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Adidas X Speedflow</p>
                    <p class="product-price">₹ 6000</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/nike-phantom-gt-II-pro-fg.png" alt="product-image">
                        <span class="text-badge badge-primary">New</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Nike Phantom Pro</p>
                    <p class="product-price">₹ 9600</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/puma-ultra-sl-tech-origin-gf.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Puma Ultra Origin</p>
                    <p class="product-price">₹ 4000</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/puma-future-z-1.2-mg.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Puma Future Z</p>
                    <p class="product-price">₹ 4500</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/nike-phantom-gt-II-elite-fg.png"
                            alt="product-image">
                        <span class="text-badge badge-secondary padding-05-1">25% off</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Nike Phantom Elite</p>
                    <p class="product-price">₹ 7500 <span class="font-weight-400 text-strike-through red-text">₹10000</span></p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

            </div>

`;

document.querySelector("#productBoots").appendChild(productBootsTemplate.content);