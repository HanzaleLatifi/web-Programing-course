import React from 'react'

export const Footer = () => {
  return (

            <div className=" bg-slate-900">
                <div className="max-w-2xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3"> اپلیکیشن ما را دانلود کنید</h3>
                        <p> در دو نسخه android , ios </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center border rounded-lg  w-auto mx-2 transition-all px-4 py-2  border-red-700   hover:bg-red-700 hover:text-slate-200 cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 mx-1 md:w-8"/>
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center border rounded-lg  w-auto mx-2 transition-all px-4 py-2  border-red-700   hover:bg-red-700 hover:text-slate-200 cursor-pointer">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 mx-1 md:w-8"/>
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col md:flex-row md:justify-center items-center text-sm  text-gray-400">
                          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; design by hanzale latifi </p> 
                    </div>
                </div>
            </div>
  )
}
