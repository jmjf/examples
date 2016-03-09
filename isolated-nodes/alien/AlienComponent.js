'use strict';

var Component = require('substance/ui/Component');
var $$ = Component.$$;

function AlienComponent() {
  AlienComponent.super.apply(this, arguments);
}

AlienComponent.Prototype = function() {

  this.render = function() {
    var el = $$('div').addClass('sc-alien');
    el.append(
      $$('img').attr('height', 100).attr('src', 'alien/alien.svg')
    );
    if (this.props.node.mood) {
      el.addClass('sm-' + this.props.node.mood);
    }
    return el;
  };

};

Component.extend(AlienComponent);

module.exports = AlienComponent;
