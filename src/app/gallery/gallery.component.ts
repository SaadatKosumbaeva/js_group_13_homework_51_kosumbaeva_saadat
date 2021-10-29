import {Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  password = '';
  showForm = false;

  passwordInputIsEmpty() {
    return this.password === '';
  }

  passwordReset() {
    this.password = '';
  }

  showGalleryForm(event: Event) {
    event.preventDefault();
    if (this.password === '123' && !this.showForm) {
      this.showForm = !this.showForm;
    } else if (this.showForm) {
      alert('You have already entered your password');
    } else {
      alert('Incorrect password')
    }
    this.passwordReset();
  }
}
