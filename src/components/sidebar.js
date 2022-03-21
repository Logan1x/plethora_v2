import React from "react";

export default function sidebar() {
  return (
    <aside class="sidebar">
      <div class="sidebar-heading">
        <h4>Filters</h4>
        <p>clear</p>
      </div>
      <div>
        <h4>Color</h4>
        <form class="color-selection-checkbox">
          <div>
            <input type="checkbox" id="red" name="red" />
            <label for="red">red</label>
          </div>
          <div>
            <input type="checkbox" id="orange" name="orange" />
            <label for="orange">orange</label>
          </div>
          <div>
            <input type="checkbox" id="blue" name="blue" />
            <label for="blue">blue</label>
          </div>
          <div>
            <input type="checkbox" id="green" name="green" />
            <label for="green">green</label>
          </div>
        </form>
      </div>
      <div>
        <h4>Sort By</h4>
        <form action="" class="sort-selection-radio">
          <div>
            <input type="radio" id="priceHigh" name="sort" />
            <label for="priceHigh">Price: High to Low</label>
          </div>
          <div>
            <input type="radio" id="priceLow" name="sort" />
            <label for="priceLow">Price: Low to High</label>
          </div>
        </form>
      </div>
    </aside>
  );
}
