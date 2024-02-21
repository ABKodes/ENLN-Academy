import React, { useState } from 'react';
import blog from '../../data/data.json';

const convertToEmbeddedURL = (inputUrl) => {
  const parts = inputUrl.split('/');
  const videoId = parts[parts.length - 1];
  return `https://www.youtube.com/embed/${videoId}`;
};

const CourseLine = () => {
  const [selectedItemId, setSelectedItemId] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [element, setElement] = useState(1);


  const handleAnswerChange = (questionIndex, choiceIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: choiceIndex,
    });
  };

  const handleElement = (element) => {
    setElement(element);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
      <div className='col-span-1 bg-white border-2 border-gray-100 shadow-xl min-h-screen py-5'>
      <p className="merb mb-5 pt-2 text-[20px] text-center">Course Progress</p>
          <div className="flex items-center justify-between border-b-2 border-gray-300 pb-5 px-3 lg:px-6">
            <p className="text-[18px] text-[#445D6E] amir">Videos Watched</p>
            <p className="font-serif font-semibold">0/12</p>
          </div>
        {blog.map((item, index) => (
          <div key={index} className='text-black cursor-pointer px-2 md:px-6 pt-8 justify-center' onClick={() => setSelectedItemId(item.id)}>
            <div className='flex justify-start items-start gap-3'>
              <img src={item.icon} alt={item.title} className='w-[20px] h-[20px] rounded-xl'/>
              <div>
                <h1 className='amir text-[17px] amir'>{item.title}</h1>
                <p className='amir text-[16px] text-gray-500 mt-1'>{item.min}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='col-span-1 lg:col-span-3 bg-white border-gray-100 shadow-xl border-2 rounded min-h-screen text-black p-5'>
        <p className='mt-4 amir font-semibold'>Home &gt; Nutrition Leadership &gt; Introduction</p>
        {blog
          .filter(item => item.id === selectedItemId) 
          .map((selectedItem, index) => (
            <div key={index}>
              <p className='text-gray-800 font-semibold text-[20px] md:text-[22px] lg:text-[24px] py-5 '>{index+1}- {selectedItem.title}</p>
              <p className="pop text-[16px] font-medium text-[#445D6E]">{selectedItem.description}</p>
              {selectedItem.content_type === 'video' && (
                <iframe
                  // width='560'
                  // height='315'
                  src={convertToEmbeddedURL(selectedItem.video_url)}
                  title={selectedItem.title}
                  frameBorder='0'
                  allowFullScreen
                  className="mt-10 h-[600.44px] w-full lg:max-w-full"
                ></iframe>
              )}
              {selectedItem.content_type === 'text' && (
                <p>{selectedItem.text_content}</p>
              )}
              {selectedItem.content_type === 'quiz' && (
                <div>
                  {selectedItem.quiz_questions.map((question, idx) => (
                    <div key={idx} className='text-black'>
                      <h3>{question.question}</h3>
                      <div className='flex flex-col'>
                        {question.choices.map((choice, cIdx) => (
                          <label key={cIdx} className='flex items-center mb-2'>
                            <input
                              type='radio'
                              value={cIdx}
                              checked={selectedAnswers[idx] === cIdx}
                              onChange={() => handleAnswerChange(idx, cIdx)}
                              className='mr-2'
                            />
                            <span>{String.fromCharCode(65 + cIdx)}. {choice}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div>
          <div className="bg-[#B3CBD0] w-full my-10">
            <div className="flex w-full md:flex-row gap-2 px-2 sm:px-4 md:px-8 justify-between lg:gap-32 pt-8 items-center my-5 py-3 bg-[#B3CBD0]">
              <button className="bg-green-500 py-2 px-16 rounded-xl text-white ">Prev</button>
              <button className="bg-green-500 py-2 px-16 rounded-xl text-white ">Next</button>
            </div>
            </div>

            <div>
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
            <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-center py-2 text-2xl pt-10 amir">Elevate Your Impact: Unleash Your Inner Nutrition Leader</p>
<br/>
<p className='text-[16px] font-medium text-gray-600 amir px-2 md:px-6 '>Empower yourself, your organization, and your community with ENLN Academy's comprehensive Nutrition Leadership Training.
<br/>
This transformative program, designed for individuals, organizations, and even governments, equips you with the essential skills and knowledge to:
<br/>
 Champion impactful nutrition strategies: Learn to develop, implement, and evaluate effective nutrition initiatives that create lasting positive change.<br/>
 Inspire and motivate others: Cultivate effective communication and leadership skills to engage stakeholders, build coalitions, and drive action.<br/>
 Navigate complex systems: Gain the knowledge and confidence to navigate policy landscapes, secure funding, and overcome challenges.<br/>
 Become a trusted influencer: Sharpen your advocacy skills to influence policy, shape public opinion, and promote optimal health for all.
<br/>
Whether you're a:
<br/>Nutrition professional: Seeking to advance your career and make a broader impact.
<br/>Public health official: Working to develop and implement effective nutrition programs.
<br/>Community leader: Passionate about improving the health and well-being of your community.
<br/>Government representative: Looking to shape policy and legislation that promotes healthy eating.
<br/>
This training is for you!
<br/>
In this comprehensive program, you'll gain:
<br/> Evidence-based knowledge: Master the latest science and best practices in nutrition to inform your leadership decisions. <br/> Leadership development:Hone your communication, collaboration, and conflict resolution skills to effectively lead teams and inspire action. Policy and advocacy expertise: Understand the policy landscape and learn how to advocate for positive change.<br/>
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
Together, let's create a healthier future for all!
<br/>
I hope this is a good starting point for your text about the nutrition leadership training course. Feel free to adapt it further to include specific details about the program, such as its duration, format, cost, and instructors. You can also add testimonials from past participants or highlight the unique features of the training program offered by ENLN Academy.</p>
          </div>
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
     
    </div>
  );
};

export default CourseLine;
