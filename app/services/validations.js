import Service from '@ember/service';
import { set } from '@ember/object';

export default Service.extend({
  init: function() {
    this._super(...arguments);
    set(this, 'cache', {});
  }
});
