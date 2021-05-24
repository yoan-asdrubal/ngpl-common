import {Component, Input, OnInit} from '@angular/core';

/**
 * Muestra skeleton para representar un proceso de carga de datos
 * @example
 * <df-skeleton width='75%' height='25px' >
 *  {{'Informacion'}}
 * </df-skeleton>
 * @example
 * <df-skeleton width='25px' height='25px' shape='circle'>
 *   <mat-icon> more_vert </mat-icon>
 *  </df-skeleton>
 */
@Component({
  selector: 'ngpl-skeleton',
  templateUrl: './ngpl-skeleton.component.html',
  styleUrls: ['./ngpl-skeleton.component.css']
})
export class NgplSkeletonComponent implements OnInit {
  /**
   * Define si se muestra o no el skeleton
   */
  @Input() isLoading: boolean;
  /**
   * Define la forma del skeleton ['default', 'circle']
   * @default default se muestra como barra
   */
  @Input() shape: null | undefined | 'default' | 'circle';

  /**
   * Define el ancho del skeleton
   * @example
   * [width]='75%'
   * [width]='75px'
   */
  @Input() width: string;

  /**
   * Define el alto del skeleton
   * @example
   * [height]='25px'
   */
  @Input() height: string;

  /**
   * Define el border-radius del skeleton
   * @example
   * [borderRadius]='5px'
   * [borderRadius]='5%'
   */
  @Input() borderRadius: string;

  /**
   * Alineacion del componente
   *
   */
  @Input() align: 'center' | 'start' | 'end';

  constructor() {
  }

  /**
   * Devuelve la alineacion segun el atributo especificado
   */
  get styleAlign(): string {
    if (this.align === 'center') {
      return 'center';
    } else {
      return 'flex-' + this.align;
    }
  }

  /**
   * Define los estilso del skeleton en funcion de las propiedades definidas
   */
  get allStyles(): any {
    const style: any = {};
    if (this.width) {
      style.width = this.width;
    }
    if (this.height) {
      style.height = this.height;
    }
    if (this.borderRadius) {
      style['border-radius'] = this.borderRadius;
    }
    return style;
  }

  ngOnInit(): void {
  }
}
