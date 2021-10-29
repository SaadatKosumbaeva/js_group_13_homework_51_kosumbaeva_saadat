import {Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  password = '';
  imageTitle = '';
  imageURL = '';
  showForm = false;
  imagesArray = [
    {imageTitle: 'Image 1', imageURL: 'https://wallpaperaccess.com/full/2817799.jpg'},
    {
      imageTitle: 'Image 2',
      imageURL: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.2098224274.1628553600'
    },
    {
      imageTitle: 'Image 3',
      imageURL: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752'
    }
  ];

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

  imageInputIsEmpty() {
    return this.imageTitle === '' && this.imageURL === '';
  }

  imageFormReset() {
    this.imageTitle = '';
    this.imageURL = '';
  }

  addImage(event: Event) {
    event.preventDefault();
    if (this.imageTitle === '' || this.imageURL === '') {
      return alert('Fill in the form fields');
    }
    this.imagesArray.push({
      imageTitle: this.imageTitle,
      imageURL: this.imageURL
    });
    this.imageFormReset();
  }
}
