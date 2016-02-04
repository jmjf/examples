'use strict';

var exampleDoc = require('./exampleDoc');
var Editor = require('../simple/Editor');
var IFrameSocket = require('./IFrameSocket');

window.onload = function() {
  var doc = exampleDoc;
  var socket = new IFrameSocket();
  Editor.static.mount({
    doc: doc,
    socket: socket
  }, 'body');
};


// 'use strict';

// var exampleDoc = require('./exampleDoc');
// var Component = require('substance/ui/Component');
// var SplitPane = require('substance/ui/SplitPane');
// var Editor = require('../simple/Editor');
// var Ghost = require('./Ghost');
// var GhostEditor = require('./GhostEditor');
// var $$ = Component.$$;

// function TwoEditors() {
//   TwoEditors.super.apply(this, arguments);
// }

// TwoEditors.Prototype = function() {

//   this.render = function() {
//     var el = $$('div').addClass('sc-two-editors');
//     el.append(
//       $$(SplitPane, {
//           splitType: 'vertical',
//           sizeA: '50%'
//         }).append(
//         $$(Editor, {doc: this.props.doc}).ref('left'),
//         $$(GhostEditor, {
//           doc: this.props.doc
//         }).ref('right')
//       )
//     );
//     return el;
//   };

// };

// Component.extend(TwoEditors);

// window.onload = function() {
//   var doc = exampleDoc;
//   TwoEditors.static.mount({
//     doc: doc
//   }, 'body');
// };
