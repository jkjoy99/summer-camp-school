import React, { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [payment, setPayment] = useState([])

    useEffect(() => {
        fetch("https://summer-camp-school-server-jkjoy99.vercel.app/payments")
            .then(res => res.json())
            .then(data => {
                //  console.log(data)
                setPayment(data)
            })
    }, [])

    return (
        <div className='py-10'>
            <Helmet>
        <title>Music Instrument | Payment-History</title>
      </Helmet>
            <div className='max-w-[950px] mx-auto'>
                <div className='lg:bg-[#FFF] bg-transparent lg:p-[30px] p-0'>
                    <div className='flex lg:flex-row flex-col justify-between items-center mb-7'>
                        <h3 className='text-2xl font-bold uppercase text-[#151515] lg:mb-0 mb-3'>Total Payment Classes: {payment?.length || 0}</h3>
                    </div>

                    <div className="overflow-x-auto w-full">
                        <table className=" w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-center bg-[royalblue] text-[#FFF] font-semibold'>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>No.</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>IMAGE</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>INSTRUCTOR NAME</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>CLASS</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>PRICE</th>
                                    <th className='p-4 whitespace-nowrap text-[14px]'>DATE</th>
                                </tr>
                            </thead>
                            <tbody className='border-[1px]'>
                                {/* row 1 */}
                                {
                                    payment.map((items, index) => <tr key={index} className='border-b-[1px] border-[#e8e8e8] text-center'>
                                        <td className='p-4 whitespace-nowrap'>{index + 1}</td>
                                        <td className='p-4 whitespace-nowrap'>
                                            <img src={items?.classImage} alt="" className='w-[50px] h-[50px] mx-auto' />
                                        </td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.instructorName}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.className}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>${items?.price}</td>
                                        <td className='text-[#737373] p-4 whitespace-nowrap'>{items?.date}</td>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;