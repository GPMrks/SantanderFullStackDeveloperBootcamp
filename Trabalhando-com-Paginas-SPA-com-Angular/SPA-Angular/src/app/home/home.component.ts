import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'SPA-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'João', idade: 25, email: 'joao@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Marcelo', idade: 31, email: 'marcelo@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Renata', idade: 45, email: 'renata@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
