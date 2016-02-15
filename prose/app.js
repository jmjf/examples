'use strict';

var $ = window.$ = require('substance/util/jquery');
var Component = require('substance/ui/Component');
var Icon = require('substance/ui/FontAwesomeIcon');
var ProseEditor = require('substance/packages/prose-editor/ProseEditor');
var InsertTableTool = require('substance/packages/table/InsertTableTool');
var example = require('substance/test/fixtures/collab/poem');
var $$ = Component.$$;

var config = {
  controller: {
    components: {
      'table': require('substance/packages/table/TableComponent')
    }
  },
  bodyEditor: {
    commands: [
      require('substance/packages/table/InsertTableCommand')
    ]
  }
};

function App() {
  App.super.apply(this, arguments);
}

App.Prototype = function() {

  this.render = function() {
    var el = $$('div').addClass('app');

    var editor = $$(ProseEditor, {
      doc: this.props.doc,
      config: config
    });
    editor.outlet('tools').append(
      $$(InsertTableTool).append($$(Icon, {icon: 'fa-table'}))
    );

    el.append(editor);

    return el;
  };
};

Component.extend(App);

$(function() {
  var doc = example.createArticle();
  // For debugging in the console
  window.doc = doc;
  Component.mount(App, {
    doc: doc
  }, 'body');
});
