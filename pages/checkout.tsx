import Link from 'next/link';
import React, {useState} from 'react';
import CardItem from 'Components/Checkout/CardItem';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import FormControl from 'Components/Checkout/FormControl';


import {
    general_rules,
    email_rules,
    phone_rules,
    emoney_rules,
  } from 'utils/rules';

import SendNotification from 'Components/Checkout/SendNotification';


  interface FormInput {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    emoneyNumber: string;
    emoneyPin: string;
  }

function Checkout() {
    const [isMoney,setIsMoney] = useState(true);
    
    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const { control, handleSubmit } = useForm<FormInput>({
        defaultValues: {
          name: '',
          email: '',
          phone: '',
          address: '',
          zip: '',
          city: '',
          country: '',
          emoneyNumber: '',
          emoneyPin: '',
        },
      });
    
      const onSubmit: SubmitHandler<FormInput> = (data) => {
        openModal();
      };

      

    const handleChangeRadio = (event : any) => {
        if(event.target.name == 'delivery'){
            setIsMoney(false);
        } else {
            setIsMoney(true);
        }
    }

    


    return (
        <section className='px-[4%] md:px-[6%] xl:px-[13%] py-[50px]'>
            <Link href="/" className='hover:text-primary-800 '>Go Back</Link>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-[60px] grid gap-6 grid-cols-1 lg:grid-cols-3'>
                        <div className='col-span-2 bg-white text-black rounded-md shadow-sm py-[30px] px-[20px]'>
                        <h3 className='text-black mb-[20px]'>CHECKOUT</h3>
                        <p className='text-primary-800 mb-[25px] font-medium'>BILLING DETAILS</p>

                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                         


                        
                        
                        <Controller
                        control={control}
                        name="name"
                        rules={general_rules}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                          })  => (
                            <FormControl 
                            onChange={onChange}
                            value={value}
                            error={error}
                            name='name'
                            type='text'
                            title='Name'
                            placeholder='John Doe'
                            />
                        )}
                        />
                
                    
                        <Controller
                        control={control}
                        name="email"
                        rules={email_rules}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                          })  => (
                            
                            <FormControl 
                            onChange={onChange}
                            value={value}
                            error={error}
                            name='email'
                            type='email'
                            title='Email'
                            placeholder='john@yahoo.fr'
                            />   
                            
                            )}
                            />

                        <Controller
                        control={control}
                        name="phone"
                        rules={phone_rules}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                          })  => (

                            <FormControl 
                            onChange={onChange}
                            value={value}
                            error={error}
                            name='phone'
                            type='tel'
                            title='Phone Number'
                            placeholder='+33123456789'
                            />


                            )}
                            />
                        </div>

                        <p className='text-primary-800 mt-[45px] mb-[25px] font-medium'>BILLING DETAILS</p>
                        
                        <div className='mb-[25px]'>
                            <Controller
                            control={control}
                            name="address"
                            rules={general_rules}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            })  => (
                                <FormControl 
                                onChange={onChange}
                                value={value}
                                error={error}
                                name='address'
                                type='text'
                                title='Your Address'
                                placeholder='1137 Williams Avenue'
                                />
                            )}
                            />
                        </div>

                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>

                        <Controller
                            control={control}
                            name="zip"
                            rules={general_rules}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            })  => (
                                <FormControl 
                                onChange={onChange}
                                value={value}
                                error={error}
                                name='zip'
                                type='text'
                                title='ZIP Code'
                                placeholder='20158'
                                />
                            )}
                            />
                            
                            
                            <Controller
                            control={control}
                            name="city"
                            rules={general_rules}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            })  => (
                                <FormControl 
                                onChange={onChange}
                                value={value}
                                error={error}
                                name='city'
                                type='text'
                                title='City'
                                placeholder='Paris'
                                />
                            )}
                            />

                            <Controller
                            control={control}
                            name="country"
                            rules={general_rules}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            })  => (
                                <FormControl 
                                onChange={onChange}
                                value={value}
                                error={error}
                                name='country'
                                type='text'
                                title='Country'
                                placeholder='Françe'
                                />
                            )}
                            />

                        </div>

                        <p className='text-primary-800 mt-[45px] mb-[25px] font-medium'>PAYEMENT DETAILS</p>

                        <div className='mb-[50px] grid grid-cols-1 md:grid-cols-2'>
                                <p className=' text-black font-medium'>Payment method</p>

                                <div>
                                
                                    
                                    <div className="flex items-center py-[10px] pl-4 rounded-lg border-2 border-gray-300 mb-[20px]">
                                        <input checked={isMoney} id="bordered-radio-1" type="checkbox" value='' name="e-money" className="w-4 rounded-full h-4 text-primary-800 bg-gray-100 border-gray-300 focus:ring-primary-800 " onChange={handleChangeRadio}/>
                                        <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-black  ">E-money</label>
                                    </div>
                                    <div className="flex items-center py-[10px] pl-4 rounded-lg border-2 border-gray-300 ">
                                        <input id="bordered-radio-2" checked={!isMoney} type="checkbox" value='' name="delivery" className="w-4 rounded-full h-4 text-primary-800 bg-gray-100 border-gray-300 focus:ring-primary-800 dark:focus:ring-primary-800 " onChange={handleChangeRadio}/>
                                        <label htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-black">Cash on Delivery</label>
                                    </div>


                                </div>
                        </div>

                        {isMoney ? (

                        

                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                            <Controller
                            control={control}
                            name="emoneyNumber"
                            rules={emoney_rules}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            })  => (
                                <FormControl 
                                onChange={onChange}
                                value={value}
                                error={error}
                                name='emoneyNumber'
                                type='text'
                                title='e-Money Number'
                                placeholder='238521993'
                                />
                            )}
                            />

                            <Controller
                            control={control}
                            name="emoneyPin"
                            rules={general_rules}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            })  => (
                                <FormControl 
                                onChange={onChange}
                                value={value}
                                error={error}
                                name='emoneyPin'
                                type='text'
                                title='e-Money PIN'
                                placeholder='58963'
                                />
                            )}
                            />  
                            
                        </div>
                        )
                        :
                        (

                        <div className='flex flex-col md:flex-row gap-6 md:items-center '>
                            <img src="/assets/images/checkout/icon-cash-on-delivery.svg" alt="image" className='w-[100px]'/>
                            <p>{"The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled."}</p>
                        </div>

                        )}

                        </div>
                        
                        <div>
                            <CardItem/>
                        </div>

                        </div>

                    </form>

                <SendNotification isOpen={isOpen} closeModal={() => closeModal()} />
        </section>
    );
}

export default Checkout;