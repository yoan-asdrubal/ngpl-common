import {Directive, ElementRef, Host, HostListener, Input, OnInit, Optional, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Clipboard} from '@angular/cdk/clipboard';
import {TemplatePortal} from '@angular/cdk/portal';

@UntilDestroy()
@Directive({
  selector: '[ngplCopyWithMessage]'
})
export class NgplCopyWithMessageDirective implements OnInit {
  @Input() ngplCopyWithMessage: any;
  @Input() messageTemplate: TemplateRef<any>;

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private clipboard: Clipboard,
              @Optional() @Host() private elementRef: ElementRef,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private _viewContainerRef: ViewContainerRef) {
  }

  @HostListener('click', ['$event'])
  click(event) {
    if (!!event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.clipboard.copy(this.ngplCopyWithMessage);
    this.openPanelWithBackdrop(null);
  }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: -50
      }, {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -50
      }
      ])
    ;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy
    });
    this.overlayRef.backdropClick()
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.overlayRef.detach();
      });
  }

  openPanelWithBackdrop(event): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }

    this.overlayRef.attach(new TemplatePortal(
      this.messageTemplate,
      this._viewContainerRef));

  }
}
