// class PlaybulbCandle {
// 	constructor() {
// 		this.device = null;
// 		this.onDisconnected = this.onDisconnected.bind(this);
// 	}

// 	async request() {
// 		let options = {
// 			filters: [
// 				{
// 					name: 'PLAYBULB Candle'
// 				}
// 			],
// 			optionalServices: [ 0xff02 ]
// 		};
// 		this.device = await navigator.bluetooth.requestDevice(options);
// 		if (!this.device) {
// 			throw 'No device selected';
// 		}
// 		this.device.addEventListener('gattserverdisconnected', this.onDisconnected);
// 	}

// 	async connect() {
// 		if (!this.device) {
// 			return Promise.reject('Device is not connected.');
// 		}
// 		await this.device.gatt.connect();
// 	}

// 	async writeColor(data) {
// 		const service = await this.device.gatt.getPrimaryService(0xff02);
// 		const characteristic = await service.getCharacteristic(0xfffc);
// 		await characteristic.writeValue(data);
// 	}

// 	disconnect() {
// 		if (!this.device) {
// 			return Promise.reject('Device is not connected.');
// 		}
// 		return this.device.gatt.disconnect();
// 	}

// 	onDisconnected() {
// 		console.log('Device is disconnected.');
// 	}
// }

// var playbulbCandle = new PlaybulbCandle();

// document.querySelector('button').addEventListener('click', async event => {
// 	try {
// 		await playbulbCandle.request();
// 		await playbulbCandle.connect();
// 		/* Do something with playbulbCandle... */
// 	} catch (error) {
// 		console.log(error);
// 	}
// });
