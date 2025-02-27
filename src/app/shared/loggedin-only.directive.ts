import { Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';

@Directive({
  selector: '[bmLoggedinOnly]',
  standalone: true
})
export class LoggedinOnlyDirective implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<unknown>)
 {
    this.authService.isAuthenticated$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.viewContainer.createEmbeddedView(this.template);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
