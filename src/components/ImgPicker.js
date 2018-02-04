import React, { Component } from 'react';
import '../App.css';
export class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleImageChange(e) {
      e.preventDefault();  
      let reader = new FileReader();
      let file = e.target.files[0];  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        },()=>{ 
            let {imagePreviewUrl} = this.state;
            if (imagePreviewUrl) {
            this.props.onSave(imagePreviewUrl);
            }
        });
      }             
      reader.readAsDataURL(file)     
    }
  
    render() {
        console.log(this.state);        
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img className="chosen" src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }      
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }