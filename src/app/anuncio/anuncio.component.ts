import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  anuncio: Anuncio[] = [];
  formGroupAnuncio: FormGroup;
  isEditing: boolean = false;

  constructor(private anuncioService: AnuncioService, private formBuilder: FormBuilder) {

    this.formGroupAnuncio = formBuilder.group({
      id: [''],
      name: [''],
      marca: [''],
      preco: [''],
      qunatidade: [''],
      img: ['']
    })
  }

  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio() {
    this.anuncioService.getAnuncio().subscribe({
      next: data => this.anuncio = data
    })
  }

  salvarAnuncio() {
    if (this.isEditing) {
      this.isEditing = false;
      this.anuncioService.salvarAnuncio(this.formGroupAnuncio.value).subscribe({
        next: data => {
          this.loadAnuncio();
          this.formGroupAnuncio.reset();
        }
      })
    }
    else {
      this.anuncioService.salvarAnuncio(this.formGroupAnuncio.value).subscribe({
        next: data => {
          this.anuncio.push(data);
          this.formGroupAnuncio.reset();
        }
      })
    }

  }
}
