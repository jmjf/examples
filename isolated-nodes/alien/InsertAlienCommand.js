'use strict';

var SurfaceCommand = require('substance/ui/SurfaceCommand');
var insertNode = require('substance/model/transform/insertNode');

function InsertAlienCommand() {
  InsertAlienCommand.super.apply(this, arguments);
}

InsertAlienCommand.Prototype = function() {

  this.getCommandState = function() {
    var sel = this.getSelection();
    var newState = {
      disabled: true,
      active: false
    };
    if (sel && !sel.isNull() && sel.isPropertySelection()) {
      newState.disabled = false;
    }
    console.log('InsertAlienCommand.getCommandState()', newState);
    return newState;
  };

  this.execute = function() {
    var state = this.getCommandState();
    // Return if command is disabled
    if (state.disabled) return;
    var surface = this.getSurface();
    surface.transaction(function(tx, args) {
      args.node = {
        type: 'alien',
        mood: 'normal'
      };
      return insertNode(tx, args);
    });
  };
};


SurfaceCommand.extend(InsertAlienCommand);

InsertAlienCommand.static.name = 'insert-alien';

module.exports = InsertAlienCommand;
