import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setContentRef,
  setContent,
  setExternalContent,
  changeBold,
} from "./state/reducers/textStyle";

const Page = () => {
  const contentRef = useRef(null);
  const content = useSelector((state) => state.textStyle.content);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contentRef.current) {
      dispatch(setContentRef(contentRef));
    }
  }, []);

  const onEditableChange = () => {
    if (contentRef.current) {
      dispatch(setExternalContent(contentRef.current.innerHTML));
    }
  };

  return (
    <div className="h-full bg-base-100 border-2 border-base-300 w-full">
      <div
        id="page-content"
        contentEditable
        ref={contentRef}
        className="outline-none py-5 px-10 w-full h-full"
        onInput={onEditableChange}
        onBlur={onEditableChange}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Page;
