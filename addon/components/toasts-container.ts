import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { ToastQueueItem } from 'ember-bootstrap-toasts-manager/interfaces/toast-queue-item.type';
import type ToastsManagerService from 'ember-bootstrap-toasts-manager/services/toasts-manager';

export interface ToastsContainerSignature {
  // The arguments accepted by the component
  Args: {
    messagesNumberToShow: number;
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

  @action
  onClose(toastQueueItem: ToastQueueItem): void {
    this.toastsManager.hideToast(toastQueueItem);
  }
}
