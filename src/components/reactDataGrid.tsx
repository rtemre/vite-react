import DataGrid, {
  CellClickArgs,
  CellKeyDownArgs,
  CellKeyboardEvent,
  CellMouseEvent,
} from "react-data-grid";

const columns = [
  { key: "id", name: "ID" },
  { key: "title", name: "Title" },
];

const rows = [
  { id: 0, title: "Example" },
  { id: 1, title: "Demo" },
  { id: 2, title: "Dummy" },
  { id: 3, title: "Constant" },
  { id: 4, title: "Falsy" },
];

export default function ReactDataGrid() {
  const handleCellClick = (
    args: CellClickArgs<any, any>,
    event: CellMouseEvent
  ) => {
    console.log("handleCellClick ===>", args, event.type);
    console.log(
      "row object ===>",
      args.row,
      "rowIdx==>",
      args.selectCell,
      "columobj===>",
      args.column
    );
  };

  const handleCellKeyDown = (
    args: CellKeyDownArgs<any, any>,
    event: CellKeyboardEvent
  ) => {
    console.log("handleCellKeyDown arg object===>", args, event.type);
    console.log(
      "row object ===>",
      args.row,
      "rowIdx==>",
      args.rowIdx,
      "columobj===>",
      args.column
    );
  };

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      onCellClick={handleCellClick}
      onCellKeyDown={handleCellKeyDown}
    />
  );
}
