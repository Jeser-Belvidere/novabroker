import fs from 'node:fs';

const LOG_PATH = './novabroker-logs.log';

export function log(
	level: 'info' | 'warn' | 'error',
	message: string,
	error?: Error | unknown
): void {
	const messageLog = `[${level}] ${new Date(Date.now()).toISOString()} --> ${message} ${
		error ? `--> ErrorLog: ${error}` : ''
	}`;

	if (!fs.existsSync(LOG_PATH)) {
		fs.writeFileSync(LOG_PATH, 'Initial log\n');
	}

	fs.appendFile(LOG_PATH, `${messageLog}\n`, function (err) {
		if (err) throw err;
	});

	if (level === 'info') console.info(messageLog);
	if (level === 'warn') console.warn(messageLog);
	if (level === 'error') {
		mailErrorToAdmin(error, messageLog);
		console.error(messageLog);
	}
}
