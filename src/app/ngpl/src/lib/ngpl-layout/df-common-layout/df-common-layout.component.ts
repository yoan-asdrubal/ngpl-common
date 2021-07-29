import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'df-common-layout',
  templateUrl: './df-common-layout.component.html',
  styleUrls: ['./df-common-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DfCommonLayoutComponent implements OnInit {
  /**
   * Define la alineacion donde se mostrara el contenido, se usa para cuando la vista no ocupara el 100$
   * del ancho de la ventana, especificar en que parte se vera el contenido
   * @default start
   *
   * Posibles valores :
   * flex-start: Los componentes se mostraran a la izquierda
   * center: Los componentes se mostraran al centro
   * flex-end: Los componentes se mostraran a la derecha
   */
  @Input() align = 'flex-start';

  /**
   * Define el ancho del contenido
   * @default 100%
   */
  @Input() width = '100%';

  constructor() {
  }

  ngOnInit(): void {
  }

}
