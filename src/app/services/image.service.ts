import { Injectable } from '@angular/core';
import { Storage, ref } from 

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public uploadImage($event: any){
    const file = $event.target.files[0]
    const imgRef = ref
  }


}
