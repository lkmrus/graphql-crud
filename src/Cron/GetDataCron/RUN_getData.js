const axios = require('axios');
const { fakedata } = require('./../../Config/default');
const GetData = require('./GetData');



const run = async () => {
	let queryList = [];

	for (const [table, entity] of Object.entries(fakedata.entities)) {
		for (let i = 1; i < entity.count; i++) {
			const response = `${fakedata.baseUrl}${entity.url}${i}`;
			queryList.push({ response, table });
		}
	}
	

	console.log('Всего будет отправлено :>> ', queryList.length, 'запросов');

	const getData = new GetData(queryList);
	await getData.getData()
}

// Запуск
run().catch((err) => console.log('err :>> ', err));
