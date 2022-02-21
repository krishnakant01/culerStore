const cartTemplate = document.createElement('template');

cartTemplate.innerHTML = `

    <div class="display-flex">
    <p class="bold-font font-size-125">My Cart <span class="font-weight-400">(3) Item(s)</span></p>
</div>

<div class="grid-2-column-layout padding-075-1">

    <div class="cart-products-container padding-075-1 display-flex-column">

        <div class="my-cart-product-card">
            <div class="my-cart-product-image-div">
                <img src="/images/adidas-x-19.1-sg.png" alt="product-image">
            </div>
            <div class="my-cart-product-description-div">
                <p class="product-name">Adidas X 19.1 SG</p>
                <h4 class="product-price">₹ 4000</h4>
                <label for="size">Size:</label>
                <select name="size" id="size">
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <div class="quantity-btns">
                    <button class="horizontal-card-btn">-</button>
                    <span class="quantity">1</span>
                    <button class="horizontal-card-btn">+</button>
                </div>
            </div>
            <div class="product-card-btns-div">
                <button id="delete-btn"><span class="material-icons">delete</span></button><br>
                <button class="btn btn-text-secondary wishlit-btn">MOVE TO WISHLIST</button>
            </div>
        </div>

        <div class="my-cart-product-card">
            <div class="my-cart-product-image-div">
                <img src="/images/adidas-nemeziz-0.3-fg.png" alt="product-image">
            </div>
            <div class="my-cart-product-description-div">
                <p class="product-name">Adidas Nemeziz 0.3</p>
                <h4 class="product-price">₹ 7000</h4>
                <label for="size">Size:</label>
                <select name="size" id="size">
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <div class="quantity-btns">
                    <button class="horizontal-card-btn">-</button>
                    <span class="quantity">1</span>
                    <button class="horizontal-card-btn">+</button>
                </div>
            </div>
            <div class="product-card-btns-div">
                <button id="delete-btn"><span class="material-icons">delete</span></button><br>
                <button class="btn btn-text-secondary wishlit-btn">MOVE TO WISHLIST</button>
            </div>
        </div>

        <div class="my-cart-product-card">
            <div class="my-cart-product-image-div">
                <img src="https://culer-ui.netlify.app/images/men-away-kit-jersey.png" alt="">
            </div>
            <div class="my-cart-product-description-div">
                <p class="product-name">Men Home Kit Jersey</p>
                <h4 class="product-price">Rs. 4000</h4>
                <label for="size">Size:</label>
                <select name="size" id="size">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="x-large">XL</option>
                </select>
                <div class="quantity-btns">
                    <button class="horizontal-card-btn">-</button>
                    <span class="quantity">1</span>
                    <button class="horizontal-card-btn">+</button>
                </div>
            </div>
            <div class="product-card-btns-div">
                <button id="delete-btn"><span class="material-icons">delete</span></button><br>
                <button class="btn btn-text-secondary wishlit-btn">MOVE TO WISHLIST</button>
            </div>
        </div>

    </div>

    <div class="bill-container padding-075-1 display-flex-column">

        <div class="address-container box-shadow padding-1-1">

            <button class="btn btn-icon-primary"><span><i class="fas fa-plus"></i> Add Delivery Address</span>
            </button>

        </div>

        <div class="box-shadow padding-075-1 margin-1-0">
        
            <div class="filter-titles">
                <p class="gray-text bold-font">PRICE DETAILS</p>
            </div>

            <div class="divider"></div>

            <ul class="filter-section padding-0-0 margin-0-0 list-style-none">

                <li class="display-flex space-between">
                    <p class="font-size-09 margin-0-0">Total MRP</p>
                    <p class="font-size-09 margin-0-0">₹ 15000</p>
                </li>

                <li class="display-flex space-between">
                    <p class="font-size-09 margin-0-0">Discount on MRP</p>
                    <p class="font-size-09 margin-0-0 green-text">₹ 800</p>
                </li>

                <li class="display-flex space-between">
                    <p class="font-size-09 margin-0-0">Delivery Charges</p>
                    <p class="font-size-09 margin-0-0"><span class="text-strike-through">₹ 100</span> <span class="green-text">FREE</span></p>
                </li>

                <div class="divider"></div>

                <li class="display-flex space-between">
                    <p class="bold-font margin-0-0">Total Amount</p>
                    <p class="bold-font margin-0-0">₹ 13200</p>
                </li>

                <li class=" margin-1-auto display-flex"><button class="btn btn-contained-primary">Place Order</button>
                </li>
            </ul>
        </div>

    </div>

</div>

`;

document.querySelector("#cart").appendChild(cartTemplate.content);