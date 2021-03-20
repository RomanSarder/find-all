const isEmptyString = arg => typeof arg === 'string' && arg.trim().length == 0
const isNaN = arg => Number.isNaN(arg)
const isInfinity = arg => arg === +Infinity || arg === -Infinity
const isNegativeZero = arg => 1 / arg === -Infinity
const isObject = arg => typeof arg == 'object' && arg !== null
const isBoolean = arg => typeof arg == 'boolean'

const isValueCoercivelyMatchable = arg => 
!isObject(arg) &&
!isBoolean(arg) &&
!isEmptyString(arg) &&
!isNaN(arg) &&
!isInfinity(arg) &&
!isNegativeZero(arg)

export function findAll(searchValue, array) {
	return array.filter(arrValue => {
		if (isValueCoercivelyMatchable(searchValue) && isValueCoercivelyMatchable(arrValue)) {
			return searchValue == arrValue
		} else {
			return Object.is(searchValue, arrValue)
		}
	})
}