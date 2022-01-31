import type { ReactElement, ReactNode } from "react";
import {
  ArrowDropDownSVGIcon,
  ArrowUpwardSVGIcon,
  CheckBoxSVGIcon,
  CheckSVGIcon,
  Configuration,
  ConfiguredIcons,
  ErrorOutlineSVGIcon,
  FileUploadSVGIcon,
  KeyboardArrowDownSVGIcon,
  KeyboardArrowLeftSVGIcon,
  KeyboardArrowRightSVGIcon,
  MenuSVGIcon,
  MenuConfiguration,
  NotificationsSVGIcon,
  RadioButtonCheckedSVGIcon,
  RemoveRedEyeSVGIcon,
} from "react-md";

const icons: ConfiguredIcons = {
  back: <KeyboardArrowLeftSVGIcon />,
  checkbox: <CheckBoxSVGIcon />,
  dropdown: <ArrowDropDownSVGIcon />,
  error: <ErrorOutlineSVGIcon />,
  expander: <KeyboardArrowDownSVGIcon />,
  forward: <KeyboardArrowRightSVGIcon />,
  menu: <MenuSVGIcon />,
  notification: <NotificationsSVGIcon />,
  password: <RemoveRedEyeSVGIcon />,
  radio: <RadioButtonCheckedSVGIcon />,
  selected: <CheckSVGIcon />,
  sort: <ArrowUpwardSVGIcon />,
  upload: <FileUploadSVGIcon />,
};

const menuConfiguration: MenuConfiguration = {
  renderAsSheet: "phone",
};

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps): ReactElement {
  return (
    <Configuration icons={icons} menuConfiguration={menuConfiguration}>
      {children}
    </Configuration>
  );
}
