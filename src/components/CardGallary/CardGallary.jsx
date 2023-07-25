import React, { Component } from "react";
import "./CardGallary.css";
export default class CardGallery extends Component {
  render() {
    return (
      <div>
        <div className="message">
          Sorry, your browser does not support CSS Grid. 😅
        </div>
        <section className="section">
          <h1>Nom Nom Gallery</h1>
          <div className="grid">
            <div className="item">
              <div className="item__details">jelly-o brownie sweet</div>
            </div>
            <div className="item item--large">
              <div className="item__details">Muffin jelly gingerbread</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">sesame snaps chocolate</div>
            </div>
            <div className="item">
              <div className="item__details">jelly-o brownie sweet</div>
            </div>
            <div className="item item--large">
              <div className="item__details">Muffin jelly gingerbread</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">sesame snaps chocolate</div>
            </div>
            <div className="item item--medium">
              <div className="item__details">sesame snaps chocolate</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
