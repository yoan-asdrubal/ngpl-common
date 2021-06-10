import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function filterEmpleadoActivos(): any {
  return function (source: Observable<any[]>) {
    return source.pipe(
      map((items: any[]) => {
        return !items ? [] : items.filter(i => i.activo === 1);
      })
    );
  };
}
