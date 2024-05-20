import type Component from '@glimmer/component';
import type { ToastsBaseSignature } from 'ember-bootstrap-toasts-manager/components/toasts/base';
import type { ToastOptions } from 'ember-bootstrap-toasts-manager/interfaces/toast-options.type';

export interface ToastQueueItem {
  toastOptions: ToastOptions;
  componentToRender: typeof Component<ToastsBaseSignature>;
}
