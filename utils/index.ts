export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': '622cd565ebmsh7cf5f75bfb21595p107ed2jsn3171250b67f7',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
    headers:headers
  });

  const result = await response.json();

  return result
} 