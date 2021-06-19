import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  location: number []=[];
  latitude!: number;
  longitude!: number;
  address!: string;
  private geoCoder:any;

  @ViewChild('search')
  public searchElementRef!: ElementRef;

  constructor(public dialogRef: MatDialogRef<ModalComponent>  ,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
    
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
           console.log(this.latitude,this.longitude)
        });
      });
    });
}


  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    // alert("You have logged out.");
   this.setCurrentLocation();
    this.closeModal();
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.push(position.coords.latitude);
        this.location.push(position.coords.longitude);
        
      });
    }
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    // console.log(this.location);
    this.dialogRef.close();
  }

}
