import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import {Pagination} from "../components/LayoutComponents";
import {useCallback, useEffect} from "react";
import styled from '@emotion/styled';
import {FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import {CustomRadioButtons} from "../components/ButtonComponents";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DatePicker, LocalizationProvider} from "@mui/lab";

export interface CustomHeadCell<T> {
  id: keyof T;
  label: string;
  align?: 'left' | 'center' | 'right';
}

export interface CustomRowData<T> {
  key: string;
}

export const TableComponents: React.FC<{
  headCells: CustomHeadCell<any>[],
  bodyRows: CustomRowData<any>[],
  tableCell: (index: number) => JSX.Element
  page: number,
  rowsPerPage: number,
  rowCount: number,
  isCheckBox?: boolean,
  handleClick?: (key: string) => void
  onChangePagination?: (page: number, rowPerPage: number) => void
}> = props => {
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(props.page);
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage);

  useEffect(() => {
    if (props.onChangePagination) props.onChangePagination(page, rowsPerPage)
  }, [page, rowsPerPage])

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = props.bodyRows.map((n) => n.key);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    key: string
  ) => {
    if (props.isCheckBox) {
      const selectedIndex = selected.indexOf(key);
      let newSelected: readonly string[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, key);
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
    }

    if (props.handleClick) props.handleClick(key);
  };

  const totalPage = props.rowCount <= rowsPerPage ? 1 : Math.floor((props.rowCount / rowsPerPage) + 1);

  return <Box sx={{width: '100%'}} paddingX={2}>
    <TableContainer>
      <Table
        sx={{minWidth: 750}}
        size={"small"}
      >
        <EnhancedTableHead
          headCells={props.headCells}
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={rowsPerPage}
          isCheckBox={props.isCheckBox}
        />

        <EnhancedTableBody
          rows={props.bodyRows}
          rowsPerPage={rowsPerPage}
          isSelected={(key: string) => selected.indexOf(key) !== -1}
          handleClick={handleClick}
          isCheckBox={props.isCheckBox}
          tableCell={props.tableCell}
        />

      </Table>
    </TableContainer>

    <Pagination
      curPage={page}
      totalPage={totalPage}
      rowsPerPage={rowsPerPage}
      handleChangePage={(event: unknown, newPage: number) => {
        setPage(newPage - 1);
      }}
      handleChangeRowsPerPage={(event: any) => {
        setRowsPerPage(event.target.value);
      }}
    />
  </Box>
}

const EnhancedTableHead: React.FC<{
  headCells: CustomHeadCell<any>[];
  numSelected: number;
  rowCount: number;
  isCheckBox?: boolean;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  const { onSelectAllClick, numSelected, rowCount, isCheckBox } = props;

  return (
    <TableHead style={{ backgroundColor: 'gray' }}>
      <TableRow>
        {isCheckBox && (
          <TableCell padding="checkbox">
            <CheckboxStyle
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected >= rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
        )}
        {props.headCells.map((headCell) => {
          return (
            <TableCell
              key={headCell.id as string}
              align={headCell.align || 'right'}
            >
              {headCell.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableBody: React.FC<{
  rows: CustomRowData<any>[],
  rowsPerPage: number,
  isSelected: (name: string) => boolean,
  tableCell: (index: number) => JSX.Element,
  handleClick: (event: React.MouseEvent<HTMLTableRowElement>, name: string) => void
  isCheckBox?: boolean
}> = props => {
  const {rowsPerPage, isSelected, handleClick, isCheckBox} = props;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = rowsPerPage -  props.rows.length

  return <TableBody>
    {
      props.rows.map((row, index) => {
        const isItemSelected = isSelected(row.key);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
          <TableRow
            key={row.key}
            hover
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            selected={isItemSelected}
            onClick={(event: React.MouseEvent<HTMLTableRowElement>) => {
              handleClick(event, row.key);
            }}>
            {
              isCheckBox && <TableCell padding="checkbox">
                <CheckboxStyle
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </TableCell>
            }
            {props.tableCell(index)}
          </TableRow>
        );
      })}
    {
      emptyRows > 0 && (
        <TableRow
          style={{
            height: 33 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
}

export const TableSelectCell: React.FC<{
  label: string
  selectLabel: string[]
  thSpan?: number
  thWidth?: string | number
  tdSpan?: number
  tdWidth?: string | number
  division?: boolean
  onClick?: (selectValue: string) => void
}> = props => {
  const [select, SetSelect] = React.useState<string>("")
  return <>
    <TableHeaderCell width={props.thWidth} colSpan={props.thSpan}>
      {props.label}
    </TableHeaderCell>
    <TableBodyCell
      width={props.tdWidth}
      colSpan={props.tdSpan}
      sx={{borderRight: props.division ? "1px solid #d7dae6" : undefined}}
    >
      <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select label={props.label} value={select} onChange={(event: SelectChangeEvent) => {
          if (props.onClick) props.onClick(event.target.value)
          SetSelect(event.target.value)
        }}>
          {
            props.selectLabel.map((m, i) => {
              return <MenuItem key={i} value={m}>{m}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </TableBodyCell>
  </>
}

export const TableInputCell: React.FC<{
  label: string
  thSpan?: number
  thWidth?: string | number
  tdSpan?: number
  tdWidth?: string | number
  division?: boolean
  onChange?: (text: string) => void
}> = props => {
  return <>
    <TableHeaderCell width={props.thWidth} colSpan={props.thSpan}>
      {props.label}
    </TableHeaderCell>
    <TableBodyCell
      width={props.tdWidth}
      colSpan={props.tdSpan}
      sx={{borderRight: props.division ? "1px solid #d7dae6" : undefined}}
    >
      <FormControl fullWidth>
        <TextField
          label={props.label}
          variant={"outlined"}
          onChange={(e) => {
            if (props.onChange) props.onChange(e.target.value)
          }}/>
      </FormControl>
    </TableBodyCell>
  </>
}

export const TableDateTermCell: React.FC<{
  label: string
  thSpan?: number
  thWidth?: string | number
  tdSpan?: number
  tdWidth?: string | number
  division?: boolean
  onChange?: (text: string) => void
}> = props => {
  const [start, setStart] = React.useState<Date | null>(new Date());
  const [end, setEnd] = React.useState<Date | null>(new Date());

  return <>
    <TableHeaderCell width={props.thWidth} colSpan={props.thSpan}>
      {props.label}
    </TableHeaderCell>
    <TableBodyCell
      width={props.tdWidth}
      colSpan={props.tdSpan}
      sx={{borderRight: props.division ? "1px solid #d7dae6" : undefined}}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <DatePicker
              value={start}
              openTo={"day"}
              views={['year', 'month', 'day']}
              onChange={(newValue) => {
                setStart(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
          <FormControl fullWidth>
            <DatePicker
              value={end}
              openTo={"day"}
              views={['year', 'month', 'day']}
              onChange={(newValue) => {
                setEnd(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Stack>
      </LocalizationProvider>
    </TableBodyCell>
  </>
}

export const TableRadioCell: React.FC<{
  label: string
  row?: boolean
  thSpan?: number
  thWidth?: string | number
  tdSpan?: number
  tdWidth?: string | number
  division?: boolean
  onClick?: (selected: string) => void
}> = props => {
  return <>
    <TableHeaderCell width={props.thWidth} colSpan={props.thSpan}>
      {props.label}
    </TableHeaderCell>
    <TableBodyCell
      width={props.tdWidth}
      colSpan={props.tdSpan}
      sx={{borderRight: props.division ? "1px solid #d7dae6" : undefined}}
    >
      <CustomRadioButtons
        row={props.row}
        data={["test", "test4"]}
        onClick={(selected: string) => {
          if (props.onClick) props.onClick(selected)
        }}/>
    </TableBodyCell>
  </>
}

const TableHeaderCell = styled(TableCell)`
  height: 72px;
  color: #222;
  font-weight: 500;
`
const TableBodyCell = styled(TableCell)`
  padding: 0 10px;
`

export const CheckboxStyle = styled(Checkbox)`
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
