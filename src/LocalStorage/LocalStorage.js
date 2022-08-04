/**
 * function add item in localStorage
 * @param { String } itemKey - the name of key
 * @param { String } itemValue - Add value of the key
 * @returns { localStorage }
 */
 export function formIsOpen(itemKey, itemValue) {

  return window.localStorage.setItem(itemKey, itemValue )
}


/**
 * function add item in localStorage
 * @param { String } itemKey - the name of key
 * @param { String } itemValue - Add value of the key
 * @returns { localStorage }
 */
 export function addItem(itemKey, itemValue) {
    let employees = []

    if (!getItem('list')) {
      window.localStorage.setItem(itemKey, JSON.stringify(employees))
    }
    
    const currentList = JSON.parse(getItem('list'))

    employees.push(...currentList)
    employees.push(itemValue)
    
    return window.localStorage.setItem(itemKey, JSON.stringify(employees))
  }

/**
 * function to get item in localStorage
 * @param { String } itemKey - the name of key
 * @returns { localStorage }
 */

export function getItem(itemKey) {
  return window.localStorage.getItem(itemKey)
}

/**
 * function to remove item in localStorage
 * @param { String } itemKey - the name of key
 * @returns { localStorage }
 */
export function removeItem(itemKey) {
  return window.localStorage.removeItem(itemKey)
}



