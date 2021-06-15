import {NgplCustomSelectionModel} from './ngpl-customSelectionModel';

export abstract class NgplCustomSelectionModelImpl<T extends any> extends NgplCustomSelectionModel<T> {

  items: T[];

  itemsFiltered: T[];
}
