// import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsStopwatch } from "react-icons/bs";
import { PiBookOpenTextBold } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { useState } from "react";

const CourseLine = () => {
  const [element, setElement] = useState(1);

  const handleElement = (element) => {
    setElement(element);
  };

  return (
    <div>
      <div className="flex min-h-[80vh] flex-col-reverse gap-2 bg-[#B3CBD0] px-2 py-3 lg:flex-row lg:gap-8">
        <div className="z-50 my-4 rounded border-[1px] border-gray-300 bg-white px-4 pb-10 pt-4 md:w-1/3 lg:w-1/5">
          <p className="merb mb-5 pt-2 text-[20px]">Course Progress</p>
          <div className="flex items-center justify-between border-b-2 border-gray-300 pb-5">
            <p className="text-[16px] text-[#445D6E]">Videos Watched</p>
            <p className="font-serif font-semibold">0/12</p>
          </div>

          <p className="amib my-3">Lessons</p>
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <PiBookOpenTextBold className="mt-2" />
              <div>
                <p className="amir text-start">What is Nutrition?</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Reading 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <MdQuiz className="mt-2" />
              <div>
                <p className="amir text-start">Practice Quiz</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Quiz 10 min
                </p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <PiBookOpenTextBold className="mt-2" />
              <div>
                <p className="amir text-start">What is Nutrition?</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Reading 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <MdQuiz className="mt-2" />
              <div>
                <p className="amir text-start">Practice Quiz</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Quiz 10 min
                </p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <PiBookOpenTextBold className="mt-2" />
              <div>
                <p className="amir text-start">What is Nutrition?</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Reading 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <MdQuiz className="mt-2" />
              <div>
                <p className="amir text-start">Practice Quiz</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Quiz 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <PiBookOpenTextBold className="mt-2" />
              <div>
                <p className="amir text-start">What is Nutrition?</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Reading 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <MdQuiz className="mt-2" />
              <div>
                <p className="amir text-start">Practice Quiz</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Quiz 10 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 my-4 flex flex-col justify-start rounded border-[1px] border-gray-300 bg-white px-4 pb-10 pt-4  sm:px-4 md:w-2/3 md:px-8 lg:w-4/5">
          <p className="text-[16px] text-[#445D6E]">
            Home &gt; Nutrition Leadership &gt; Introduction
          </p>
          <div className="flex items-center justify-between py-5">
            <p className="mer text-[24px] text-[#02203C]">1- Introduction</p>
            <div className="flex flex-nowrap items-start justify-center gap-2 text-[#445D6E]">
              <BsStopwatch className="mt-1 font-bold" />
              <p className="font-semibold">5 min</p>
            </div>
          </div>
          <p className="pop text-[16px] font-medium text-[#445D6E]">
            Review this consepts for this week: Consecteur adipiscing elit duis
            tristique sollicuitudin nibh sit consecteur adipiscing elit duis
            tristique sollicuitudin nibh sit
          </p>
          <p className="pop pt-4 text-[16px] font-medium text-[#445D6E]">
            Hint: it starts with &quot;proper nutrition and diet&quot;
          </p>
          <div className="flex flex-col items-center justify-center">
            <iframe
              // width="853"
              // height="480"
              src="https://www.youtube.com/embed/Ovry6x71gxE"
              title="Dr Iftekhar Rashid | Keynote Speech | Ethiopian Nutrition Leaders Network - ENLN | 2023 Annual Forum"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mt-10 h-[458.44px] w-screen lg:max-w-[815px]"
            ></iframe>
          </div>
          <div className="flex flex-col md:flex-row gap-2 px-2 sm:px-4 md:px-8 lg:px-20 justify-between pt-8 items-center border-t-2 border-b-2 border-[#445D6E] mt-10 py-3">
            <p className="font-bold text-xl text-[#445D6E]">Descrition</p>
            <p className="font-bold text-xl text-[#445D6E]">Q$A</p>
            <p className="font-bold text-xl text-[#445D6E]">Comments</p>
            <p className="font-bold text-xl text-[#445D6E]">Resource</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-center py-2 text-2xl pt-10">Elevate Your Impact: Unleash Your Inner Nutrition Leader</p>
<br/>
Empower yourself, your organization, and your community with ENLN Academy's comprehensive Nutrition Leadership Training.
<br/>
This transformative program, designed for individuals, organizations, and even governments, equips you with the essential skills and knowledge to:
<br/>
 Champion impactful nutrition strategies: Learn to develop, implement, and evaluate effective nutrition initiatives that create lasting positive change.<br/>
 Inspire and motivate others: Cultivate effective communication and leadership skills to engage stakeholders, build coalitions, and drive action.<br/>
 Navigate complex systems: Gain the knowledge and confidence to navigate policy landscapes, secure funding, and overcome challenges.<br/>
 Become a trusted influencer: Sharpen your advocacy skills to influence policy, shape public opinion, and promote optimal health for all.
<br/>
Whether you're a:
<br/>
<br/>Nutrition professional: Seeking to advance your career and make a broader impact.
<br/>Public health official: Working to develop and implement effective nutrition programs.
<br/>Community leader: Passionate about improving the health and well-being of your community.
<br/>Government representative: Looking to shape policy and legislation that promotes healthy eating.
<br/>
This training is for you!
<br/>
In this comprehensive program, you'll gain:
<br/> Evidence-based knowledge: Master the latest science and best practices in nutrition to inform your leadership decisions. <br/> Leadership development:Hone your communication, collaboration, and conflict resolution skills to effectively lead teams and inspire action. Policy and advocacy expertise:** Understand the policy landscape and learn how to advocate for positive change.<br/>
Networking opportunities: Connect with fellow nutrition leaders and build a strong support network.
<br/>
Invest in yourself and empower others!
<br/>
Join ENLN Academy's Nutrition Leadership Training and become a driving force for positive change in the world of nutrition.
<br/>
Call to action:
<br/>
Visit our website to learn more and register for the training.
Download our brochure for a detailed program overview.
Contact us to discuss your specific needs and how this training can benefit you.
<br/>
**Together, let's create a healthier future for all!**
<br/>
I hope this is a good starting point for your text about the nutrition leadership training course. Feel free to adapt it further to include specific details about the program, such as its duration, format, cost, and instructors. You can also add testimonials from past participants or highlight the unique features of the training program offered by ENLN Academy.
          </div>
          <div className="flex flex-col md:flex-row gap-2 px-2 sm:px-4 md:px-8 lg:px-20 justify-between pt-8 items-center border-t-2 border-b-2 border-[#445D6E] mt-10 py-3">
            <p className="font-bold text-xl text-[#445D6E]">Descrition</p>
            <p className="font-bold text-xl text-[#445D6E]">Q$A</p>
            <p className="font-bold text-xl text-[#445D6E]">Comments</p>
            <p className="font-bold text-xl text-[#445D6E]">Resource</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-center py-2 text-2xl pt-10">Elevate Your Impact: Unleash Your Inner Nutrition Leader</p>
<br/>
Empower yourself, your organization, and your community with ENLN Academy's comprehensive Nutrition Leadership Training.
<br/>
This transformative program, designed for individuals, organizations, and even governments, equips you with the essential skills and knowledge to:
<br/>
 Champion impactful nutrition strategies: Learn to develop, implement, and evaluate effective nutrition initiatives that create lasting positive change.<br/>
 Inspire and motivate others: Cultivate effective communication and leadership skills to engage stakeholders, build coalitions, and drive action.<br/>
 Navigate complex systems: Gain the knowledge and confidence to navigate policy landscapes, secure funding, and overcome challenges.<br/>
 Become a trusted influencer: Sharpen your advocacy skills to influence policy, shape public opinion, and promote optimal health for all.
<br/>
Whether you're a:
<br/>
<br/>Nutrition professional: Seeking to advance your career and make a broader impact.
<br/>Public health official: Working to develop and implement effective nutrition programs.
<br/>Community leader: Passionate about improving the health and well-being of your community.
<br/>Government representative: Looking to shape policy and legislation that promotes healthy eating.
<br/>
This training is for you!
<br/>
In this comprehensive program, you'll gain:
<br/> Evidence-based knowledge: Master the latest science and best practices in nutrition to inform your leadership decisions. <br/> Leadership development:Hone your communication, collaboration, and conflict resolution skills to effectively lead teams and inspire action. Policy and advocacy expertise:** Understand the policy landscape and learn how to advocate for positive change.<br/>
Networking opportunities: Connect with fellow nutrition leaders and build a strong support network.
<br/>
Invest in yourself and empower others!
<br/>
Join ENLN Academy's Nutrition Leadership Training and become a driving force for positive change in the world of nutrition.
<br/>
Call to action:
<br/>
Visit our website to learn more and register for the training.
Download our brochure for a detailed program overview.
Contact us to discuss your specific needs and how this training can benefit you.
<br/>
**Together, let's create a healthier future for all!**
<br/>
I hope this is a good starting point for your text about the nutrition leadership training course. Feel free to adapt it further to include specific details about the program, such as its duration, format, cost, and instructors. You can also add testimonials from past participants or highlight the unique features of the training program offered by ENLN Academy.
          </div>
          <div className="mt-10  flex items-center justify-between gap-2 border-b-[1px] border-t-[1px] border-gray-300 px-2 py-3 sm:px-4 md:px-10 lg:px-20">
            <p
              onClick={() => handleElement(1)}
              className={element === 1 ? "merb cursor-pointer  text-2xl px-3 font-bold border-b-2 border-gray-500 sm:block":"amir cursor-pointer  text-xl font-semibold sm:block"}
            >
              Description
            </p>
            <p
              onClick={() => handleElement(2)}
              className={element === 2 ? "merb cursor-pointer  text-2xl px-3 font-bold border-b-2 border-gray-500 sm:block":"amir cursor-pointer  text-xl font-semibold sm:block"}
            >
              Q&A
            </p>
            <p
              onClick={() => handleElement(3)}
              className={element === 3 ? "merb cursor-pointer  text-2xl px-3 font-bold border-b-2 border-gray-500 sm:block":"amir cursor-pointer  text-xl font-semibold sm:block"}
            >
              Comments
            </p>
            <p
              onClick={() => handleElement(4)}
              className={element === 4 ? "merb cursor-pointer  text-2xl px-3 font-bold border-b-2 border-gray-500 sm:block":"amir cursor-pointer  text-xl font-semibold sm:block"}
            >
              Resource
            </p>
          </div>
          <div>
            <div style={{ display: element === 1 ? "block" : "none" }}>
              <p>Description Detail</p>
            </div>
            <div style={{ display: element === 2 ? "block" : "none" }}>
              <p>Q&A Detail</p>
            </div>
            <div style={{ display: element === 3 ? "block" : "none" }}>
              <p>Comments Detail</p>
            </div>
            <div style={{ display: element === 4 ? "block" : "none" }}>
              <p>Resource Detail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLine;
