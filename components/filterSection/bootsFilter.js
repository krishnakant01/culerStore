const bootsFilterTemplate = document.createElement('template');

bootsFilterTemplate.innerHTML = `

<div class="padding-075-1">

                <div class="filter-titles">
                    <p class="gray-text bold-font">FILTERS</p>
                    <button class="btn-link font-size-09">CLEAR ALL</button>
                </div>

                <div class="divider"></div>

                <ul class="filter-section padding-0-0 margin-0-0 list-style-none">

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">SORT</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="radio" name="sort" value="Price-High-to-Low">Price High
                            to Low</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="radio" name="sort" value="Price-Low-to-High">Price Low
                            to High</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">BRAND</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="nike">Nike</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="adidas">Adidas</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="puma">Puma</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="underarmour">Under Armour</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">MODEL</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="nemeziz">Nemeziz</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="predator">Predator</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="adidasx">Adidas X</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="mercurial">Mercurial</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">OTHER</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="Include-Out-of-Stock">Include Out of
                            Stock</label>
                    </li>

                </ul>
            </div>

`;

document.querySelector("#bootsFilter").appendChild(bootsFilterTemplate.content);