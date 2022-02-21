const kitsFilterTemplate = document.createElement('template');

kitsFilterTemplate.innerHTML = `

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
                        <label class="font-size-09"><input class="accent-color" type="radio" name="sort"
                                value="Price-High-to-Low">Price High
                            to Low</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="radio" name="sort"
                                value="Price-Low-to-High">Price Low
                            to High</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">BARÇA KITS</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="home-kit">Home
                            Kit</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="away-kit">Away
                            Kit</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="third-kit">Third
                            Kit</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox"
                                value="fourth-kit">Fourth Kit</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">GENDER</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox" value="men">Men</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox"
                                value="women">Women</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">RETRO KITS</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox">1899 Collection</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox">1974-75
                            Collection</label>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox">1980-81
                            Collection</label>
                    </li>

                    <div class="divider"></div>

                    <li>
                        <p class="gray-text bold-font font-size-09 margin-0-0">OTHER</p>
                    </li>

                    <li>
                        <label class="font-size-09"><input class="accent-color" type="checkbox"
                                value="Include-Out-of-Stock">Include Out of
                            Stock</label>
                    </li>

                </ul>
            </div>

`;

document.querySelector("#kitsFilter").appendChild(kitsFilterTemplate.content);