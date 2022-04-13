import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import api from '~/api';
const fetcher = (url: string, params: any = {}) =>
  api({
    method: 'get',
    url,
    params: { page: params.page + 1, itemsPerPage: params.pageSize },
  });
export default () => {
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 2,
    rowCount: 0,
  });
  const [list, setList] = useState([]);
  const { data, isValidating } = useSWR(
    [`/common/api/boards/usp-temp1/articles`, pagination],
    fetcher
  );
  const syncData = () => {
    if (!!data) {
      setList(() => data.list);
      // 게시물 총 갯수
      setPagination((state) => ({ ...state, rowCount: data.totalItems }));
    }
  };
  useEffect(syncData, [data]);
  const handleChange = (page: number) => {
    setPagination((state) => ({ ...state, page }));
  };
  const handleSizeChange = (pageSize: number) => {
    setPagination((state) => ({ ...state, pageSize }));
  };
  //* List 가 없을 때
  if (!list.length) return <div>loading...</div>;
  //* 데이터 로드 후 Datagrid 설정
  const rows = list.map((v: any) => {
    return { id: v.articleId, title: v.title, updatedDt: v.updatedDt };
  });
  const columns = [
    { field: 'title', headerName: '제목', width: 150 },
    { field: 'updatedDt', headerName: '업데이트', width: 150 },
  ];
  return (
    <div style={{ marginTop: 120, height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        loading={isValidating}
        rowsPerPageOptions={[2, 4]}
        pagination
        {...pagination}
        paginationMode="server"
        onPageChange={handleChange}
        onPageSizeChange={handleSizeChange}
      />
    </div>
  );
};
