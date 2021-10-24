import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

const CKEditorWrapper = styled.div`
  .ck-content {
    width: 680px;
    height: 400px;
  }
  margin-bottom: var(--margin-default);
`;

const CustomCKEditor = ({ setInfo = () => {} }) => {
  return (
    <CKEditorWrapper>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          // console.log(event);
          const data = editor.getData();
          return setInfo(data);
        }}
      />
    </CKEditorWrapper>
  );
};

export default CustomCKEditor;
