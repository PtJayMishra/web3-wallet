import axios from 'axios';
import { goerli } from '../models/Chain';



export class TransactionService {

  static API_URL =  'https://eth-mainnet.g.alchemy.com/v2';
  static API_KEY =  '/r9OY_g4L-ygtpJq9hFb5kUejTVns2F6u';

  static async getTransactions(address: string) {
    const options = {
        method: 'GET',
        url: `${TransactionService.API_URL}/${address}`,
        params: {chain: goerli.name.toLowerCase()},
        headers: {accept: 'application/json', 'X-API-Key': TransactionService.API_KEY}
      };

    const response = await axios.request(options);
    return response;
  }

}