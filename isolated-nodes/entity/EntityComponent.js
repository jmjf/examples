'use strict';

var Component = require('substance/ui/Component');
var TextPropertyEditor = require('substance/ui/TextPropertyEditor');
var $$ = Component.$$;

function EntityComponent() {
  EntityComponent.super.apply(this, arguments);
}

EntityComponent.Prototype = function() {

  this.render = function() {
    var el = $$('div').addClass('sc-entity').attr('data-id', this.props.node.id);

    var nameEl = $$('div').ref('name').addClass('se-name');
    nameEl.append($$('div').ref('name.label').addClass('se-label').append('Name:'));
    nameEl.append($$(TextPropertyEditor, {
      path: [this.props.node.id, 'name']
    }).ref('name.editor'));

    var descriptionEl = $$('div').ref('description').addClass('se-description');
    descriptionEl.append($$('div').ref('description.label').addClass('se-label').append('Description:'));
    descriptionEl.append($$(TextPropertyEditor, {
      path: [this.props.node.id, 'description']
    }).ref('description.editor'));

    el.append(nameEl);
    el.append(descriptionEl);

    return el;
  };

};

Component.extend(EntityComponent);

EntityComponent.static.isPropertyEditor = true;

module.exports = EntityComponent;
