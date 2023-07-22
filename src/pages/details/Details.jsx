import React from "react";
import "./details.css";

export default function Details() {
  return (
    <div id="gparent_div">
      <div id="parent_div1">
        <div>
          <img
            src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/catalog/product/j/n/jne04613-yb3a-p0p000000-00-14kt-yellow-gold-necklace-main-image.jpg/w_615,h_615,r_contain"
            alt="Necklase"
          />
        </div>
      </div>
      <div id="parent_div2">
        <div id="child_div1">
          <a
            text-decoration="underline"
            color="#de57e5"
            href="https://www.trustpilot.com/evaluate/caratlane.us?utm_medium=trustbox&amp;utm_source=TrustBoxReviewCollector"
          >
            Review Design
          </a>
          <img
            src="https://www.caratlane.us/static/version1689846414/frontend/Caratlane/caratlanetheme/en_US/images/trust-pilot-icon.png"
            alt="trustpilot"
          />
        </div>

        <h3 fontStyle="Bree Serif">Pearly Dangle Layered Necklace</h3>
        <div id="child_div2">
          <div id="child_div21">
            <img
              src="https://www.caratlane.us/static/version1689846414/frontend/Caratlane/caratlanetheme/en_US/images/delivery-icon.svg"
              alt="delhiveryImg"
            />
            <span>Ready to Ship Expected Delivery by 30 Jul - 01 Aug</span>
          </div>
          <div id="child_div3">
            <img
              src="https://www.caratlane.us/static/version1689846414/frontend/Caratlane/caratlanetheme/en_US/images/return-icon.svg"
              alt="returnImg"
            />
            <span>30 days return/exchange *T&amp;C Apply</span>
          </div>
        </div>

        <div>
          <p className="cPrice">$769</p>
          <p className="price">Price $1189</p>
          <p className="p_color">
            Save additional 10% + Get free diamond pendant on orders of $1000
            &amp; above. (Use code: SPARKLE). Ends on 29rd July.
          </p>
        </div>
        <div id="child_div4">
          <button class="button">View Details</button>
          <button class="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
