import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import Loader from '../../shared/Loader/Loader'
import TextField from '@mui/material/TextField'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Lottie from 'lottie-react'
import notFoundAnim from '../../assets/anim/notfound.json'

export default function ParentPackages() {
  const [loader, setLoader] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [packages, setPackages] = useState([])

  //.......Package Api call.....//

  useEffect(() => {
    setLoader(true)
    let url = 'https://api.bumrungraddiscover.com/api/get/package'

    if (inputValue !== '') {
      url = `https://api.bumrungraddiscover.com/api/search/package/
${inputValue}`
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data?.status === 200) {
          setPackages(data?.data)

          setLoader(false)
        } else if (data?.status === 404) {
          setPackages([])
          setLoader(false)
        } else {
          console.log(data)
          setLoader(false)
        }
      })
  }, [inputValue])

  // ........Pagination Start....//

  const [currentPage, setCurrentPage] = useState(1)
  const pageNumberLimit = 5
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const itemsPerPage = 8
  const numberOfpage = Math.ceil(packages.length / itemsPerPage)
  const pageIndex = Array.from({ length: numberOfpage }, (_, idx) => idx + 1)

  const showpageNumber = pageIndex.filter((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return number
    } else {
      return null
    }
  })
  //console.log(showpageNumber)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handlePageChangePrev = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  const handlePageChangeNext = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const curentPackage = packages.slice(indexOfFirstItem, indexOfLastItem)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [currentPage])
  const style = {
    height: 300,
  }
  // ........Pagination End....//

  return (
    <section className='p-5 my-5 md:container md:mx-auto'>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Bumrungrad Hospital: Explore Comprehensive Healthcare Packages
          </title>
          <meta
            name='description'
            content="Discover Bumrungrad International Hospital's tailored healthcare for wellness. Start your journey to optimal health with our comprehensive packages.

"
          />
          <link
            rel='canonical'
            href='https://bumrungraddiscover.com/packages'
          />
        </Helmet>
      </HelmetProvider>
      <h2 className='text-xl font-semibold md:text-2xl lg:text-3xl capitalize text-blue'>
        our packages
      </h2>
      <div className='mt-8 flex md:justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/3  relative'>
          {' '}
          <TextField
            id='outlined-basic'
            fullWidth
            placeholder='Search Package'
            variant='outlined'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IoSearchOutline className='text-3xl text-ash !absolute right-4 top-[13px]' />
        </div>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div>
            {curentPackage.length > 0 ? (
              <div className='my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {curentPackage?.map((p, i) => (
                  <div
                    key={i}
                    className='flex flex-col justify-between  gap-2 shadow'
                  >
                    <LazyLoadImage
                      src={p?.cover_photo}
                      effect='blur'
                      alt='Bumrungrad International Hospital'
                    />
                    <div className='p-2.5 h-[210px]'>
                      <p className='font-semibold text-blue md:text-xl'>
                        {p?.title}
                      </p>
                      <p className='pb-5'>{p?.description.slice(0, 150)}</p>
                    </div>
                    <Link
                      to={`/package_details/${p.id}`}
                      className='group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br '
                    >
                      <RemoveRedEyeIcon />
                      <span className='capitalize'>See Packages</span>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className='min-h-[40vh] shadow-xl rounded p-5 mb-2.5'>
                <Lottie
                  style={style}
                  animationData={notFoundAnim}
                  loop={true}
                />
                <p className='text-xl font-semibold text-blue text-center'>
                  No Package Found
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className='flex justify-center items-center gap-2 md:gap-4 mt-8 '>
        <button
          onClick={handlePageChangePrev}
          disabled={currentPage === 1}
          class='flex items-center  gap-1 md:gap-2 md:px-6 md:py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            aria-hidden='true'
            class='w-4 h-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            ></path>
          </svg>
          Prev
        </button>
        {minPageNumberLimit >= 1 && (
          <button
            onClick={handlePageChangePrev}
            disabled={currentPage === 1}
            className=' px-3 py-2  rounded'
          >
            ....
          </button>
        )}
        {showpageNumber.map((index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            class={`px-2 py-2 md:h-10 md:max-h-[40px] md:w-10 md:max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none${
              currentPage === index ? ' bg-black text-white' : ''
            }`}
            type='button'
          >
            {index}
          </button>
        ))}
        {pageIndex.length > maxPageNumberLimit && (
          <button
            onClick={handlePageChangeNext}
            disabled={currentPage === pageIndex.length}
            className=' px-3 py-2  rounded'
          >
            ....
          </button>
        )}
        <button
          onClick={handlePageChangeNext}
          disabled={currentPage === pageIndex.length}
          class='flex items-center gap-1 md:gap-2 md:px-6 md:py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          Next
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            aria-hidden='true'
            class='w-4 h-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            ></path>
          </svg>
        </button>
      </div>
    </section>
  )
}
