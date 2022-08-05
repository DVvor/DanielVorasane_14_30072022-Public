import { configureStore } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'
import { createReducer, createSlice } from '@reduxjs/toolkit'
// import { getItem } from '../Services/LocalStorage'


// Initial state 
// const employeesInfos = {
//   "FirstName": "",
//   "LastName": "",
//   "DateofBirth": "",
//   "StartDate": "",
//   "Street": "",
//   "City": "",
//   "State": "",
//   "ZipCode": "",
//   "Department": "",
// }
// const employeesInfos = []

// // Create action
// export const getEmployeeData = createAction(
//   'getEmployeeData',
//   (employee) => ({
//     payload: { data: employee }, // should be an object
//   })
// );

// // Create reducer allowing to put the employees datas in the store
// const employeeReducer = createReducer(employeesInfos, (builder) =>
//   builder
//     .addCase(getEmployeeData, (state, action) => {
//       return state.push(action.payload.data)
//     })
// )
// Action creator
// export const addEmployee = (employee) => {
//   return {
//     type: "employees/addEmployee",
//     payload: employee
//   }
// }
 
const employeesSlice = createSlice({
    // le nom du slice
    name: 'employees',
    // le state initial
    initialState: [
      { FirstName: 'Albert', LastName: 'Celica', StartDate: '1/19/2018' , Department: 'Sales', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'Arkansas', DateofBirth: '7/28/2000' },
      { FirstName: 'Franck', LastName: 'Solange', StartDate: '2/19/2018', Department: 'Marketing', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'Alabama', DateofBirth: '8/19/2000' },
      { FirstName: 'Jose', LastName: 'Dimi', StartDate: '1/19/2018', Department: 'Legal', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'Arizona', DateofBirth: '8/1/2000' },
      { FirstName: 'Renato', LastName: 'Coco', StartDate: '1/25/2018', Department: 'Marketing', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'California', DateofBirth: '3/11/2000' },
      { FirstName: 'Benjamin', LastName: 'Dimi', StartDate: '7/1/2018', Department: 'Legal', Street: '11 Road Cali', City: 'Miami', ZipCode: '77000', State: 'California', DateofBirth: '5/12/2000' }
    ],
    // reducers permet de définir les actions et le reducer
    reducers: {
        addEmployee: (state, action) => {
          // { type: "employees/addEmployee" , payload: {DATA_EMPLOYEE} }
          const newEmployee = {
            FirstName: action.payload.FirstName,
            LastName: action.payload.LastName,
            DateofBirth: action.payload.DateofBirth,
            StartDate: action.payload.StartDate,
            Street: action.payload.Street,
            City: action.payload.City,
            State: action.payload.State,
            ZipCode: action.payload.ZipCode,
            Department: action.payload.Department,
          }
          state.push(newEmployee)
        }
    } 
})

export const { addEmployee } = employeesSlice.actions

export default configureStore({
  reducer: {
    data: employeesSlice.reducer
  },
})