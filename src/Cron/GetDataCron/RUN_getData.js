import axios from 'axios';

// Выявить максимальную скорость используя clinic и autocannon

const config = {
	baseUrl: 'https://jsonplaceholder.typicode.com',
	entities: {
		posts: {
			url: '/posts/',
			count: 50, // max 100
		},
		comments: {
			url: '/comments/',
			count: 20, // max 500
		},
		photos: {
			url: '/photos/',
			count: 10, // max 5000
		},
		users: {
			url: '/users/',
			count: 10, // max 10
		},
	},
};

const interval = 100; // задержка
const quantityQuery = 25; // запросов в очереди

async function run() {
	let queryList = [];

	for (const entity of Object.values(config.entities)) {
		for (let i = 1; i < entity.count; i++) {
			const response = `${config.baseUrl}${entity.url}${i}`;
			queryList.push({ response });
		}
	}

	console.log('Всего будет отправлено :>> ', queryList.length, 'запросов');

	// promiseList = promiseList.slice(0, 100); // !! FOR TEST

	const timerID = setInterval(async () => {
		const queuePart = queryList.splice(0, quantityQuery);
		// console.log('queuePart :>> ', queuePart.length);
		process.stdout.write('.');
		const res = await Promise.allSettled(queuePart.map(async (el) => axios.get(el.response)));

		// остановка, если очередь запросов пуста
		if (queryList.length === 0) {
			console.log('');
			console.log('END !!!');
			clearInterval(timerID);
			process.exit(0);
			return;
		}

		res.map((el) => {
			if (el.status === 'fulfilled') {
				console.log('status :>> ', el.status);
				console.log('data :>> ', el.value.data);
				console.log('el.value :>> ', el.value.data);
			} else if (el.status === 'rejected') {
				const { method, url, headers } = el.reason.config;
				const textError = el.reason.toString();
				console.log(`el.reason :>> ${textError}`);
			}
			return el.status;
		}); // !! FOR TEST

		console.log('');
		// console.log('количество ответов :>> ', res.length); // !! FOR TEST

		console.log('Ждем :>> ', interval / 1000, 'сек.');
	}, interval);
}

// Запуск
run().catch((err) => console.log('err :>> ', err));
