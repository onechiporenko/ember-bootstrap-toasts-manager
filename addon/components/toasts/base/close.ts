import Component from '@glimmer/component';
import type { ToastOptions } from 'ember-bootstrap-toasts-manager/interfaces/toast-options.type';

export interface ToastsBaseCloseSignature {
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
  Element: HTMLButtonElement;
}

export default class ToastsBaseCloseComponent extends Component<ToastsBaseCloseSignature> {}
