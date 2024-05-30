import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
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
      </div>
    </main>
  );
}
