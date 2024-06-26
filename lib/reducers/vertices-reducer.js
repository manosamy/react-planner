"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _constants = require("../utils/constants");
var _export = require("../class/export");
function _default(state, action) {
  switch (action.type) {
    case _constants.BEGIN_DRAGGING_VERTEX:
      return _export.Vertex.beginDraggingVertex(state, action.layerID, action.vertexID, action.x, action.y).updatedState;
    case _constants.UPDATE_DRAGGING_VERTEX:
      return _export.Vertex.updateDraggingVertex(state, action.x, action.y).updatedState;
    case _constants.END_DRAGGING_VERTEX:
      return _export.Vertex.endDraggingVertex(state, action.x, action.y).updatedState;
    default:
      return state;
  }
}