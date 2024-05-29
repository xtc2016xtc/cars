"use client";
import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }



  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          快速查找,预定车辆 -- 筛选
        </h1>

        <p className="hero__subtitle">
          通过我们简化预定流程优化您的租车体验
        </p>
        {/* 通用型组件--button */}
        <CustomButton 
          title="搜索汽车"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} 
          btnType={"button"}        />
      </div>
      {/* 背景图 */}
      <div className="hero__image-container">
        <div className="hero__image">
          {/* 汽车logo */}
          <Image src="/hero.png" alt="hero" fill
          className="object-contain"/>
          {/* 汽车背景图片 */}
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero

