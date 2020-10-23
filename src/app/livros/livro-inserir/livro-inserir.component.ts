  import
    { Component, EventEmitter, Output }
  from
    '@angular/core';

  import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})

export class LivroInserirComponent {

  @Output() livroAdicionado = new EventEmitter<Livro>();
  
  titulo: string;
  autor: string;
  pages: string;
  id: string;

  
  onAdicionarLivro() {

    const livro: Livro = {
      titulo: this.titulo,
      autor: this.autor,
      pages: this.pages,
      id: getRandomString(20)
    }

    this.livroAdicionado.emit(livro);

    this.titulo = '';
    this.autor = '';
    this.pages = '';
    this.id = '';

  }

}

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}