import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

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
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
        </div>

        {!isDataEmpty ? (
          <section>
            我们拥有的汽车
          </section>
        ):(
          <div>
            <h2></h2>
          </div>
        )}

      </div>
    </main>
  );
}
