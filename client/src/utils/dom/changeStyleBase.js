import surroundContents from "./surroundContents";

const changeStyleBase = ({ stylePropertyName, stylePropertyValue }) => {
  return (state) => {
    if (!state.contentRef?.current) {
      return;
    }

    debugger;

    const selection = document.getSelection();
    if (
      selection.baseNode.parentNode.style[stylePropertyName] ===
      stylePropertyValue
    ) {
      selection.baseNode.parentNode.style[stylePropertyName] = "";

      state.content = contentRef.current.innerHTML;
      state.externalContent = contentRef.current.innerHTML;

      return;
    }

    const spanEl = document.createElement("span");
    spanEl.style[stylePropertyName] = stylePropertyValue;

    const innerHTML = surroundContents({
      selection,
      node: spanEl,
      contentRef: state.contentRef,
    });

    if (innerHTML) {
      state.content = innerHTML;
      state.externalContent = innerHTML;
    }
  };
};

export default changeStyleBase;
