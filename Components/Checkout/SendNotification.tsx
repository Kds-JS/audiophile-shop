import Image from 'next/image';
import Link from 'next/link';
import React,{useState, useEffect} from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useAppSelector, useAppDispatch} from 'redux/app/hooks';
import { clearCart } from 'redux/features/cartSlice';
import { formatPrice } from 'utils/helpers';

interface props {
    isOpen: boolean;
    closeModal: () => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
  img: string;
}

const SendNotification = ({isOpen, closeModal} : props) => {

  const dispatch = useAppDispatch();

  const [cart, setCart] = useState<CartItem[]>([]);

  const [showMore, setShowMore] = useState(false);

    const newCart = useAppSelector((state) => state.cart);



    useEffect(() => {
        setCart(newCart.cart);
    }, [newCart]);

    const backToHome = () => {
      closeModal;
      dispatch(clearCart());
    }
    

    return (
        <div className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30"></div>

        <div className="relative z-50 p-[30px] w-[92%] md:w-[70%] lg:w-[35%] bg-white shadow-2xl text-black rounded-lg m-auto">
            <div className="flex justify-center">
                <BsCheckCircleFill className='text-primary-800 text-[60px]'/>
            </div>

            <div className='text-center my-[25px]'>
                <h3 className='mb-[20px]'>THANK YOU FOR YOUR ORDER</h3>
                <p>You will receive an email confirmation shortly</p>
            </div>

             
            <div className='grid grid-cols-2 items-center justify-center '>
                <div className='bg-secondary-800 py-[25px] px-[25px] rounded-tl-lg rounded-bl-lg'>

                  {!showMore ? (
                  cart.length != 0 && (
                    <div
                    className="flex justify-between items-start"
                    
                  >
                    <div className="flex gap-4">
                      <Image src={cart[0].img} alt="image" width={70} height={70} />
                      <div className="flex flex-col gap-3">
                        <span className="font-bold text-black">{cart[0].name}</span>
                        <span className="text-secondary-700 font-medium">
                          {formatPrice(cart[0].price)}
                        </span>
                      </div>
                    </div>
  
                    <div className=" text-black font-semibold">
                     x{cart[0].amount}
                    </div>
                  </div>
                  )
                  
                  )
                  :
                  (

                  cart.length != 0 &&
                  cart.map((item, index) => (
                    <div
                      className="flex justify-between items-start my-[25px]"
                      key={index}
                    >
                      <div className="flex gap-4">
                        <Image src={item.img} alt="image" width={70} height={70} />
                        <div className="flex flex-col gap-3">
                          <span className="font-bold text-black">{item.name}</span>
                          <span className="text-secondary-600">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>

                      <div className=" text-black font-semibold">
                      x{item.amount}
                      </div>
                    </div>
                  ))

                  )}


                    {cart.length <= 1 ? "" : <div className='text-center cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show one more"}</div>}
                </div>

                <div className='bg-primary-600 h-[100%] py-[25px] flex flex-col justify-center items-center rounded-tr-lg rounded-br-lg'>
                    <p className='text-secondary-700 mb-[15px]'>Grand Total</p>
                    <p className='text-white'>{formatPrice(newCart.total + 50)}</p>
                </div>

                
            </div>

            
              <Link href="/" onClick={backToHome}>
                  <div className='py-[15px] mt-[50px] bg-primary-800 text-white font-bold hover:opacity-70 w-full text-center'>
                  
                          BACK TO HOME
                  
                </div>
              </Link>
          

            
          </div>

          
      </div>
    );
};

export default SendNotification;