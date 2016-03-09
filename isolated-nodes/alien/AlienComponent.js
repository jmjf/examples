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

    var overlay = $$('div').addClass('se-overlay')
      .append($$('button').append('Click Here').on('mousedown', this.onClick));
    el.append(overlay);

    return el;
  };

  var _moods = ['normal', 'angry', 'excited', 'sad', 'sick'];

  this.onClick = function(event) {
    event.preventDefault();
    event.stopPropagation();

    var surface = this.context.surface;
    var node = this.props.node;

    var mood = node.mood || 'normal';
    var idx = _moods.indexOf(mood);
    idx = (idx+1) % _moods.length;
    mood = _moods[idx];
    surface.transaction(function(tx) {
      tx.set([node.id, 'mood'], mood);
    });
    this.rerender();
  };

};

Component.extend(AlienComponent);

module.exports = AlienComponent;
