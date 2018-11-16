export function caller() {
	let stackLine = (new Error).stack.split("\n")[2];
	let caller_line = stackLine.slice(stackLine.lastIndexOf('/'),stackLine.lastIndexOf(')'))
	if ( caller_line.length == 0 ) {
		caller_line = stackLine.slice(stackLine.lastIndexOf('('),stackLine.lastIndexOf(')'))
	}
	let filename_base = caller_line.slice(0+1,caller_line.indexOf(':'));
	let line_no = caller_line.slice(caller_line.indexOf(':')+1,caller_line.lastIndexOf(':'));
	let line_pos = caller_line.slice(caller_line.lastIndexOf(':')+1);

    return {
        filename_base: filename_base,
        line_no: line_no,
        line_pos: line_pos,
    };
};
export function position() {
	let stackLine = (new Error).stack.split("\n")[2];
	let caller_line = stackLine.slice(stackLine.lastIndexOf('/'),stackLine.lastIndexOf(')'))
	if ( caller_line.length == 0 ) {
		caller_line = stackLine.slice(stackLine.lastIndexOf('('),stackLine.lastIndexOf(')'))
	}
	let filename_base = caller_line.slice(0+1,caller_line.indexOf(':'));
	let line_no = caller_line.slice(caller_line.indexOf(':')+1,caller_line.lastIndexOf(':'));
	let line_pos = caller_line.slice(caller_line.lastIndexOf(':')+1);

    return `${filename_base}:${line_no}`;
}
