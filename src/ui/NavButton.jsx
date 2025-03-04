import { TooltipComponent } from "@syncfusion/ej2-react-popups";

function NavButton({ title, customFunction, icon, color, dotColor }) {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunction}
        style={{ color }}
        className="hover:bg-light-gray relative cursor-pointer rounded-full p-3 text-xl"
      >
        <span
          style={{ background: dotColor }}
          className="absolute top-2 right-2 inline-flex h-2 w-2 rounded-full"
        >
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
}
export default NavButton;
