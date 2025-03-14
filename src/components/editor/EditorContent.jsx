import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import Header from "../../ui/Header";
import { EditorData } from "../../data/dummy";

function EditorContent() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default EditorContent;
