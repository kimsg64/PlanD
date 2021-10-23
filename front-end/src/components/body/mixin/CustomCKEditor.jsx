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

const CustomCKEditor = () => {
  return (
    <CKEditorWrapper>
      <CKEditor
        editor={ClassicEditor}
        data="<p>추천 내용을 입력해 주세요</p>"
      ></CKEditor>
    </CKEditorWrapper>
  );
};

export default CustomCKEditor;
