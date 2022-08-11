const surroundContents = ({ selection, node, contentRef }) => {
  const range = new Range();

  const baseNode = selection.baseNode.parentNode;

  const index = Array.prototype.indexOf.call(
    baseNode.parentNode.childNodes,
    baseNode
  );

  if (index === -1) {
    console.warn("Selection has not been found");
    return;
  }

  let selectedChildNode = baseNode.parentNode.childNodes[index];
  if (selectedChildNode.tagName) {
    selectedChildNode = selectedChildNode.childNodes[0];
  }
  let rangeStart = selection.anchorOffset;
  let rangeEnd = selection.extentOffset;
  if (rangeStart > rangeEnd) {
    rangeStart = selection.extentOffset;
    rangeEnd = selection.anchorOffset;
  }
  range.setStart(selectedChildNode, rangeStart);
  range.setEnd(selectedChildNode, rangeEnd);

  if (selectedChildNode.parentNode.nodeName === "SPAN") {
    const propertyName = !node.style.fontWeight
      ? !node.style.textDecoration
        ? "fontStyle"
        : "textDecoration"
      : "fontWeight";
    selectedChildNode.parentNode.style[propertyName] = node.style[propertyName];
  } else {
    range.surroundContents(node);
  }

  return contentRef.current.innerHTML;
};

export default surroundContents;
