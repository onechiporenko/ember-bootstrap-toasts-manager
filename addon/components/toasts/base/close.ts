import Component from '@glimmer/component';
import type { ToastsBaseSignature } from 'ember-bootstrap-toasts-manager/components/toasts/base';

export interface ToastsBaseCloseSignature {
  // The arguments accepted by the component
  Args: ToastsBaseSignature['Args'];
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLButtonElement;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ToastsBaseCloseComponent extends Component<ToastsBaseCloseSignature> {}
