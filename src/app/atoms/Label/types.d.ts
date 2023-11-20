export interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  displayRequiredSymbol?: boolean;
  maxLength?: number | null;
  currentLength?: number | null;
}

export interface LengthInputI {
  current?: number;
  max?: number;
}

