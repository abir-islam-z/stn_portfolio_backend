/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/**
 * OBJECT FLATTENING, UNFLATTENING & FORMDATA UTILITIES
 * A comprehensive solution for handling nested objects in web applications
 * Perfect for form data processing, API calls, and data transformation
 */

// =====================================================
// FLATTENING FUNCTION
// =====================================================

/**
 * Flattens a nested object into a single-level object with dot notation keys
 * @param {Object} obj - The object to flatten
 * @param {string} prefix - The prefix for keys (used internally for recursion)
 * @returns {Object} - Flattened object with dot notation keys
 */
function flattenObject(obj: Record<string, any>, prefix = '') {
  // Initialize the result object to store flattened key-value pairs
  const flattened = {} as Record<string, any>;

  // Iterate through each key-value pair in the object
  for (const key in obj) {
    // Check if the property belongs to the object itself (not inherited)
    // Using Object.prototype.hasOwnProperty.call() for safety
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Create the new key with proper dot notation
      // If prefix exists, use "prefix.key", otherwise just "key"
      const newKey = prefix ? `${prefix}.${key}` : key;

      // Get the current value
      const value = obj[key];

      // Check if the value is an object and not null
      if (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value)
      ) {
        // Recursively flatten nested objects
        // Spread the result to merge with current flattened object
        Object.assign(flattened, flattenObject(value, newKey));
      }
      // Handle arrays by converting them to indexed objects
      else if (Array.isArray(value)) {
        // Iterate through array elements
        value.forEach((item, index) => {
          // Create array index key (e.g., "features.0", "features.1")
          const arrayKey = `${newKey}.${index}`;

          // If array item is an object, flatten it recursively
          if (item !== null && typeof item === 'object') {
            Object.assign(flattened, flattenObject(item, arrayKey));
          } else {
            // If array item is primitive, add it directly
            flattened[arrayKey] = item;
          }
        });
      }
      // Handle primitive values (string, number, boolean, null)
      else {
        flattened[newKey] = value;
      }
    }
  }

  return flattened;
}

// =====================================================
// UNFLATTENING FUNCTION
// =====================================================

/**
 * Reconstructs a nested object from a flattened object with dot notation keys
 * @param {Object} flatObj - The flattened object to unflatten
 * @returns {Object} - Reconstructed nested object
 */
function unflattenObject(flatObj: Record<string, any>) {
  // Initialize the result object
  const unflattened = {} as Record<string, any>;

  // Process each flattened key-value pair
  for (const flatKey in flatObj) {
    // Using Object.prototype.hasOwnProperty.call() for safety
    if (Object.prototype.hasOwnProperty.call(flatObj, flatKey)) {
      // Split the dot notation key into path segments
      const keys = flatKey.split('.');
      // Get the value for this flattened key
      const value = flatObj[flatKey];

      // Start traversing from the root of the unflattened object
      let current = unflattened;

      // Navigate through the key path, creating nested structure
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];

        // Check if the next key is a number (indicates array index)
        const isNextKeyNumeric =
          !isNaN(parseInt(nextKey)) && parseInt(nextKey).toString() === nextKey;

        // If current key doesn't exist, create it
        if (!current[key]) {
          // Create array if next key is numeric, otherwise create object
          current[key] = isNextKeyNumeric ? [] : {};
        }

        // Move to the next level in the nested structure
        current = current[key];
      }

      // Set the final value at the last key in the path
      const finalKey = keys[keys.length - 1];
      current[finalKey] = value;
    }
  }

  return unflattened;
}

// =====================================================
// FORMDATA UTILITY FUNCTION
// =====================================================

/**
 * Adds flattened object data to a FormData instance
 * Perfect for sending complex objects through multipart/form-data
 * @param {FormData} formData - The FormData instance to append to
 * @param {Object} data - The object data to flatten and add
 * @param {string} prefix - Optional prefix for all form field names
 */
function addFlattenedDataToFormData(
  formData: FormData,

  data: any,
  prefix = '',
) {
  // First, flatten the input data
  const flattenedData = flattenObject(data, prefix) as Record<string, any>;

  // Iterate through each flattened key-value pair
  for (const key in flattenedData) {
    // Using Object.prototype.hasOwnProperty.call() for safety
    if (Object.prototype.hasOwnProperty.call(flattenedData, key)) {
      const value = flattenedData[key];

      // Convert value to string if it's not null/undefined
      // FormData requires string values
      if (value !== null && value !== undefined) {
        formData.append(key, value.toString());
      } else {
        // Handle null/undefined values by appending empty string
        formData.append(key, '');
      }
    }
  }
}

// =====================================================
// ENHANCED FORMDATA UTILITY WITH FILE SUPPORT
// =====================================================

/**
 * Enhanced version that handles File objects and Blobs properly
 * @param {FormData} formData - The FormData instance to append to
 * @param {Object} data - The object data to process
 * @param {string} prefix - Optional prefix for form field names
 */

function addDataToFormDataEnhanced(formData: FormData, data: any, prefix = '') {
  // Helper function to process nested objects and arrays

  function processValue(value: any, key: string) {
    // Handle File objects and Blobs directly
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    }
    // Handle arrays
    else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${key}.${index}`;
        processValue(item, arrayKey);
      });
    }
    // Handle nested objects
    else if (value !== null && typeof value === 'object') {
      for (const nestedKey in value) {
        // Using Object.prototype.hasOwnProperty.call() for safety
        if (Object.prototype.hasOwnProperty.call(value, nestedKey)) {
          const fullKey = `${key}.${nestedKey}`;
          processValue(value[nestedKey], fullKey);
        }
      }
    }
    // Handle primitive values
    else {
      const stringValue =
        value !== null && value !== undefined ? value.toString() : '';
      formData.append(key, stringValue);
    }
  }

  // Process the root object
  for (const key in data) {
    // Using Object.prototype.hasOwnProperty.call() for safety
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      processValue(data[key], fullKey);
    }
  }
}

// =====================================================
// UTILITY FUNCTIONS FOR DEBUGGING
// =====================================================

/**
 * Pretty prints a flattened object for debugging
 * @param {Object} flatObj - The flattened object to display
 */

function debugFlattenedObject(flatObj: any) {
  console.log('Flattened Object Structure:');
  console.log('==========================');
  for (const key in flatObj) {
    // Using Object.prototype.hasOwnProperty.call() for safety
    if (Object.prototype.hasOwnProperty.call(flatObj, key)) {
      console.log(`${key} → ${flatObj[key]}`);
    }
  }
}

/**
 * Displays FormData contents in a readable format
 * @param {FormData} formData - The FormData to display
 */
function debugFormData(formData: FormData) {
  console.log('FormData Contents:');
  console.log('==================');
  for (const [key, value] of formData.entries()) {
    console.log(`${key} → ${value}`);
  }
}

// =====================================================
// EXPORT FOR MODULE USAGE (if using modules)
// =====================================================

// Uncomment the following lines if using ES6 modules:

export {
  addDataToFormDataEnhanced,
  addFlattenedDataToFormData,
  debugFlattenedObject,
  debugFormData,
  flattenObject,
  unflattenObject,
};

// For CommonJS (Node.js), uncomment:
/*
module.exports = {
    flattenObject,
    unflattenObject,
    addFlattenedDataToFormData,
    addDataToFormDataEnhanced,
    debugFlattenedObject,
    debugFormData
};
*/
