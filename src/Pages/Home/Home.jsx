import './Home.css'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useState, useMemo, useCallback, useRef } from 'react';
import ListDropdown from '../../Components/Dropdown/Dropdown';

function Home() {
  // const listLegend = [
  //   {label: 'First Name', entry: 'firstname'},
  //   {label: 'Last Name', entry: 'lastname'},
  //   {label: 'Start Date', entry: 'start'},
  //   {label: 'Department', entry: 'department'},
  //   {label: 'Date of Birth', entry: 'dateOfBirth'},
  //   {label: 'Street', entry: 'street'},
  //   {label: 'City', entry: 'city'},
  //   {label: 'State', entry: 'state'},
  //   {label: 'Zip Code', entry: 'zipcode'},
  // ]

  // const [rowData] = useState([
  //   {make: "Toyota", model: "Celica", price: 35000},
  //   {make: "Ford", model: "Mondeo", price: 32000},
  //   {make: "Porsche", model: "Boxster", price: 72000}
  // ]);
  const gridRef = useRef();
  const [columnDefs, setcolumnDefs] = useState(
  //   [
  //   { field: 'FirstName' },
  //   { field: 'LastName' },
  //   { field: 'StartDate' },
  //   { field: 'Department' },
  //   { field: 'DateofBirth' },
  //   { field: 'Street' },
  //   { field: 'City' },
  //   { field: 'State' },
  //   { field: 'ZipCode' }
  // ])

  [
    {
      headerName: "First Name",
      field: "FirstName",
      minWidth: 130,
    },
    {
      headerName: "Last Name",
      field: "LastName",
      minWidth: 130,
    },
    {
      headerName: "Start Date",
      field: "StartDate",
    },
    {
      headerName: "Department",
      field: "Department",
    },
    {
      headerName: "Date of Birth",
      field: "DateofBirth",
    },
    {
      headerName: "Street",
      field: "Street",
    },
    {
      headerName: "City",
      field: "City",
    },
    {
      headerName: "State",
      field: "State",

    },
    {
      headerName: "Zip Code",
      field: "ZipCode",
      minWidth: 110,
    }
  ])

  const defaultColDef = useMemo(() => {
    return {
      minWidth: 120,
      sortable: true,
      resizable: true,
      unSortIcon: true
    };
  }, []);

  const autoSizeColumns = params => {
    const colIds = params.columnApi
      .getAllDisplayedColumns()
      .map(col => col.getColId());

    params.columnApi.autoSizeColumns(colIds);
  };
  const onGridReady = params => {
    params.api.sizeColumnsToFit();
  };

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById('page-size-select').value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);

  // { field: 'FirstName''LastName''StartDate''Department''DateofBirth''Street''City''State''ZipCode'
  const rowData = [
    { FirstName: 'Toyota', LastName: 'Celica', State: 35777, DateofBirth: '07/09/2000' },
    { FirstName: 'Honda', LastName: 'solange', State: 35999, DateofBirth: '08/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'Mercedes', LastName: 'coco', State: 77000, DateofBirth: '10/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },
    { FirstName: 'BWX', LastName: 'dimi', State: 44444, DateofBirth: '09/09/2000' },

  ];

  return (
    <>
    <div className='header-ag-grid'>
        <div className="page-size">
          Show:
          <select onChange={onPageSizeChanged} id="page-size-select">
            <option value="10" defaultValue={true}>
              10
            </option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
      <div className='searchbar'>
        <label className='label-filter'>Search:</label>
        <input className='searchbar-input'
                type="text"
                id="filter-text-box"
                placeholder="Filter..."
                onInput={onFilterTextBoxChanged}
              />
      </div>
    </div>
    <div className="ag-theme-alpine-dark" style={{height: 800, width: '100%', margin:0}}>
           <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              onFirstDataRendered={autoSizeColumns}
              onGridReady={onGridReady}
              defaultColDef={defaultColDef}
              ref={gridRef}
              pagination={true}
              paginationPageSize={10}
              >
           </AgGridReact>
       </div>
    </>
  )
}

export default Home