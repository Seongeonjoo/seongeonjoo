import React, { CSSProperties, Fragment, useEffect, useState} from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Color } from '~/components/StyleUtils';

export interface DefaultCheckBoxProps { label: string; disabled?: boolean; checked?: boolean}

const ButtonStyles = {
  primary: {
    width: '200px',
    height: '56px',
    bg: Color.primary,
    fg: 'white',
    border: '',
  },
  sub: {
    width: '200px',
    height: '56px',
    bg: Color.gray_sub_button,
    fg: 'white',
    border: '',
  },
  line: {
    width: '200px',
    height: '56px',
    bg: Color.white,
    fg: Color.black,
    border: Color.black,
  },
  listbtn: {
    width: '200px',
    height: '56px',
    bg: Color.white,
    fg: Color.black,
    border: '',
  },
};

export const ButtonComponents: React.FC<{
  label: string;
  type?: keyof typeof ButtonStyles;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}> = (props) => {
  const style = props.type ? ButtonStyles[props.type] : ButtonStyles.primary;

  return (
    <Button
      onClick={props.onClick}
      style={{
        width: style.width,
        height: style.height,
        backgroundColor: style.bg,
        color: style.fg,
        border: style.border,
      }}
      disabled={props.disabled}
    >
      {props.label}
    </Button>
  );
};

export const CustomRadioButtons: React.FC<{
  data: string[];
  row?: boolean;
  justifyContent?: 'center' | 'right' | 'left';
  style?: CSSProperties;
  onClick?: (selected: string) => void;
}> = (props) => {
  const [value, setValue] = useState(props.data[0]);

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    if (props.onClick) props.onClick(value);
  };

  return (
    <FormControl>
      <RadioGroup row={props.row} value={value} onChange={handlerChange}>
        {props.data.map((m, i) => {
          return (
            <FormControlLabel key={i} value={m} control={<Radio />} label={m} />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export const CustomCheckBoxs: React.FC<{
  checkbox: DefaultCheckBoxProps[];
  row?: boolean;
  justifyContent?: 'center' | 'right' | 'left';
  children?: React.ReactNode;
  style?: CSSProperties;
  onClick?: (selected: string[]) => void;
}> = (props) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (props.onClick) props.onClick(selected);
  }, [selected]);

  const handlerCheck = (label: string) => {
    const selectedIndex = selected.indexOf(label);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, label);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <Fragment>
      {props.checkbox.map((m, i) => {
        return (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                {...m}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  handlerCheck(m.label);
                }}
              />
            }
            label={m.label}
          />
        );
      })}
    </Fragment>
  );
};
