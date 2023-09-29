import { forwardRef } from "react";
import { ControllerProps, SelectController } from "@/components/FormElements/Select";

export const FilterSelect = forwardRef<HTMLSelectElement, ControllerProps>((props, ref) => {
    return <SelectController selectablePlaceholder selectClassName="select-sm" labelClassNames="pb-0 pt-0.5" errorAsTooltip {...props} ref={ref} />;
});
FilterSelect.displayName = "Select";