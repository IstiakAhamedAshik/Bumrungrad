import React from 'react'
import packageimg from '../../assets/insurance/Packages-Promotion1.png'
import weacceptimg from '../../assets/insurance/We-Accept-Active2.png'
import goodvibesimg from '../../assets/insurance/Good-Vibes-2023.png'
import img1 from '../../assets/insurance/Allianz-Ayudhya1.jpg'

import OneWeAccept from './OneWeAccept'
const WeAccept = () => {
  const questionsAns = [
    {
      question: 'Thailand Company Direct Billing Contracts',
      datas: [
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
      ],
    },
    {
      question: 'Thailand Company Direct Billing Contracts',
      datas: [
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
      ],
    },
  ]
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] insurance-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Insurance
        </h1>
      </div>

      <div className='mx-10 my-10'>
        {questionsAns?.map((questionans, i) => (
          <OneWeAccept key={i} i={i} questionans={questionans} />
        ))}
      </div>
      <div className=' my-10 bg-cream'>
        <div className='flex justify-center flex-wrap p-10'>
          <img src={packageimg} alt='' srcset='' />
          <img src={weacceptimg} alt='' srcset='' />
          <img src={goodvibesimg} alt='' srcset='' />
        </div>
      </div>
    </section>
  )
}

export default WeAccept
