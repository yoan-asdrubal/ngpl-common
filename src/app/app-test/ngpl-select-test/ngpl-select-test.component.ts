import {Component, ContentChild, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {NgplSelection} from '../../ngpl/src/lib/ngpl-base';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'ngpl-selection-test',
  templateUrl: './ngpl-select-test.component.html',
  styleUrls: ['./ngpl-select-test.component.scss']
})
export class NgplSelectTestComponent implements OnInit {

  displayColumns = ['select', 'rut', 'nombre', 'movimiento', 'valor', 'accion'];
  selection = new NgplSelection();
  items = [];
  searching = false;
  @ContentChild(MatPaginator, {static: true}) matPaginator: MatPaginator;
  @ContentChild(MatSort, {static: true}) matSort: MatSort;

  constructor() {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.items = Array(30).fill(1).map((i, index) => {

      return {
        id: index,
        rut: String.getRandomWord(10),
        movimiento: String.getRandomWord(10),
        valor: String.getRandomWord(10),
        nombre: String.getRandomSentence(3)
      };
    });
  }

  eliminar(item): void {
    this.items = this.items.filter(i => i.rut !== item.rut);
  }

  eliminarAll(): void {
    this.items = [];
  }

}
