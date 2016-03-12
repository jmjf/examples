'use strict';

var Component = require('substance/ui/Component');
var TextPropertyEditor = require('substance/ui/TextPropertyEditor');
var $$ = Component.$$;

function EntityComponent() {
  EntityComponent.super.apply(this, arguments);
}

EntityComponent.Prototype = function() {

  this.render = function() {
    var el = $$('div').addClass('sc-entity');

    var nameEl = $$('div').addClass('se-name');
    nameEl.append($$('div').addClass('se-label').append('Name:'));
    nameEl.append($$(TextPropertyEditor, {
      path: [this.props.node.id, 'name']
    }));

    var descriptionEl = $$('div').addClass('se-description');
    descriptionEl.append($$('div').addClass('se-label').append('Description:'));
    descriptionEl.append($$(TextPropertyEditor, {
      path: [this.props.node.id, 'description']
    }));

    el.append(nameEl);
    el.append(descriptionEl);

    return el;
  };

};

Component.extend(EntityComponent);

EntityComponent.static.isPropertyEditor = true;

module.exports = EntityComponent;
