import Route from '@ember/routing/route';
import type Transition from '@ember/routing/transition';
import type DemoController from 'dummy/controllers/demo';

export default class DemoRoute extends Route {
  setupController(
    controller: DemoController,
    model: unknown,
    transition: Transition,
  ): void {
    super.setupController(controller, model, transition);
    controller.applySelectedTheme();
  }
}
