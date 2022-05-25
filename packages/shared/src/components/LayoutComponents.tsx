import React, {useState} from 'react'
import Box from "@mui/material/Box";
import {ListItemButton, ListItemIcon, ListItemText, Stack, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Color} from "../components/StyleUtils";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MUIPagination from "@mui/material/Pagination";
import styled from '@emotion/styled';

export const VerticalInterval: React.FC<{
  size: number | string;
}> = (props) => <div style={{ marginTop: props.size }} />;

export const HorizontalInterval: React.FC<{
  size: number | string;
}> = (props) => <div style={{ marginLeft: props.size }} />;

export const BlockContents: React.FC<{
  title?: string;
  title_sub?: string;
  maxHeight?: string;
  rightContent?: React.ReactNode;
}> = (props) => {
  return (
    <Box>
      <Stack
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        marginRight={'30px'}
      >
        {props.title && (
          <h2 style={{ margin: '60px 0 20px 0', fontSize: '1.625rem' }}>
            {props.title}
          </h2>
        )}
        {props.title_sub && (
          <div
            style={{
              margin: '16px 30px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            {props.title_sub}
          </div>
        )}
        {props.rightContent}
      </Stack>
      <Box
        style={{
          maxHeight: props.maxHeight || '300px',
          overflow: 'auto',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const CustomTabs: React.FC<{
  tabs: string[];
  onClick?: (newValue: string) => void;
}> = (props) => {
  const [value, setValue] = useState<string>(props.tabs[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (props.onClick) props.onClick(newValue);

    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: Color.primary }}>
          <TabList onChange={handleChange} variant={'scrollable'}>
            {props.tabs.map((m, i) => {
              return <TabContainer key={i} label={m} value={m} />;
            })}
          </TabList>
        </Box>
        {props.children}
      </TabContext>
    </Box>
  );
};

const TabContainer = styled(Tab)({
  '&.Mui-selected': {
    background: Color.primary,
    color: Color.white,
    '&.tabBlack': {
      background: Color.black,
      color: Color.white,
    }
  },
  border: '1px solid #a7aec9',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  color: '#a7aec9',
});

export const Pagination: React.FC<{
  curPage: number;
  totalPage: number;
  rowsPerPage: number;
  handleChangeRowsPerPage: (event: any) => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  style?: React.CSSProperties;
}> = (props) => {
  return <Box style={props.style}>
      <Box
        sx={{ display: 'flex', color: '#666' }}
        justifyContent={'right'}
        alignItems={'center'}
      >
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ pr: 2 }}
        >
          Page {props.curPage + 1} / {props.totalPage}
        </InputLabel>
        <FormControl variant="standard">
          <SelectStyle
            className="select"
            value={props.rowsPerPage}
            onChange={props.handleChangeRowsPerPage}
          >
            {[5, 10, 15].map((v: any) => (
              <MenuItem key={v} value={v}>
                {v}개씩
              </MenuItem>
            ))}
          </SelectStyle>
        </FormControl>
      </Box>
      <MUIPagination
        color="primary"
        count={props.totalPage}
        showFirstButton
        showLastButton
        page={props.curPage + 1}
        onChange={props.handleChangePage}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </Box>
}

export const LnbListItem: React.FC<{
  id: string
  label: string
  depth: number
  url: string
  isChild: boolean
  active: boolean
  icon?: React.ReactNode
  onClick?: (id: string, url: string, isChild: boolean) => void
}> = props => {
  const padding = props.depth * 20;
  const className = props.active? "active" : undefined

  return <ListItemButton
    className={className}
    sx={{pl: padding.toString() + "px"}}
    onClick={() => {
      if (props.onClick) props.onClick(props.id, props.url, props.isChild)
    }}>
    {
      props.icon && <ListItemIcon>
        {props.icon}
      </ListItemIcon>
    }
    <ListItemText primary={
      props.label
    }/>
  </ListItemButton>
}

const SelectStyle = styled(Select)`
  border: 1px solid #d7dae6;
  width: 121px;
  height: 40px;
  padding: 0;
  .MuiSelect-select {
    padding: 0 20px 0 16px;
    height: 40px;
    line-height: 40px;
  }
  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

