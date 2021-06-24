import {BehaviorSubject, Observable} from 'rxjs';
import {isNotNullOrUndefined} from '../../ngpl-util';

export class NgplSelection<T extends any> {
  // Store current selected objects to use in each method;
  private mapSelected: { [key: string]: T } = {};

  // Store current selected objects in array;
  private arraySelected: T[] = [];

  // Subject to emit every time mapSelected change.
  private subject: BehaviorSubject<T[]>;

  public selectionChange: Observable<T[]>;

  public multiple: boolean;

  // Field name of T object to use to compare objects
  key: string | number;

  public allSelected = false;

  constructor(key: string = 'id', initiallySelectedValues: T[] = [], _multiple: boolean = true) {
    this.key = key;
    this.subject = new BehaviorSubject(initiallySelectedValues);
    this.selectionChange = this.subject.asObservable();
    this.multiple = _multiple;
  }

  setMultiple(_multiple): void {
    this.multiple = _multiple;
  }

  setKey(key): void {
    this.key = key;
  }

  toggle(value: T): void {
    if (isNotNullOrUndefined(value)) {
      if (this.mapSelected[value[this.key]] !== undefined && !!this.mapSelected[value[this.key]]) {
        delete this.mapSelected[value[this.key]];
        this.emit();

      } else {
        if (!this.multiple) {
          this.clear();
        }
        this.select([value]);
      }
    } else {
      console.warn('Ha intentado seleccionar un valor nulo');
    }
  }

  isSelected(value: T): boolean {
    return isNotNullOrUndefined(value) && !!this.isSelectedByKey(value[this.key]);
  }

  isSelectedByKey(key: string | number): boolean {
    return isNotNullOrUndefined(key) && !!this.mapSelected[key];
  }

  isAllSelected(values: T[]): boolean {
    return values && values.length !== 0 && values.filter(item => !!item && this.mapSelected[item[this.key]]).length === values.length;
  }

  clear(): void {
    this.mapSelected = {};
    this.emit();
  }

  select(values: T[], emit = true): void {
    if (!!values) {
      values.forEach(item => this.mapSelected[item[this.key]] = item);
      this.emit(emit);
    }
  }

  deselect(values: T[], emit = true): void {
    values.forEach(item => delete this.mapSelected[item[this.key]]);
    this.emit(emit);
  }

  deselectByKeys(keys: string[] | number[], emit = true): void {
    keys.forEach(key => delete this.mapSelected[key]);
    this.emit(emit);
  }

  hasValue(): boolean {
    return this.arraySelected.length > 0;
  }

  selectedValues(): T[] {
    return this.arraySelected.slice();
  }

  selectedSize(): number {
    return this.selectedValues().length;
  }

  private emit(emit = true): void {
    this.arraySelected = Object.values(this.mapSelected) || [];
    if (emit) {
      this.subject.next(this.arraySelected.slice());
    }
  }

  mapValue(): { [key: string]: T } {
    return Object.assign({}, this.mapSelected);
  }

  getItem(key): T {
    return this.mapSelected[key];
  }

  updateSelectedIfNotFound(values: T[], merge = false): void {
    this.selectedValues().forEach(item => {
      const value = values.find(val => !val || val[this.key] === item[this.key]);
      if (!value) {
        delete this.mapSelected[item[this.key]];
      } else if (merge) {
        this.mapSelected[value[this.key]] = Object.assign({}, this.mapSelected[value[this.key]], value);
      }
    });

    this.emit(merge);
  }

  updateItemSelected(values: T[], merge = false, emit = false): void {
    let change = false;
    values.forEach(item => {
      if (!!this.mapSelected[item[this.key]]) {
        change = true;
        if (merge) {
          this.mapSelected[item[this.key]] = Object.assign({}, this.mapSelected[item[this.key]], item);
        } else {
          this.mapSelected[item[this.key]] = item;
        }
      }
    });
    if (change) {
      this.emit(emit);
    }
  }

  patchPropsByKeys(keys: string[] | number[], value: any, emit = true): void {
    let change = false;
    keys.forEach(key => {
      let item: any = this.getItem(key);
      if (!!item) {
        item = {...item, ...value};
        this.mapSelected[key] = item;
        change = true;
      }
    });
    if (change) {
      this.emit(emit);
    }
  }

  patchPropsByObjects(values: any[], emit = true): void {
    let change = false;
    values.forEach(val => {
      let item: any = this.getItem(val[this.key]);
      if (!!item) {
        item = {...item, ...val};
        this.mapSelected[val[this.key]] = item;
        change = true;
      } else {
        this.mapSelected[val[this.key]] = val;
      }
    });
    if (change) {
      this.emit(emit);
    }
  }

  removeProps(keys: string[] | number[], prop: string, emit = true): void {
    let change = false;
    keys.forEach(key => {
      const item = this.getItem(key);
      if (!!item && item.hasOwnProperty(prop)) {
        delete item[prop];
        this.mapSelected[key] = item;
        change = true;
      }
    });
    if (change) {
      this.emit(emit);
    }
  }

  masterToggle(items: T[] | any[]): void {
    const isAllSe = this.isAllSelected(items);

    if (isAllSe) {
      this.clear();
      this.allSelected = false;
    } else {
      this.select(items);
      this.allSelected = true;
    }
  }
}


