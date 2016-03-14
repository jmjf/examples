'use strict';

var $ = window.$ = require('substance/util/jquery');
var Component = require('substance/ui/Component');
var ProseEditor = require('substance/packages/prose-editor/ProseEditor');

var AlienNode = require('./alien/AlienNode');
var AlienComponent = require('./alien/AlienComponent');
var InsertAlienCommand = require('./alien/InsertAlienCommand');
var InsertAlienTool = require('./alien/InsertAlienTool');

var EntityNode = require('./entity/EntityNode');
var EntityComponent = require('./entity/EntityComponent');
var InsertEntityCommand = require('./entity/InsertEntityCommand');
var InsertEntityTool = require('./entity/InsertEntityTool');

var ContainerComponent = require('./container/ContainerComponent');
var InsertContainerCommand = require('./container/InsertContainerCommand');
var InsertContainerTool = require('./container/InsertContainerTool');

var example = require('substance/test/fixtures/collab/poem');
var doc = example.createArticle();
var schema = doc.getSchema();
schema.addNode(AlienNode);
schema.addNode(EntityNode);

var body = doc.get('body');
var p1 = doc.create({
  type: 'paragraph',
  content: 'Lorem ipsum'
})
var c1 = doc.create({
  type: 'container',
  id: 'ns1',
  nodes: [p1.id]
});
body.show(c1.id, 3);

var e1 = doc.create({
  type: 'entity',
  id: 'ns2',
  name: 'Foo',
  description: 'Bar'
});
body.show(e1.id, 4);

var config = ProseEditor.static.mergeConfig(ProseEditor.static.config, {
  controller: {
    components: {
      'alien': AlienComponent,
      'entity': EntityComponent,
      'container': ContainerComponent
    }
  },
  bodyEditor: {
    commands: [
      InsertAlienCommand,
      InsertEntityCommand,
      InsertContainerCommand
    ]
  },
  tools: [
    InsertAlienTool,
    InsertEntityTool,
    InsertContainerTool
  ]
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
      config.tools.map(function(Tool) {
        return $$(Tool);
      })
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
