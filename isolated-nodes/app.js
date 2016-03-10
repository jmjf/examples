'use strict';

var $ = window.$ = require('substance/util/jquery');
var Component = require('substance/ui/Component');
var Icon = require('substance/ui/FontAwesomeIcon');
var ProseEditor = require('substance/packages/prose-editor/ProseEditor');

var AlienNode = require('./alien/AlienNode');
var AlienComponent = require('./alien/AlienComponent');
var InsertAlienCommand = require('./alien/InsertAlienCommand');
var InsertAlienTool = require('./alien/InsertAlienTool');

var EntityNode = require('./entity/EntityNode');
var EntityComponent = require('./entity/EntityComponent');
var InsertEntityCommand = require('./entity/InsertEntityCommand');
var InsertEntityTool = require('./entity/InsertEntityTool');

var example = require('substance/test/fixtures/collab/poem');
var doc = example.createArticle();
var schema = doc.getSchema();
schema.addNode(AlienNode);
schema.addNode(EntityNode);

var config = ProseEditor.static.mergeConfig(ProseEditor.static.config, {
  controller: {
    components: {
      'alien': AlienComponent,
      'entity': EntityComponent
    }
  },
  bodyEditor: {
    commands: [
      InsertAlienCommand,
      InsertEntityCommand
    ]
  }
});

function App() {
  App.super.apply(this, arguments);
}

App.Prototype = function() {

  this.render = function() {
    var $$ = Component.$$;
    var el = $$('div').addClass('app');

    var editor = $$(ProseEditor, {
      doc: this.props.doc,
      config: config
    });
    editor.outlet('tools').append(
      $$(InsertAlienTool),
      $$(InsertEntityTool)
    );

    el.append(editor);

    return el;
  };
};

Component.extend(App);

$(function() {
  // For debugging in the console
  window.doc = doc;
  Component.mount(App, {
    doc: doc
  }, 'body');
});
