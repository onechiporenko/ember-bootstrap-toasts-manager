import Component from '@glimmer/component';
import type { ToastOptions } from 'ember-bootstrap-toasts-manager/interfaces/toast-options.type';

export interface ToastsBaseBodySignature {
  // The arguments accepted by the component
  Args: {
    options: ToastOptions;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}

export default class ToastsBaseBodyComponent extends Component<ToastsBaseBodySignature> {}
