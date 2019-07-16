import { uniqueId } from 'lodash';

export default class BookstoreService {
  constructor(data) {
    this.data = data;
  }

  getAveragePrices = goods => {
    const allPrice = goods.reduce((acc, { price }) => acc + Number(price), 0);
    return Math.round((allPrice / (goods.length + 1)) * 100) / 100;
  };

  getSumOfPrices = goods => {
    return goods.reduce((acc, { price }) => acc + Number(price), 0);
  };

  getTotalNumber = goods => {
    return goods.length;
  };

  getData(goods) {
    if (!goods || goods.length === 0) {
      const totalNumber = 0;
      const sumOfPrices = 0;
      const averagePrice = 0;
      return { totalNumber, sumOfPrices, averagePrice };
    }
    const totalNumber = this.getTotalNumber(goods);
    const sumOfPrices = this.getSumOfPrices(goods);
    const averagePrice = this.getAveragePrices(goods);
    return { totalNumber, sumOfPrices, averagePrice };
  }

  setData(item) {
    const x = { id: uniqueId() + 10, ...item };
    this.data.push(x);
  }

  dellItem(idDell) {
    const filtredData = this.data.filter(el => el.id !== idDell);
    this.data = filtredData;
  }

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 1) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 900);
    });
  }
}
