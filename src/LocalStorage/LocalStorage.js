/**
 * function add item in localStorage
 * @param { String } itemKey - the name of key
 * @param { String } itemValue - Add value of the key
 * @returns { localStorage }
 */
 export function addItem(itemKey, itemValue) {
  return window.localStorage.setItem(itemKey, itemValue)
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



