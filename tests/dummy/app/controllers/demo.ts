import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type ToastsManagerService from 'ember-bootstrap-toasts-manager/services/toasts-manager';
import { service } from '@ember/service';

export default class DemoController extends Controller {
  @tracked messagesNumberToShow = 3;
  @tracked reverseOrder = false;

  @tracked title = 'Demo title';
  @tracked messageSecondary = 'G2G';
  @tracked message = 'Some additional information';
  @tracked isClosable = true;
  @tracked showHeader = true;
  @tracked showBody = true;

  @tracked counter = 0;

  @service declare toastsManager: ToastsManagerService;

  @action
  showToast(): void {
    this.toastsManager.showBaseToast({
      title: `${this.title} #${++this.counter}`,
      message: this.message,
      messageSecondary: this.messageSecondary,
      isClosable: this.isClosable,
      showHeader: this.showHeader,
      showBody: this.showBody,
    });
  }
}
