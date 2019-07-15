import { uniqueId } from 'lodash';

export default class BookstoreService {
  data = [
    {
      id: '1',
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: '2',
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
  ];

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

  getData = goods => {
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
  };

  setData = item => {
    const newItem = { ...item, id: uniqueId() + 10 };
    this.data.push(newItem);
  };

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
