export function caller() {
    const stack = (new Error).stack;
    if (!stack) {
        return {filename_base: 'UNKNOWN', line_no: 0, line_pos: 0};
    }
    const stackSplitted = stack.split('\n');
    if (stackSplitted.length < 3) {
        return {filename_base: 'UNKNOWN', line_no: 0, line_pos: 0};
    }
    const stackLine = stackSplitted[2];
	let caller_line = stackLine.slice(stackLine.lastIndexOf('/'), stackLine.lastIndexOf(')'));
	if (caller_line.length == 0) {
		caller_line = stackLine.slice(stackLine.lastIndexOf('('), stackLine.lastIndexOf(')'));
	}
	const filename_base = caller_line.slice(0 + 1, caller_line.indexOf(':'));
	const line_no = caller_line.slice(caller_line.indexOf(':') + 1, caller_line.lastIndexOf(':'));
	const line_pos = caller_line.slice(caller_line.lastIndexOf(':') + 1);

    return {
        filename_base: filename_base,
        line_no: line_no,
        line_pos: line_pos,
    };
}

export function position() {
    const stack = (new Error).stack;
    if (!stack) {
        return 'UNKNOWN:0';
    }
    const stackSplitted = stack.split('\n');
    if (stackSplitted.length < 3) {
        return 'UNKNOWN:0';
    }
    const stackLine = stackSplitted[2];
	let caller_line = stackLine.slice(stackLine.lastIndexOf('/'), stackLine.lastIndexOf(')'));
	if (caller_line.length == 0) {
		caller_line = stackLine.slice(stackLine.lastIndexOf('('), stackLine.lastIndexOf(')'));
	}
	const filename_base = caller_line.slice(0 + 1, caller_line.indexOf(':'));
	const line_no = caller_line.slice(caller_line.indexOf(':') + 1, caller_line.lastIndexOf(':'));

    return `${filename_base}:${line_no}`;
}
