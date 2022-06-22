import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'SPA-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;

}
