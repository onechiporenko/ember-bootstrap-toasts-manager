# ember-bootstrap-toasts-manager

[![CI](https://github.com/onechiporenko/ember-bootstrap-toasts-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/onechiporenko/ember-bootstrap-toasts-manager/actions/workflows/ci.yml)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bootstrap-toasts-manager.svg)](https://emberobserver.com/addons/ember-bootstrap-toasts-manager)
[![npm version](https://badge.fury.io/js/ember-bootstrap-toasts-manager.png)](http://badge.fury.io/js/ember-bootstrap-toasts-manager)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/ember-bootstrap-toasts-manager.svg)](https://www.npmjs.com/package/ember-bootstrap-toasts-manager)

`ember-bootstrap-toasts-manager` is an Ember-addon that provides a simple mechanism for interaction with user using toasts. This addon is based on `ember-bootstrap`.

## Installation

`ember i ember-bootstrap-toasts-manager`

Add next to your `application.hbs`:

```html
<ToastsContainer />
```

```typescript
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ToastsManager from 'ember-bootstrap-toasts-manager/services/toasts-manager';

export default class ApplicationController extends Controller {
  @service toastsManager!: ToastsManager;

  @action
  showToast() {
    this.toastsManager.showBaseToast({
      title: 'Hello',
      message: 'This is a toast message',
    });
  }
}
```

Custom components could be used as well:

```typescript
this.toastsManager.showToast(CustomToastComponent, {
  title: 'Hello',
  message: 'This is a toast message',
});
```

Here `CustomToastComponent` is a component that will be used to render a toast.

Check `components/toasts/base` for an example of toast component. Also check [Bootstrap Toasts #Custom Content](https://getbootstrap.com/docs/5.3/components/toasts/#custom-content) docs.

## Compatibility

* `ember-bootstrap@6`
* `bootstrap@5`

## Demo

Check [demo-page](https://onechiporenko.github.io/ember-bootstrap-toasts-manager/#/demo)
