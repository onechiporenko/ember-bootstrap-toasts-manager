import Component from '@glimmer/component';
import type { ToastOptions } from 'ember-bootstrap-toasts-manager/interfaces/toast-options.type';

export interface ToastsBaseHeaderSignature {
  // The arguments accepted by the component
  Args: {
    options: ToastOptions;
    onClose: () => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}

export default class ToastsBaseHeaderComponent extends Component<ToastsBaseHeaderSignature> {}
