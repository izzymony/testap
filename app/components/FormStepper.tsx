'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const steps = [
  {
    title: 'Enter your phone number or email to get started',
    content: 'We will send a verification code for confirmation.',
  },
  {
    title: 'Complete profile setup',
    content: 'Connect your socials for quick setup',
  
  },
  {
    title: '',
    content: '',
  },
];

/* The `const Stepper: React.FC = () => { ... }` block defines a functional component named `Stepper`
in React using TypeScript. Inside this component: */
const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  console.log(router);
 
 /**
  * The functions `handleNext` and `handlePrev` are used to navigate to the next and previous steps in
  * a multi-step process, respectively.
  */
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else{
      router.push('./Createnew/create.tsx');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    
<main>
<div className="get-started flex mt-7">
    <img src="/Icon button 1.svg" alt=""  onClick={handlePrev}
       
          className={`${
            currentStep === 0
            
          }`}  />
    <p className="p1 mt-1 ">Get started</p>
    </div>       

    <div className="w-full max-w-lg mx-auto mt-6  px-6">
      {/* Step Bar */}
      <div className=" flex items-center justify-between mb-8 gap-1">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 h-1 rounded-full ${
              index <= currentStep ? 'bg-[#8A226F]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Step Content */}
      <div className=" text text-center mb-4">
        <h1 className=" title text-xl font-bold ">{steps[currentStep].title}</h1>
        <p className=" content mt-2 pt">{steps[currentStep].content}</p>
        {/* Here you can add your form fields based on the current step */}
        {currentStep === 0 && (
          <form>
            <input type="text" placeholder="Enter phone number of email" className="border p-2 mt-8 w-full py-4 rounded-[10px]" />
          </form>
        )}
        {currentStep === 1 && (
        
          <form>
            <div className='imbg grid grid-cols-3 gap-4 place-items-center mt-4  '>
            <img src="/Frame 1000006978 (1).svg" alt="" />
            <img src="/Frame 1000006978 (5).svg" alt="" />
            <img src="/Frame 1000006978 (6).svg" alt="" />
            </div>
            <p className='content'> Or enter manually</p>
            <input type="text" placeholder="Full name" className="border p-2 mt-4 w-full  py-4  placeholder:text-black rounded-[10px]" />
            <input type="text" placeholder="Username" className="border p-2 mt-4 w-full  py-4  placeholder:text-black rounded-[10px]" />
            <input type="text" placeholder="Phone number" className="border p-2 mt-4 w-full  py-4  placeholder:text-black rounded-[10px]" />
            <input type="text" placeholder="Email" className="border p-2 mt-4 w-full  py-4  placeholder:text-black rounded-[10px]" />
          </form>
        )}
        {currentStep === 2 && (
          <form className=''>
            <div className='border rounded-[10px] bg-red w-full  mt-3 py-10'><img src="/Group 1000006290.svg" alt="" className='-mt-4 item-center grid flex mx-auto' /><h1 className='sp mt-1'> Upload store logo</h1></div>
            <div className='py-3'>
            <input type="text" placeholder="Store name" className="border p-4 mt-2 w-full py-4 rounded-[10px] placeholder:text-black " />
            <input type="text" placeholder="Store tag name" className="border p-4 mt-2 w-full py-4 rounded-[10px]  placeholder:text-black" />
            <input type="text" placeholder="Store phone number" className="border p-4 mt-2 w-full py-3 rounded-[10px] placeholder:text-black " />
            <input type="text" placeholder="Store email" className="border p-4 mt-2 w-full py-4 rounded-[10px]  placeholder:text-black" />
            <input type="text" placeholder="Category" className="border p-4 mt-2 w-full py-4 rounded-[10px]  placeholder:text-black" />
            </div>
          </form>
        )}
      </div>

      {/* Navigation Buttons */}
      
      <div className='mt-60'>
      <button
          onClick={handleNext}
          disabled={currentStep === steps.length -1}
          className={`btn1  px-4 py-2 rounded ${
            currentStep === steps.length - 1 
            
          }`}
        > 
          Continue
        </button>
        </div>
    </div>
    </main>
    
  );
};

export default Stepper;

