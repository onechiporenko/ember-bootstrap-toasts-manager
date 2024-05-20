import { A } from '@ember/array';
import { later } from '@ember/runloop';
import Service from '@ember/service';
import type Component from '@glimmer/component';
import type { ToastOptions } from 'ember-bootstrap-toasts-manager/interfaces/toast-options.type';
import type { ToastQueueItem } from 'ember-bootstrap-toasts-manager/interfaces/toast-queue-item.type';

import ToastsBaseComponent, {
  type ToastsBaseSignature,
} from '../components/toasts/base';

export default class ToastsManagerService extends Service {
  hideToastTimeout = 3000;
  messagesQueue = A<ToastQueueItem>([]);

  showBaseToast(toastOptions: ToastOptions): void {
    this.showToast(ToastsBaseComponent, toastOptions);
  }

  showToast(
    toastComponent: typeof Component<ToastsBaseSignature>,
    toastOptions: ToastOptions,
  ): void {
    const messageQueueItem = {
      toastOptions,
      componentToRender: toastComponent,
    };
    this.messagesQueue.pushObject(messageQueueItem);
    later(this, this.hideToast, messageQueueItem, this.hideToastTimeout);
  }

  hideToast(toastQueueItem: ToastQueueItem): void {
    const index = this.messagesQueue.indexOf(toastQueueItem);
    if (index === -1 || index >= this.messagesQueue.length) {
      return;
    }
    this.messagesQueue.removeAt(index, 1);
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:toasts-manager')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('toasts-manager') declare altName: ToastsManagerService;`.
declare module '@ember/service' {
  interface Registry {
    'toasts-manager': ToastsManagerService;
  }
}
