"use strict";
/**
 * Formatted response class
 */
module.exports = class Responses {
	/**
       * handleSuccess Function
       * @param {object} res - Response
       * @param {int} statusCode - Status code
       * @param {string} message - Message
       * @param {object | null} data - Data
       * @return {object} - Returned Formatted Success response object
       */
	static Success(res, statusCode, message, data = null) {
		return res.status(statusCode)
			.json(data ? {
				status: statusCode,
				message,
				data
			} : {
				status: "success",
				message,
				data: null
			});
	}

  
	/**
     * validation error
     * @param {object} res  details.
     * @param {{[p: number]: *, some<T>(callbackfn: <T>(value: *, index: number, array: *[]) => unknown, thisArg?: any): boolean, keys(): IterableIterator<number>, shift(): (* | undefined), values(): IterableIterator<*>, pop(): (* | undefined), slice(start?: number, end?: number): *[], find: {<S extends *>(predicate: <T>(this:void, value: *, index: number, obj: *[]) => value is S, thisArg?: any): (S | undefined); <T>(predicate: <T>(value: *, index: number, obj: *[]) => unknown, thisArg?: any): (* | undefined)}, flat: {<U>(this:U[][][][][][][][], depth: 7): U[], <U>(this:U[][][][][][][], depth: 6): U[], <U>(this:U[][][][][][], depth: 5): U[], <U>(this:U[][][][][], depth: 4): U[], <U>(this:U[][][][], depth: 3): U[], <U>(this:U[][][], depth: 2): U[], <U>(this:U[][], depth?: 1): U[], <U>(this:U[], depth: 0): U[], <U>(depth?: number): any[], <U>(this:U[][][][][][][][], depth: 7): U[], <U>(this:U[][][][][][][], depth: 6): U[], <U>(this:U[][][][][][], depth: 5): U[], <U>(this:U[][][][][], depth: 4): U[], <U>(this:U[][][][], depth: 3): U[], <U>(this:U[][][], depth: 2): U[], <U>(this:U[][], depth?: 1): U[], <U>(this:U[], depth: 0): U[], <U>(depth?: number): any[]}, join(separator?: string): string, reduceRight: {<T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *): *; <T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *, initialValue: *): *; <U>(callbackfn: <T>(previousValue: U, currentValue: *, currentIndex: number, array: *[]) => U, initialValue: U): U}, copyWithin(target: number, start: number, end?: number): this, indexOf<T>(searchElement: *, fromIndex?: number): number, every<T>(callbackfn: <T>(value: *, index: number, array: *[]) => unknown, thisArg?: any): boolean, map<U>(callbackfn: <T>(value: *, index: number, array: *[]) => U, thisArg?: any): U[], reduce: {<T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *): *; <T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *, initialValue: *): *; <U>(callbackfn: <T>(previousValue: U, currentValue: *, currentIndex: number, array: *[]) => U, initialValue: U): U}, splice: {(start: number, deleteCount?: number): *[]; <T>(start: number, deleteCount: number, ...items: *[]): *[]}, forEach<T>(callbackfn: <T>(value: *, index: number, array: *[]) => void, thisArg?: any): void, [Symbol.iterator](): IterableIterator<*>, length: number, includes<T>(searchElement: *, fromIndex?: number): boolean, concat: {<T>(...items: ConcatArray<*>): *[]; <T>(...items: ConcatArray<*> | *[]): *[]}, sort<T>(compareFn?: <T>(a: *, b: *) => number): this, fill<T>(value: *, start?: number, end?: number): this, reverse(): *[], push<T>(...items: *[]): number, [Symbol.unscopables](): {copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean}, findIndex<T>(predicate: <T>(value: *, index: number, obj: *[]) => unknown, thisArg?: any): number, filter: {<S extends *>(callbackfn: <T>(value: *, index: number, array: *[]) => value is S, thisArg?: any): S[]; <T>(callbackfn: <T>(value: *, index: number, array: *[]) => unknown, thisArg?: any): *[]}, flatMap: {<U, This=undefined>(callback: <T>(this:This, value: *, index: number, array: *[]) => (ReadonlyArray<U> | U), thisArg?: This): U[], <U, This=undefined>(callback: <T>(this:This, value: *, index: number, array: *[]) => (ReadonlyArray<U> | U), thisArg?: This): U[]}, lastIndexOf<T>(searchElement: *, fromIndex?: number): number, entries(): IterableIterator<[number, *]>, toString(): string, unshift<T>(...items: *[]): number, toLocaleString(): string}} message  details.
     * @param {object} error  details.
     * @returns {object}.
     */
	static validationError(res, message) {
		return res.status(422).json({
			status: 422,
			message,
			error: "Validation Error"
		});
	}
  
	/**
     * Retuns a authorization error response
     * @param {object} res  details.
     * @param {string} message  details.
     * @param {object} data  details.
     * @returns {object}.
     */
	static authenticationError(res, message) {
		return res.status(401).json({
			status: 401,
			message,
			error: "Authentication Error"
		});
	}
  
	/**
     * Retuns a authorization error response
     * @param {object} res  details.
     * @param {string} message  details.
     * @param {object} data  details.
     * @returns {object}.
     */
	static authorizationError(res, message) {
		return res.status(403).json({
			status: 403,
			message,
			error: "Authorization Error"
		});
	}
  
  
	/**
     * Retuns a internal server error response
     * @param {object} res  details.
     * @param {string} message  details.
     * @returns {object}.
     */
	static InternalServerError(res, message) {
		return res.status(500).json({
			status: 500,
			message,
			error: "Iternal Server Error"
		});
	}
    
	/**
     * Retuns a not found error response
     * @param {object} res  details.
     * @param {string} message  details.
     * @param {object} data  details.
     * @returns {object}.
     */
	static notFoundError(res, message) {
		return res.status(404).json({
			status: 404,
			message,
			error: "Not Found"
		});
	}
  
	/**
     * Retuns a conflict error response
     * @param {object} res  details.
     * @param {string} message  details.
     * @param {object} data  details.
     * @returns {object}.
     */
	static conflictError(res, message) {
		return res.status(409).json({
			status: 409,
			message,
			error: "Conflict Error"
		});
	}
  
	/**
     * Retuns a bad error response
     * @param {object} res  details.
     * @param {string} message  details.
     * @param {object} data  details.
     * @returns {object}.
     */
	static badRequestError(res, message) {
		return res.status(400).json({
			status: 400,
			message,
			error: "Bad Request"
		});
	}
      
	/**
       * handleError Function
       * @param {object} res - Response\
       * @param {int} statusCode - Status code
       * @param {string} message - Message
       * @returns {object} - Returned Formatted Error response object
       */
	static Error(res, statusCode, message,) {
		return res.status(statusCode)
			.json({
				status: statusCode,
				message
			});
	}
};

  