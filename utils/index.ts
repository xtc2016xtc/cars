import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    'x-rapidapi-key': '622cd565ebmsh7cf5f75bfb21595p107ed2jsn3171250b67f7',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
    headers:headers
  });

  // const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3`,{
  //   headers:headers
  // });
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
export const generateCarImageUrl = (car:CarProps,angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make,year,model } = car;

  url.searchParams.append('customer','hrjavascript-mastery')
  url.searchParams.append('make',make)
  url.searchParams.append('modelFamily',model.split(" ")[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}
// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('customer', '622cd565ebmsh7cf5f75bfb21595p107ed2jsn3171250b67f7' || '');
//   // url.searchParams.append('customer', 'hrjavascript-mastery');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// } 
