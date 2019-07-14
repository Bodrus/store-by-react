export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
  ];

  getAveragePrices = goods => {
    const allPrice = goods.reduce((acc, { price }) => acc + price, 0);
    return Math.round((allPrice / (goods.length + 1)) * 100) / 100;
  };

  getSumOfPrices = goods => {
    return goods.reduce((acc, { price }) => acc + price, 0);
  };

  getTotalNumber = goods => {
    return goods.length;
  };

  getData = goods => {
    const totalNumber = this.getTotalNumber(goods);
    const sumOfPrices = this.getSumOfPrices(goods);
    const averagePrice = this.getAveragePrices(goods);
    return { totalNumber, sumOfPrices, averagePrice };
  };

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
