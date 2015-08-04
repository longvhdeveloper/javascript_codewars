/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
	'use strict';

	return {
		/**
		 * Returns true when the given number is a valid Harshad number.
		 *
		 * @param {Number} number The given number
		 * @returns {Boolean}
		 * @function Harshad.isValid
		 */
		isValid: function( number ) {
			// Your implementation goes here
			var str_number = String(number);
			var total_digit = 0;
			for ( var i = 0; i < str_number.length; i++) {
				total_digit += str_number[i];
			}
			return (number % total_digit === 0) ? true : false;
		},
		/**
		 * Gets the next Harshad number after the given number.
		 *
		 * @param {Number} number The given number
		 * @returns {Number}
		 * @function Harshad.getNext
		 */
		getNext: function( number ) {
			// Your implementation goes here
			while (true) {
				number++;
				var total_digit = 0;
				var str_number = String(number);
				for ( var i =0; i < str_number.length; i++) {
					total_digit += str_number[i];
				}
				
				if (number % total_digit === 0) {
					return number;
				}
			}
		},
		/**
		 * Returns the suite of Harshad numbers, starting after a given number.
		 *
		 * @param {Number} count The number of elements to return
		 * @param {Number} start The number after which the serie should start;
		 *	defaults to 0
		 * @returns {Array}
		 * @function Harshad.getSerie
		 */
		getSerie: function( count, start ) {
			// Your implementation goes here
			var result  = [];
			
			return result;
		}
	};

} () );