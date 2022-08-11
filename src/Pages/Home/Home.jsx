import './Home.css'

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * Create a homepage with array of employees with ag-grid
 * @returns { JSX }
*/
function Home() {
  const gridRef = useRef();
  const [columnDefs, setcolumnDefs] = useState()
  const employees = useSelector(state => state.data)
  
  // We define the headings of the table
  const column = [
    {headerName: "First Name",field: "FirstName"},
    {headerName: "Last Name",field: "LastName"},
    {headerName: "Start Date",field: "StartDate"},
    {headerName: "Department",field: "Department"},
    {headerName: "Date of Birth",field: "DateofBirth"},
    {headerName: "Street",field: "Street"},
    {headerName: "City",field: "City"},
    {headerName: "State",field: "State"},
    {headerName: "Zip Code",field: "ZipCode"}
  ]

  /** AG-grid style of array *Resizable and Sortable****************************************************** */
  const defaultColDef = useMemo(() => {
      return {sortable: true, resizable: true, unSortIcon: true, flex: 1}
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  // Display the number of employees per page
  const onPageSizeChanged = useCallback(() => {
    const value = document.getElementById('page-size-select').value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);
  /********************************************************** */

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
              <option value="10" defaultValue={true}>10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
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
                rowData={employees}
                columnDefs={columnDefs}
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