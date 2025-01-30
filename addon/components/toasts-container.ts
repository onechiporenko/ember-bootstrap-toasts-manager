import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { ToastContainerPlacement } from 'ember-bootstrap-toasts-manager/interfaces/toast-container-placement.type';
import type { ToastQueueItem } from 'ember-bootstrap-toasts-manager/interfaces/toast-queue-item.type';
import type ToastsManagerService from 'ember-bootstrap-toasts-manager/services/toasts-manager';

export interface ToastsContainerSignature {
  // The arguments accepted by the component
  Args: {
    messagesNumberToShow: number;
    reverseOrder?: boolean;
    placement?: ToastContainerPlacement;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}

export default class ToastsContainerComponent extends Component<ToastsContainerSignature> {
  @service declare toastsManager: ToastsManagerService;

  get messagesNumberToShow(): number {
    return this.args.messagesNumberToShow ?? 3;
  }

  get placement(): ToastContainerPlacement {
    return this.args.placement ?? 'bottom-right';
  }

  get placementClass(): string {
    switch (this.placement) {
      case 'top-left':
        return 'top-0 start-0';
      case 'bottom-left':
        return 'bottom-0 start-0';
      case 'top-right':
        return 'top-0 end-0';
      case 'bottom-right':
      default:
        return 'end-0 bottom-0';
    }
  }

  @action
  onClose(toastQueueItem: ToastQueueItem): void {
    this.toastsManager.hideToast(toastQueueItem);
  }
}
