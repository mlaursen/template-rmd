import type { ReactElement, ReactNode } from "react";
import {
  ArrowDropDownSVGIcon,
  ArrowUpwardSVGIcon,
  CheckBoxSVGIcon,
  CheckSVGIcon,
  ConfigurableIcons,
  Configuration,
  ErrorOutlineSVGIcon,
  FileUploadSVGIcon,
  KeyboardArrowDownSVGIcon,
  KeyboardArrowLeftSVGIcon,
  KeyboardArrowRightSVGIcon,
  MenuSVGIcon,
  NotificationsSVGIcon,
  RadioButtonCheckedSVGIcon,
  RemoveRedEyeSVGIcon,
} from "react-md";

const icons: ConfigurableIcons = {
  back: <KeyboardArrowLeftSVGIcon />,
  checkbox: <CheckBoxSVGIcon />,
  download: <FileUploadSVGIcon />,
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
};

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps): ReactElement {
  return <Configuration icons={icons}>{children}</Configuration>;
}
