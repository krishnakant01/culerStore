const wishlistTemplate = document.createElement('template');

wishlistTemplate.innerHTML = `

<div class="display-flex">
        <p class="bold-font font-size-125">My Wishlist <span class="font-weight-400">(5) Item(s)</span></p>
    </div>
    <div class="grid-4-column-layout margin-2-auto padding-1-1">

        <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
                <img src="https://culer-store.netlify.app/images/men-home-kit-full.png" alt="product-image">
                <span class="text-badge badge-primary">New</span>
                <button class="btn btn-wishlist"><span class="material-icons red-text">
                        favorite
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

                <button class="btn btn-wishlist"><span class="material-icons red-text">
                        favorite
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
                <button class="btn btn-wishlist"><span class="material-icons red-text">
                        favorite
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
                <img src="https://culer-store.netlify.app/images/nike-phantom-gt-II-elite-fg.png"
                    alt="product-image">
                <span class="text-badge badge-secondary padding-05-1">25% off</span>
                <button class="btn btn-wishlist"><span class="material-icons red-text">
                        favorite
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
                <img src="/images/adidas-nemeziz-0.3-fg.png" alt="product-image">
                <span class="text-badge badge-primary">New</span>
                <button class="btn btn-wishlist"><span class="material-icons red-text">
                        favorite
                    </span></button>
            </div>
            <p class="product-name">Adidas Nemeziz 0.3</p>
            <p class="product-price">₹ 7500</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
                <span><i class="fas fa-shopping-cart"> </i>
                    Add to Cart</span>
            </button>
        </div>
    </div>


`;

document.querySelector("#wishlist").appendChild(wishlistTemplate.content);