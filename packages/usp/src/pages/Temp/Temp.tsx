import React, { useEffect, useState } from 'react';
import { Button, Stack, TableCell } from '@mui/material';
import { bodyRows, checkBoxParam, headCells } from '~/pages/Temp/DummyData';
import { TabPanel } from '@mui/lab';
import { DataService } from '~/service/DataService';
import { BoardData } from '~/service/Model';
import dayjs from 'shared/libs/dayjs';
import { GridCellEditCommitParams } from '@mui/x-data-grid';
import { GridSelectionModel } from '@mui/x-data-grid/models/gridSelectionModel';
import { EquipmentClassify } from '~/pages/EquipmentClassify/EquipmentClassify';
import { CustomButton, CustomCheckBoxs, CustomRadioButtons,} from 'shared/components/ButtonComponents';
import { BlockContents, CustomTabs, HorizontalInterval, VerticalInterval,} from 'shared/components/LayoutComponents';
import { ModalComponents } from 'shared/components/ModalComponents';
import DataTable from 'shared/components/CustomDataGride';
import { Icons } from 'shared/components/IconContainer';
import { TableComponents } from 'shared/components/TableComponents';

const Temp = () => {
  return (
    <div className="main-container">
      <CustomTabs
        tabs={[
          'table',
          'button',
          'modals',
          'basic Form',
          'data Grid',
          'Custom Table',
          'pro',
        ]}
      >
        <TabPanel value="table">
          <TableTest />
        </TabPanel>
        <TabPanel value="button">
          <ButtonTest />
        </TabPanel>
        <TabPanel value="modals">
          <ModalTest />
        </TabPanel>
        <TabPanel value="basic Form">
          <BasicForm />
        </TabPanel>

        <TabPanel value="data Grid">
          <DataGrideTest />
        </TabPanel>

        <TabPanel value="Custom Table">
          <EquipmentClassify />
        </TabPanel>

        <TabPanel value="pro">
          {/* <DataGridProTest /> */}
        </TabPanel>

      </CustomTabs>
    </div>
  );
};
// const DataGridProTest = () => {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100000,
//     editable: true,
//   });

//   console.log(JSON.stringify(data));
//   return (
//     <DataGridPro
//       sx={{ height: '500px' }}
//       {...data}
//       loading={data.rows.length === 0}
//       rowHeight={38}
//       checkboxSelection
//       disableSelectionOnClick
//     />
//   );
// };

const TableTest = () => {
  return (
    <TableComponents
      isCheckBox
      page={1}
      rowsPerPage={5}
      rowCount={0}
      headCells={headCells}
      bodyRows={bodyRows}
      handleClick={(key: string) => {
        console.log(key);
      }}
      tableCell={(index: number) => {
        const data = bodyRows.at(index) as any;

        return (
          <>
            {data ? (
              <>
                <TableCell sx={{ paddingLeft: 1 }}>{data.name}</TableCell>
                <TableCell align="right">{data.calories}</TableCell>
                <TableCell align="right">{data.fat}</TableCell>
                <TableCell align="right">{data.carbs}</TableCell>
                <TableCell align="right">{data.protein}</TableCell>
              </>
            ) : (
              <></>
            )}
          </>
        );
      }}
    />
  );
};

const ButtonTest = () => {
  return (
    <>
      <CustomCheckBoxs
        row
        checkbox={checkBoxParam}
        onClick={(s: string[]) => {
          if (s.length > 0) console.log(s);
        }}
      />

      <VerticalInterval size={'50px'} />
      <CustomRadioButtons
        row
        data={['??????', '??????', '??????', '?????????']}
        onClick={(selected) => {
          console.log(selected);
        }}
      />

      <VerticalInterval size={'50px'} />
      <Stack flexDirection={'row'}>
        <CustomButton label={'??????'} color={'outlined'} />
        <CustomButton
          label={'Large Primary Button'}
          style={{ margin: '0 10px' }}
        />
        <CustomButton label={'Large Secondary Button'} color={'secondary'} />

        <HorizontalInterval size={'30px'} />
        <CustomButton label={'?????? ??????'} type={'small'} color={'list'} />
        <CustomButton
          label={'?????? ??????'}
          type={'small'}
          color={'item'}
          style={{ margin: '0 10px' }}
        />
        <CustomButton label={'??????'} type={'small'} />
      </Stack>
    </>
  );
};

const ModalTest = () => {
  type modalType = 'normal' | 'confirm';
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<modalType>('normal');
  const [data, setData] = useState(false);

  const handlerModalOpen = (type: modalType) => {
    setOpen(true);
    setType(type);
  };

  return (
    <>
      <Stack flexDirection={'row'}>
        <CustomButton
          label={'normal ??????'}
          onClick={() => {
            handlerModalOpen('normal');
          }}
        />
        <HorizontalInterval size={'30px'} />
        <CustomButton
          label={'confirm ??????'}
          onClick={() => {
            handlerModalOpen('confirm');
          }}
        />
        <HorizontalInterval size={'30px'} />
        <CustomButton
          label={'data ??????'}
          onClick={() => {
            setData(true);
            handlerModalOpen('confirm');
          }}
        />
      </Stack>

      <ModalComponents
        open={open}
        type={type}
        title={'H2'}
        content={type.toString() + ' ??????'}
        onConfirm={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
          if (data) setData(false);
        }}
      >
        {data && <TableTest />}
      </ModalComponents>
    </>
  );
};

const BasicForm = () => {
  return (
    <>
      <BlockContents title={'????????? ????????????'}></BlockContents>
      <TableTest />

      <BlockContents
        title_sub={'???????????????'}
        rightContent={
          <Stack flexDirection={'row'}>
            <Button style={{ width: '24px', height: '24px' }}>
              {<Icons.Exit />}
            </Button>
            <Button style={{ width: '24px', height: '24px' }}>
              {<Icons.Exit />}
            </Button>
          </Stack>
        }
      >
        <p>
          ??? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????
          ?????? ?????? ?????? ?????? ?????? ?????? ??????{' '}
        </p>
      </BlockContents>
    </>
  );
};
const DataGrideTest = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 5,
    rowCount: 0,
  });

  const { data, isLoading } = DataService.BasicBoard(pagination);
  const [list, setList] = useState<BoardData[]>([]);

  useEffect(() => {
    if (!!data) {
      setList(data.list);

      // ????????? ??? ??????
      setPagination((state) => ({ ...state, rowCount: data.totalItems }));
    }
  }, [data]);

  //* ????????? ?????? ??? Datagrid ?????? :GridRowEntry<{title:string, updateDt: string}>[]
  const rows = list.map((v) => {
    return {
      id: v.rn,
      title: v.title,
      updatedDt: dayjs(v.updatedDt).format('YYYY-MM-DD'),
    };
  });

  const columns: any = [
    { field: 'id', headerName: 'ID', flex: 1, headerAlign: 'center' },
    {
      field: 'title',
      headerName: '??????',
      flex: 10,
      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'updatedDt',
      headerName: '????????????',
      flex: 2,
      headerAlign: 'center',
    },
  ];

  return (
    <DataTable
      isCheckBox
      loading={isLoading}
      columns={columns}
      rows={rows}
      {...pagination}
      onPageChange={(page: number) => {
        setPagination((state) => ({ ...state, page }));
      }}
      onPageSizeChange={(pageSize: number) => {
        setPagination((state) => ({ ...state, pageSize }));
      }}
      onCellEditCommit={(data: GridCellEditCommitParams) => {
        console.log(JSON.stringify(data));
      }}
      onSelectionModelChange={(data: GridSelectionModel) => {
        console.log(JSON.stringify(data));
      }}
    />
  );
};
export default Temp;
