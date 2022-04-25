type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    for (const [key, value] of Object.entries(this)) {
      if (typeof value === 'string' && !value.length) {
        throw Error(`${key} is empty`);
      }
      if (typeof value === 'number' && value <= 0) {
        throw Error(`${key} is zero`);
      }
      if (typeof value !== 'number' && typeof value !== 'string') {
        throw Error(`${key} is not valid`);
      }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue Pants', 10, 'S');
  console.log(bluePants.toString());
})();
