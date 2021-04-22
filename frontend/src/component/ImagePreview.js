import React, { useState, useEffect, MouseEvent, CSSProperties, Component } from 'react';

import '../styles/ImagePreview.scss'

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: this.props.origin,
      crop: this.props.crop,
      fields: this.props.fields
    };
    console.log(this.props)
  }
    
  makeFieldData(fields) {
      return(
        fields.map((field) =>    
          <div className = 'details'>
            <p className = 'field-name'>{field.name}</p>
            <a>
              <img src = {field.value}></img>
            </a>
          </div>
        )
      );
  }

  render() {
    const { origin, crop, fields } = this.state;
    return (
      <div className='image-preview'>
        <div className='main-content'>
          <div className = 'origin'>
             <p>Origin Image</p>
             <a>
               <img className = 'image-fix' src = {origin}></img>
             </a>
          </div>
          <div className = 'crop'>
             <p>Crop Image</p>
             <a>
               <img className = 'image-fix' src = {crop}></img>
             </a>
          </div>
        </div>
        <div className='field-content'>
          {this.makeFieldData(fields)}
        </div>
      </div>
    );
  }
}
export default ImagePreview;