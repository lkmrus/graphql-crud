const interval = 100; // задержка
const quantityQuery = 15; // запросов в очереди
const axios = require('axios');

module.exports = class GetData {
	constructor(queryList) {
		this.i = 0;
		this.queryList = queryList;
		this.responseData = [];
		this.data = [];
		this.timerID = null;
	}

	/**
	 * Получаем данные сервера
	 */
	getData() {
		this.timerID = setInterval(async () => {
			const queuePart = this.queryList.splice(0, quantityQuery);
			// console.log('queuePart :>> ', queuePart.length);
			process.stdout.write('.');
			const res = await Promise.allSettled(
				queuePart.map(async (el) => {
					return {
						table: el.table,
						data: axios.get(el.response),
					};
				})
			);
			// console.log('res :>> ', res);
			this.responseData.push(res);

			// остановка, если очередь запросов пуста
			if (this.queryList.length === 0) {
				console.log('');
				console.log('Получили !!!');
				this._parseToDB();
			}

			console.log('');
			// console.log('количество ответов :>> ', res.length); // !! FOR TEST

			console.log('Ждем :>> ', interval / 1000, 'сек.');
		}, interval);
	}

	/** Парсим в базу */
	_parseToDB() {
		this.responseData.map((el) => {

            // console.log('el :>> ', el);
    
			if (el.status === 'fulfilled') {
				switch (data.value.table) {
					case 'users':
						break;
					case 'comments':
						break;
					case 'posts':
						break;
					default:
						break;
				}
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
		console.log('Разобрали !!!');

		// Пишем в базу
		clearInterval(this.timerID);
	}
};
