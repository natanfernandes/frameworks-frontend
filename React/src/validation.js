export function minLengthValidation(minLength, value) {
    if (value.trim().length < minLength) {
      return `Este campo requer pelo menos ${minLength} caracteres`
    }
    return null
}

export default minLengthValidation;