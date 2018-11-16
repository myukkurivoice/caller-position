export function caller() {
	/**
	 * go one line back for the caller
	 * @type {string}
	 */
	let stackLine = (new Error).stack.split("\n")[2];
	/**
	 * retrieve the file basename & positional data, after the last `/` to the `)` 
	 */
	// 
	let caller_line = stackLine.slice(stackLine.lastIndexOf('/'),stackLine.lastIndexOf(')'))
	/**
	 *  test for no `/` ; if there is no `/` then use filename without a prefixed path
	 */ 
	if ( caller_line.length == 0 ) {
		caller_line = stackLine.slice(stackLine.lastIndexOf('('),stackLine.lastIndexOf(')'))
	}
	/**
	 * filename_base - parse out the file basename; remove first `/` char and go to `:`
	 */
	let filename_base = caller_line.slice(0+1,caller_line.indexOf(':'));
	/**
	 * line_no - parse out the line number ; remove first `:` char and go to 2nd `:`
	 */
	let line_no = caller_line.slice(caller_line.indexOf(':')+1,caller_line.lastIndexOf(':'));
	/**
	 * line_pos - line positional - from the last `:` to the end of the string
	 */
	let line_pos = caller_line.slice(caller_line.lastIndexOf(':')+1);

    return {
        filename_base: filename_base,
        line_no: line_no,
        line_pos: line_pos,
    };
};
