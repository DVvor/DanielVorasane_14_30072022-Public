import './Home.css'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useState, useMemo, useCallback, useRef } from 'react';
import { getItem } from '../../LocalStorage/LocalStorage';
// import ListDropdown from '../../Components/ListDropdown/ListDropdown'

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
      // minWidth: 130,
    },
    {
      headerName: "Last Name",
      field: "LastName",
      // minWidth: 130,
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
      // minWidth: 110,
    }
  ])

  const defaultColDef = useMemo(() => {
    return {
      // minWidth: 150,
      sortable: true,
      resizable: true,
      unSortIcon: true,
      flex: 1,
    };
  }, []);

  // const autoSizeColumns = params => {
  //   const colIds = params.columnApi
  //     .getAllDisplayedColumns()
  //     .map(col => col.getColId());

  //   params.columnApi.autoSizeColumns(colIds);
  // };
  // const onGridReady = params => {
  //   params.api.sizeColumnsToFit();
  // };

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
    { FirstName: 'Albert', LastName: 'Celica', StartDate: '1/19/2018' , Department: 'Sales', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'Arkansas', DateofBirth: '7/28/2000' },
    { FirstName: 'Franck', LastName: 'Solange', StartDate: '2/19/2018', Department: 'Marketing', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'Alabama', DateofBirth: '8/19/2000' },
    { FirstName: 'Jose', LastName: 'Dimi', StartDate: '1/19/2018', Department: 'Legal', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'Arizona', DateofBirth: '8/1/2000' },
    { FirstName: 'Renato', LastName: 'Coco', StartDate: '1/25/2018', Department: 'Marketing', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'California', DateofBirth: '3/11/2000' },
    { FirstName: 'Benjamin', LastName: 'Dimi', StartDate: '7/1/2018', Department: 'Legal', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'California', DateofBirth: '5/12/2000' }
  ];
  const listEmployees = JSON.parse(getItem('list'))

  const Listconcat = rowData.concat(listEmployees)

  return (
    <div className='grid-page'>
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
      <div className="ag-theme-alpine-dark" style={{width: '100%', margin:0}}>
            <AgGridReact
                rowData={Listconcat}
                columnDefs={columnDefs}
                // onFirstDataRendered={autoSizeColumns}
                // onGridReady={onGridReady}
                pagination={true}
                defaultColDef={defaultColDef}
                ref={gridRef}
                paginationPageSize={10}
                >
            </AgGridReact>
      </div>
    </div>
  )
}

export default Home