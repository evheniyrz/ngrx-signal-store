import { Overlay } from '@angular/cdk/overlay';
import { Injectable, Injector, inject } from '@angular/core';
import {
  ComponentPortal,
} from '@angular/cdk/portal';
import { Preloader } from '../../components/preloader/preloader';

@Injectable({
  providedIn: 'root'
})
export class OverlayLoader {
  #overlayService = inject(Overlay);
  #injector: Injector = inject(Injector);
  #preloaderComponent = new ComponentPortal(Preloader, null, this.#injector);
  #overlayRef = this.#overlayService.create({
    /** Strategy with which to position the overlay. */
    positionStrategy: this.#overlayService.position().global().centerHorizontally().centerVertically(),
    /** Strategy to be used when handling scroll events while the overlay is open. */
    scrollStrategy: this.#overlayService.scrollStrategies.block(),
    /** Custom class to add to the overlay pane. */
    // panelClass?: string | string[];
    /** Whether the overlay has a backdrop. */
    hasBackdrop: true,
    /** Custom class to add to the backdrop */
    backdropClass: 'cdk-overlay-dark-backdrop',
    /** Whether to disable any built-in animations. */
    disableAnimations: false,
    /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
    // width?: number | string;
    /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
    // height?: number | string;
    /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
    // minWidth?: number | string;
    /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
    // minHeight?: number | string;
    /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
    // maxWidth?: number | string;
    /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
    // maxHeight?: number | string;
    /**
     * Direction of the text in the overlay panel. If a `Directionality` instance
     * is passed in, the overlay will handle changes to its value automatically.
     */
    // direction?: Direction | Directionality;
    /**
     * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    disposeOnNavigation: true
  })
  showPreloader(): void {
    if (this.#overlayRef.hasAttached()) {
      return;
    }

    this.#overlayRef.attach(this.#preloaderComponent);
  }

  hidePreloader(): void {
    if(!this.#overlayRef.hasAttached()) {
      return;
    }
    this.#overlayRef.detach();
  }
}
