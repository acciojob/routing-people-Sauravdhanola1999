export const getProducts = async () => {

    return [
      { id: 1, name: 'iPhone 12', price: 799, description: 'Latest Apple iPhone', image: '/images/iphone12.jpg' },
      { id: 2, name: 'Samsung Galaxy S21', price: 999, description: 'Latest Samsung Galaxy', image: '/images/galaxys21.jpg' },
    ];
  };
  
  export const getProductById = async (id) => {

    return { id, name: 'iPhone 12', price: 799, description: 'Latest Apple iPhone', image: '/images/iphone12.jpg' };
  };
  
  export const deleteProduct = async (id) => {
    console.log(`Deleted product with id: ${id}`);
  };
  