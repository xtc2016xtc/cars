import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>汽车-总览</h1>
            <p>搜索您喜欢的车辆</p>
        </div>
        {/* 筛选 */}
        <div className="home__filters">
          <SearchBar />
        {/* 车辆总览 */}
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={[]}/>
          <CustomFilter title="year" options={[]}/>
        </div>
        </div>

        {!isDataEmpty ? (
          <section>
           <div className="home__cars-wrapper">
              {allCars?.map((car)=><CarCard car={car} />) }
           </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className=" text-black text-xl font-bold">搜索失败!,没有这个车辆信息</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
