import {InjectionToken} from '@angular/core';

/**
 * Define la interfaz qeu debe implementar el componente para mostrar el filtro como un menu a  partir de un icono
 */
export interface NgplFilterMenuBase {
  test: any;
}

export const NGPL_FILTER_MENU_BASE = new InjectionToken<NgplFilterMenuBase>('NgplFilterMenuBase');
