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

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; //租金
  const mileageFactor = 0.1; //每公里附加费用
  const ageFactor = 0.05; //每年附加费用

  // 根据里程和年限计算附加费用
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // 每天的租金
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};