import { useRef } from "react";

const Page = ({ text = "", onChange }) => {
  const contentRef = useRef(null);

  /**
   * MainNode (contentEditable)
   *  - innerHTML
   * selection (getSelection())
   * action = bold, italic, underline
  
   *  
   * 
   */

  const onChangeTest = () => {
    if (contentRef.current) {
      // console.log("onChangeTest");
      console.log("contentRef.current.innerHTML", contentRef.current.innerHTML);
      onChange(contentRef.current.innerHTML);
    }
  };

  const onClickBold = () => {
    const selection = document.getSelection();
    console.log("selection", selection);
    // nodes.indexOf( liNodeReference );
    // nodes = ref.current.childNodes;
    // liNodeReference = selection.baseNode
    // const index = contentRef.current.childNodes.indexOf(selection.baseNode);
    const range = new Range();
    console.log("contentRef.current", contentRef.current.childNodes);

    // str.replace(toReplace, replacement)
    // String.replace.call(str, toReplace, replacement)
    // Array.prototype.indexOf.call(span.parentNode.childNodes, span)
    // let baseNode = selection.baseNode;
    // if (baseNode.parentNode !== contentRef.current) {
    //   baseNode = baseNode.parentNode;
    // }
    const baseNode =
      selection.baseNode.parentNode !== contentRef.current
        ? selection.baseNode.parentNode
        : selection.baseNode;
    const index = Array.prototype.indexOf.call(
      contentRef.current.childNodes,
      baseNode
    );
    console.log("index", index);
    if (index === -1) {
      console.warn("Selection has not been found");
      return;
    }
    range.setStart(
      contentRef.current.childNodes[index],
      selection.anchorOffset
    );
    range.setEnd(contentRef.current.childNodes[index], selection.extentOffset);
    range.surroundContents(document.createElement("b"));
    // console.log("contentRef.current.innerHTML", contentRef.current.innerHTML);
  };

  return (
    <div className="h-full bg-base-100 border-2 border-base-300 w-full">
      <div
        contentEditable
        ref={contentRef}
        className="outline-none py-5 px-10 w-full h-full"
        onInput={onChangeTest}
        onBlur={onChangeTest}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default Page;
