// 在Next.js应用中，"use client" 声明告知Next.js这个文件应该被当作客户端组件处理，即在浏览器端执行。
"use client";
// 导入React中的useState和Fragment，以及Headless UI的Combobox和Transition组件。
import { useState,Fragment } from 'react'
import { Combobox,Transition } from '@headlessui/react'
// 导入品牌列表。
import { manufacturers } from '@/constants';
// Next.js的Image组件，用于优化图片加载。
import Image from 'next/image'
// 导入自定义的类型定义。
import { SearchManufacturerProps } from '@/types'
// 定义SearchManufacturer函数组件，接受manufacturer和setManufacturer两个props。
const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  // 使用useState创建状态变量query和setQuery，用于存储和更新搜索框中的查询文本。
  const [query, setQuery] = useState('');
   // 根据query值过滤manufacturers列表。如果query为空，则返回所有车辆名称；否则，返回包含query关键车辆名称。
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "") // 移除所有空格
            .includes(query.toLowerCase().replace(/\s+/g, "")) // 查询时忽略大小写和空格
        );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
        <Combobox.Button className='absolute top-[14px]'>
          <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder='大众'
            displayValue={(manufacturer:string)=>manufacturer}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={()=>setQuery('')}
          >
            <Combobox.Options>
            {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  搜索 "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* 选中背景颜色 */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
