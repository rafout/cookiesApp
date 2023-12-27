import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Service {
	async sendCredential() {
		return axios({
			url: "http://192.168.0.112:8080/pedidos/id",
			method: "GET",
			headers: {},
		})
			.then((response) => {
				return Promise.resolve(response.data);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async sendRequestCookie(ingrediente1: number, ingrediente2: number, ingrediente3: number, recheio: boolean) {

		const idString = await AsyncStorage.getItem('@id');
		const id = JSON.parse(idString);

		return axios({
			url: "http://192.168.0.112:8080/pedidos",
			method: "POST",
			headers: { 
				'Content-Type': 'application/json'
			},
			data: {
				"id": id,
				"ingrediente1": ingrediente1,
				"ingrediente2": ingrediente2,
				"ingrediente3": ingrediente3,
				"recheio": recheio,
				"assado": false
			}
		})
			.then((response) => {
				return Promise.resolve(response.data);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}

	async getEstoque() {
		return axios({
			url: "http://192.168.0.112:8080/pedidos/estoque",
			method: "GET",
			headers: {},
		})
			.then((response) => {
				return Promise.resolve(response.data);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}
}

const service = new Service();
export default service;