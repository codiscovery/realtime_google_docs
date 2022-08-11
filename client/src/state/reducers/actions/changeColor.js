import surroundContents from "../../../utils/dom/surroundContents";

const changeColorAction = (state, action) => {
  if (!state.contentRef?.current) {
    return;
  }

  const spanEl = document.createElement("span");
  spanEl.style.color = action.payload;

  const selection = document.getSelection();

  const innerHTML = surroundContents({
    selection,
    node: spanEl,
    contentRef: state.contentRef,
  });

  // console.log("innerHTML", innerHTML);

  if (innerHTML) {
    state.content = innerHTML;
    state.externalContent = innerHTML;
  }
};

export default changeColorAction;
