"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

export default function CustomFilter({ title, options,setFilter }: CustomFilterProps) {
  // const router = useRouter();
  const [selected, setSelected] = useState(options[0]); //存储选择状态
  // 更新url搜索参数并导航到响应的url
  // const handleUpdateParams = (e: { title: string; value: string }) => {
  //   const newPathName = updateSearchParams(title, e.value.toLowerCase());

  //   router.push(newPathName);
  // };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); //更新选择选项
          setFilter(e.value); // 更新url搜索参数并导航到响应的url
        }}
      >
        <div className='relative w-fit z-10'>
          {/* 列表按钮 */}
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          {/* 显示选项的过渡 */}
          <Transition
            as={Fragment} // 多个元素分组 <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {/* 列表选项框选项 */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
