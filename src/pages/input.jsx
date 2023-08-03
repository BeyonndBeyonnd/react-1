import React, {useState} from "react";

const Input = () => {
  const [getName, setName] = useState('')
  const [getLastName, setLastName] = useState('')
  const handlechange = (e) => {
    setName(e.target.value)
    
  }
  const onSumit = () => {
    setLastName(getName)
    
  }
  return (
    <div className='bg-red-500 w-full h-screen flex justify-center items-center '>
            <div className='w-full text-center'>
              <input type='text' onChange={handlechange} value = {getName} placeholder='ระบุชื่อ' className='px-3 py-2 w-[30%] bg-gray-200 rounded-md border-2 border-gray-400 outline-none focus:bg-white focus:border-purple-500' required />
              <div className="mt-8">
                <button type='button' onClick={onSumit}  className="bg-green-300 px-4 py-3 w-[5%] border-white rounded-full hover:bg-green-600 duration-500">ยืนยัน</button>
              </div>
              <div className="mt-5">
                <p>{getLastName}</p>
              </div>

            </div>
        </div>
  )
}

export default Input