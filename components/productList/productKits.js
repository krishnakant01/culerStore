const productKitsTemplate = document.createElement('template');

productKitsTemplate.innerHTML = `

<div class="grid-4-column-layout margin-2-auto">

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/men-home-kit-full.png" alt="product-image">
                        <span class="text-badge badge-primary">New</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Men Home Kit</p>
                    <p class="product-price">₹ 7500</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/men-away-kit-full.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Men Away Kit</p>
                    <p class="product-price">₹ 6500</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/men-third-kit-full.png" alt="product-image">
                        <span class="text-badge badge-primary">New</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Men Third Kit</p>
                    <p class="product-price">₹ 5000</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-ui.netlify.app/images/men-home-kit-jersey.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Men Home Kit Jersey</p>
                    <p class="product-price">₹ 4000</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-ui.netlify.app/images/men-away-kit-jersey.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Men Away Kit Jersey</p>
                    <p class="product-price">₹ 4500</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-store.netlify.app/images/men-third-kit-jersey.png" alt="product-image">

                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Men Third Kit Jersey</p>
                    <p class="product-price">₹ 6000</p>
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

                <div class=" card product-card text-badge-container">
                    <div class="product-image badge-container">
                        <img src="https://culer-ui.netlify.app/images/gk-adidas-predator-pro.png" alt="product-image">
                        <span class="text-badge badge-primary">New</span>
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                    </div>
                    <p class="product-name">Adidas Predator Pro</p>
                    <p class="product-price">₹ 9600</p>
                    <button class=" btn btn-contained-primary btn-add-to-cart">
                        <span><i class="fas fa-shopping-cart"> </i>
                            Add to Cart</span>
                    </button>
                </div>

            </div>

`;

document.querySelector("#productKits").appendChild(productKitsTemplate.content);