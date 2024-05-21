import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type ToastsManagerService from 'ember-bootstrap-toasts-manager/services/toasts-manager';
import { service } from '@ember/service';
import CustomToastComponent from 'dummy/components/custom-toast';

export default class DemoController extends Controller {
  @service('-document') declare dom: Document;

  @tracked messagesNumberToShow = 3;
  @tracked reverseOrder = false;

  @tracked title = 'Demo title';
  @tracked messageSecondary = 'G2G';
  @tracked message = 'Some additional information';
  @tracked isClosable = true;
  @tracked showHeader = true;
  @tracked showBody = true;
  @tracked hideToastTimeout = 3000;
  @tracked placement = 'bottom-right';
  @tracked isLight = false;

  placementOptions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

  @tracked counter = 0;

  @service declare toastsManager: ToastsManagerService;

  @action
  showBaseToast(): void {
    this.toastsManager.showBaseToast({
      title: `${this.title} #${++this.counter}`,
      message: this.message,
      messageSecondary: this.messageSecondary,
      isClosable: this.isClosable,
      showHeader: this.showHeader,
      showBody: this.showBody,
      hideToastTimeout: this.hideToastTimeout,
    });
  }

  @action
  showCustomToast(): void {
    this.toastsManager.showToast(CustomToastComponent, {
      message: this.message,
      isClosable: this.isClosable,
      hideToastTimeout: this.hideToastTimeout,
    });
  }

  @action
  applySelectedTheme(): void {
    const selectedTheme = this.isLight ? 'light' : 'dark';
    this.dom.body.setAttribute('data-bs-theme', selectedTheme);
    this.dom
      .querySelector('html')
      ?.style.setProperty('color-scheme', selectedTheme);
  }
}
