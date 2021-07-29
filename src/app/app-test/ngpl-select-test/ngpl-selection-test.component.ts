import {Component, OnInit} from '@angular/core';
import {NgplSelection} from '../../ngpl/src/lib/ngpl-base';

@Component({
  selector: 'ngpl-selection-test',
  templateUrl: './ngpl-select-test.component.html',
  styleUrls: ['./ngpl-select-test.component.scss']
})
export class NgplSelectionTestComponent implements OnInit {

  displayColumns = ['select', 'code', 'description', 'name', 'value', 'action'];
  selection = new NgplSelection();
  items = [];
  searching = false;

  constructor() {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.items = Array(30).fill(1).map((i, index) => {

      return {
        id: index,
        code: String.getRandomWord(10),
        description: String.getRandomSentence(3),
        name: String.getRandomWord(10),
        value: String.getRandomWord(10)
      };
    });
  }

  delete(item): void {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  deleteAll(): void {
    this.items = [];
  }

}
