import {BEGIN_DRAGGING_VERTEX, UPDATE_DRAGGING_VERTEX, END_DRAGGING_VERTEX} from '../utils/constants'

export function beginDraggingVertex(layerID, vertexID, x, y, snapMask) {
  return {
    type: BEGIN_DRAGGING_VERTEX,
    layerID, vertexID, x, y, snapMask
  }
}

export function updateDraggingVertex(x, y, snapMask) {
  return {
    type: UPDATE_DRAGGING_VERTEX,
    x, y, snapMask
  }
}

export function endDraggingVertex(x, y, snapMask) {
  return {
    type: END_DRAGGING_VERTEX,
    x, y, snapMask

  }
}
