import React,{useState} from 'react';

interface props {
    isOpen: boolean;
    closeModal: () => void;
}

const SendNotification = ({isOpen, closeModal} : props) => {
    

    return (
        <div className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30" onClick={closeModal}></div>


        <div className="relative z-50 p-[30px] w-[92%] md:w-[70%] lg:w-[40%] bg-white shadow-2xl text-black rounded-lg m-auto">
            <div className="flex justify-between">
              <h3>CART</h3>
              <button
                className="text-secondary-600 underline hover:text-primary-800"
              >
                Remove all
              </button>
            </div>

            
                <div
                  className="flex justify-between items-center my-[25px]"
                  
                >
                  <div className="flex gap-4">
                    
                    <div className="flex flex-col gap-3">
                      <span className="font-bold">Name</span>
                      <span className="text-secondary-600">
                        8522
                      </span>
                    </div>
                  </div>

                  <div className=" py-[12px] px-[20px] bg-secondary-800 flex justify-between w-[130px] text-black font-semibold">
                    <span className="cursor-pointer" >-</span>
                    <span className="cursor-pointer">Amount</span>
                    <span className="cursor-pointer" >+</span>
                  </div>
                </div>
              

            <div className="flex justify-between my-[25px] items-center">
              <span className="text-secondary-600">TOTAL</span>
              <span className="font-bold">Price</span>
            </div>
          </div>
      </div>
    );
};

export default SendNotification;