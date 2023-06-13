import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';
@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {


  anuncio: Anuncio[] = [];
  loadAnuncio: any;


  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    this.loadAnuncio();
  }


  loadProduto() {
    this.anuncioService.getAnuncio().subscribe(
      {
        next: data => this.anuncio = data,
      }
    );
  }

}
