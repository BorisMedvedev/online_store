export const fetchDataFromApi = async () => {
  try {
    const response = await fetch('https://shop-frontent.ru/wp-json/wp/v1/products');

    if (!response.ok) {
      throw new Error('Ошибка при запросе к API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных из API:', error);
    return null;
  }
};

