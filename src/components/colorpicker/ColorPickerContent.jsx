import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import Header from "../../ui/Header";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
function ColorPickerContent() {
  return (
    <div className="m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex flex-wrap items-center justify-center gap-20">
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPickerContent;
