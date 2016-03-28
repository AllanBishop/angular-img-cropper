import 'rxjs/Rx';
import {Component} from 'angular2/core';
import {ImageCropperComponent, CropperSettings} from '../../src/imageCropper';

@Component({
    selector: 'test-app',
    template:
    `<div>

      <h3>NG2 Image Cropper</h3>
      <img-cropper [image]="data" [settings]="cropperSettings"></img-cropper><br>
      <img [src]="data.image" [width]="cropperSettings.croppedWidth" [height]="cropperSettings.croppedHeight">
     </div>`,
     directives: [ImageCropperComponent]
})
export class AppComponent {

  data: any;
  cropperSettings: CropperSettings;

  constructor() {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 60;
    this.cropperSettings.height = 30;
    this.cropperSettings.croppedWidth =120;
    this.cropperSettings.croppedHeight = 60;
    this.cropperSettings.canvasWidth = 300;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};

  }
}
