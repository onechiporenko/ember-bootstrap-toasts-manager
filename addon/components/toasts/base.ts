import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { ToastOptions } from 'ember-bootstrap-toasts-manager/interfaces/toast-options.type';

export interface ToastsBaseSignature {
  // The arguments accepted by the component
  Args: {
    options: ToastOptions;
    onClose?: () => void;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: { Params: { Positional: [] } };
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}

export default class ToastsBaseComponent extends Component<ToastsBaseSignature> {
  get showHeader(): boolean {
    return this.args.options.showHeader ?? true;
  }

  get showBody(): boolean {
    return this.args.options.showBody ?? true;
  }

  @action
  onClose(): void {
    this.args.onClose?.();
  }
}
