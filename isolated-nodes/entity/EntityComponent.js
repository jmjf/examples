'use strict';

var Component = require('substance/ui/Component');
var TextProperty = require('substance/ui/TextPropertyComponent');
var $$ = Component.$$;

function EntityComponent() {
  EntityComponent.super.apply(this, arguments);
}

EntityComponent.Prototype = function() {

  this.render = function() {
    var el = $$('div').addClass('sc-entity');

    var nameEl = $$('div').addClass('se-name');
    nameEl.append($$('div').addClass('se-label').append('Name:'));
    nameEl.append($$(TextProperty, {
      path: [this.props.node.id, 'name']
    }));

    var descriptionEl = $$('div').addClass('se-description');
    descriptionEl.append($$('div').addClass('se-label').append('Description:'));
    descriptionEl.append($$(TextProperty, {
      path: [this.props.node.id, 'description']
    }));

    el.append(nameEl);
    el.append(descriptionEl);

    return el;
  };

};

Component.extend(EntityComponent);

EntityComponent.static.isEditor = true;

module.exports = EntityComponent;
