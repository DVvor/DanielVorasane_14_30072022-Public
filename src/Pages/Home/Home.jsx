import './Home.css'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { getItem } from '../../LocalStorage/LocalStorage';

function Home() {
  const gridRef = useRef();
  const [columnDefs, setcolumnDefs] = useState()
  
  const column = [
    {headerName: "First Name",field: "FirstName"},
    {headerName: "Last Name", field: "LastName"},
    {headerName: "Last Name",field: "LastName"},
    {headerName: "Start Date",field: "StartDate"},
    {headerName: "Department",field: "Department"},
    {headerName: "Date of Birth",field: "DateofBirth"},
    {headerName: "Street",field: "Street"},
    {headerName: "City",field: "City"},
    {headerName: "State",field: "State"},
    {headerName: "Zip Code",field: "ZipCode"}
  ]

  const defaultColDef = useMemo(() => {
      return {sortable: true, resizable: true, unSortIcon: true, flex: 1}
  }, []);

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

  useEffect(() => {
    setcolumnDefs(column)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
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