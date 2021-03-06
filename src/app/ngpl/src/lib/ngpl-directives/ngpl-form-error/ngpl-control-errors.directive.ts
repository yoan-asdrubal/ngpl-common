import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Host,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewContainerRef
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {NGPL_FORM_ERRORS} from './ngpl-form-errors';
import {NgplControlErrorContainerDirective} from './ngpl-control-error-container.directive';
import {NgplFormSubmitDirective} from './ngpl-form-submit.directive';
import {EMPTY, merge, Observable, Subject} from 'rxjs';
import {NgplControlErrorComponent} from './ngpl-control-error/ngpl-control-error.component';
import {NgplDisableReactiveControlDirective} from '../ngpl-disable-reactive-control/ngpl-disable-reactive-control.directive';
import {takeUntil} from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl]:not([skipValidation]), [formControlName]:not([skipValidation])'
})
export class NgplControlErrorsDirective implements OnInit, OnDestroy {
  ref: ComponentRef<NgplControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  state$: Observable<any>;
  @Input() ngplCustomErrors = {};
  @Input() ngplForce = false;

  destroyIt = new Subject();
  destroyIt$ = this.destroyIt.asObservable();

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: NgplControlErrorContainerDirective,
    @Optional() state: NgplDisableReactiveControlDirective,
    @Inject(NGPL_FORM_ERRORS) private errors,
    @Optional() @Host() private form: NgplFormSubmitDirective,
    private controlDir: NgControl) {

    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
    this.state$ = state ? state.stateChange.asObservable() : EMPTY;
  }

  get control(): any {
    return this.controlDir.control;
  }

  ngOnInit(): void {
    if (this.control) {
      merge(
        this.submit$,
        this.control.valueChanges,
        this.state$
      ).pipe(
        takeUntil(this.destroyIt$)
      ).subscribe((v) => {
        const controlErrors = this.control.errors;
        // console.log('ControlErrorsDirective', this.controlDir.name, controlErrors);

        if (controlErrors && (this.ngplForce || this.control.dirty) && this.control.enabled) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text = this.ngplCustomErrors[firstKey] || controlErrors[firstKey]?.message || (getError && getError(controlErrors[firstKey])) || 'Campo No V??lido';
          this.setError(text);
        } else if (this.ref) {
          this.setError(null);
        }
      });
    }
  }

  setError(text: string): void {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(NgplControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy(): void {
    this.destroyIt.next(true);
  }

}
