import { LinearProgress } from "@mui/material";
import {
  DataGridPro,
  DataGridProProps,
  GridRowOrderChangeParams,
  GridSortModel,
  GRID_REORDER_COL_DEF,
  LicenseInfo
} from "@mui/x-data-grid-pro";
import React from "react";
import { DialogError } from "../Dialog";
import { DataTableWrapper } from "./DataTableWrapper";
import { NoRowsOverlay } from "./NoRowsOverlay";

LicenseInfo.setLicenseKey(
  `${process.env.NEXT_PUBLIC_MUI_DATA_GRID_PRO_LICENSE}`
);

export interface DataTableServerProps {
  firstResult: number;
  maxResults: number;
  sortColumn?: string;
  sortDirection?: string;
}

type GrpcResponse<T> = T & { totalRecords: number };

type Props<Req, Res> = {
  /**
   * Simply add a new {} to make the table refetch its data
   */
  refetch?: Record<string, undefined>;
  /**
   * Show an outline around each of the table cells. This is used for tables which have inline cell editing.
   */
  showCellOutline?: boolean;
  /**
   * Should this table enable Row Reordering? If true, the tables "sort", "search" and "filtering" functionality will be disabled.
   */
  rowReordering?: boolean;
  /**
   * The supplied callback function will be invoked with the grpc call results once ready.
   */
  cb(data: Res): void;
  /**
   * The supplied grpc call will be invoked with your supplied `grpcCallProps`.
   */
  grpcCall(request: any): Promise<GrpcResponse<Res>>;
  /**
   * These props will be provided in the grpcCall.
   * If this call handle's `search` it is recommended your wrap the search input value with a `debouncer`
   */
  grpcCallProps: Omit<Req, keyof DataTableServerProps> & { search?: string };
} & DataGridProProps;

function DataTableServer<Req, Res>({
  refetch,
  rowReordering,
  showCellOutline,
  cb,
  grpcCall,
  grpcCallProps,
  ...dataTableProps
}: Props<Req, Res>) {
  const [ loading, setLoading ] = React.useState(false);
  const [ error, setError ] = React.useState(undefined);
  const [ page, setPage ] = React.useState(0);
  const [ firstResult, setFirstResult ] = React.useState(0);
  const [ totalRecords, setTotalRecords ] = React.useState(0);
  const [ pageSize, setPageSize ] = React.useState(20);
  const [ sortModel, setSortModel ] = React.useState<GridSortModel>([]);

  React.useEffect(() => {
    const run = async () => {
      try {
        setError(undefined);
        setLoading(true);
        let requestProps = {};
        if (rowReordering) {
          requestProps = {
            firstResult,
            maxResults: pageSize,
            ...grpcCallProps,
            search: undefined,
          };
        } else {
          requestProps = {
            firstResult,
            maxResults: pageSize,
            sortColumn: sortModel[0]?.field,
            sortDirection: sortModel[0]?.sort,
            ...grpcCallProps,
          };
        }
        const res = await grpcCall(requestProps);
        setTotalRecords(res.totalRecords);
        cb(res);
        setError(undefined);
      } catch (e: any) {
        setError(e?.message ?? e);
      } finally {
        setLoading(false);
      }
    };

    if (grpcCallProps) {
      void run();
    }
  }, [
    firstResult,
    refetch,
    pageSize,
    cb,
    grpcCall,
    grpcCallProps,
    rowReordering,
    sortModel,
  ]);

  const onPageChange = React.useCallback(
    (page: number) => {
      setPage((curr) => {
        if (page > curr) {
          setFirstResult((fr) => fr + pageSize);
        } else {
          setFirstResult((fr) => Math.max(fr - pageSize, 0));
        }
        return page;
      });
    },
    [pageSize]
  );

  const onSortModelChange = React.useCallback((newModel: GridSortModel) => {
    setSortModel(newModel);
  }, []);

  const { columns, rows, ...otherDataTableProps } = dataTableProps;

  const handleRowOrderChange = React.useCallback(
    async ({ oldIndex, targetIndex }: GridRowOrderChangeParams) => {
      setLoading(true);
      const reorderProps = {
        oldIndex,
        targetIndex,
      };
      console.log("reorderProps: ", reorderProps);
      const res = await grpcCall(reorderProps);
      setTotalRecords(res.totalRecords);
      cb(res);
      setLoading(false);
    },
    [ cb, grpcCall ]
  );

  const tableBehaviouralProps: Pick<
    DataGridProProps,
    | "disableChildrenFiltering"
    | "disableChildrenSorting"
    | "disableColumnFilter"
    | "disableColumnMenu"
    | "disableMultipleColumnsFiltering"
    | "disableColumnSelector"
    | "disableMultipleColumnsSorting"
    | "sortingMode"
    | "sortingOrder"
    | "onSortModelChange"
  > = React.useMemo(() => {
    if (rowReordering) {
      return {
        disableChildrenFiltering: true,
        disableChildrenSorting: true,
        disableColumnFilter: true,
        disableColumnMenu: true,
        disableMultipleColumnsFiltering: true,
        disableMultipleColumnsSorting: true,
        disableColumnSelector: true,
        sortingMode: undefined,
        sortingOrder: [null],
        onSortModelChange: undefined,
        rowReordering: true,
      } as DataGridProProps;
    }
    return {} as DataGridProProps;
  }, [rowReordering]);

  const alteredColumns = React.useMemo(() => {
    if (rowReordering) {
      const newCols = [...columns];
      newCols.unshift(GRID_REORDER_COL_DEF);
      return newCols.map((c) => {
        return {
          ...c,
          disableColumnMenu: true,
          sortable: false,
          disableReorder: true,
        };
      });
    }
    return columns;
  }, [ rowReordering, columns ]);

  return (
    <DataTableWrapper showCellOutline={showCellOutline}>
      <DialogError message={error} />
      <DataGridPro
        autoHeight
        editMode="row"
        disableSelectionOnClick
        isCellEditable={() => false}
        isRowSelectable={() => false}
        loading={loading}
        onPageChange={onPageChange}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        page={page}
        pageSize={pageSize}
        pagination={true}
        paginationMode="server"
        rowCount={totalRecords}
        rowsPerPageOptions={[ 10, 20, 50 ]}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={onSortModelChange}
        onRowOrderChange={handleRowOrderChange}
        components={{
          LoadingOverlay: () => {
            return (
              <LinearProgress
                color="secondary"
                sx={{
                  opacity: 0.8,
                  height: "1px",
                }}
              />
            );
          },
          NoRowsOverlay: () => <NoRowsOverlay message="No records Found." />,
          NoResultsOverlay: () => <NoRowsOverlay message="No records Found." />,
        }}
        {...(otherDataTableProps as any)}
        rows={rows}
        columns={alteredColumns}
        {...tableBehaviouralProps}
      />
    </DataTableWrapper>
  );
}

export { DataTableServer };
