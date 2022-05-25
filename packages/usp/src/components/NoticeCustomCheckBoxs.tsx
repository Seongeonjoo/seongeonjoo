/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react';
import { CodeType } from "../pages/Notice/NoticeModel";
import {FormControl, styled } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup} from "@mui/material";


export const CustomCheckBoxs: React.FC<{
    checkbox: CodeType[];
    row?: boolean;
    justifyContent?: 'center' | 'right' | 'left';
    children?: React.ReactNode;
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
      <FormControl>
        <FormGroup
          row={props.row}
          style={{
            justifyContent: props.justifyContent,
          }}
        >
          {props.checkbox.map((m, i) => {
            return (
              <FormControlLabel
                key={i}
                control={
                  <CheckboxStyle
                    // {...m}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      handlerCheck(m.code);
                    }}
                  />
                }
                label={m.codeNm}
              />
            );
          })}
          {props.children}
        </FormGroup>
      </FormControl>
    );
  };

  const CheckboxStyle = styled(Checkbox)`
  .MuiSvgIcon-root {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 3px;
    path {
      display: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 1px solid #d8dbe7;
    border-radius: 3px;
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 6px;
    margin: -4px 0 0 -5px;
    border-left: 2px solid #d8dbe7;
    border-bottom: 2px solid #d8dbe7;
    transform: rotate(-45deg);
  }
  &.Mui-checked {
    &:before {
      border-color: #4063ec;
      background-color: #4063ec;
    }
    &:after {
      border-color: #fff;
    }
  }
`;