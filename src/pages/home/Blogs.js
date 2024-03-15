import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
export default function Blogs() {
  const [blogData, setBlogData] = useState()
  const [loader, setLoader] = useState()

  useEffect(() => {
    setLoader(true)
    fetch('https://api.bumrungraddiscover.com/api/get/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setBlogData(data?.data)
          setLoader(false)
        } else {
          console.log(data)
          setLoader(false)
        }
      })
  }, [])
  return (
    <div className='p-5 md:p-10 md:container md:mx-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
          Bumrungrad Health Blogs
        </h2>
        <Link
          to={'/blogs'}
          className='rounded px-2 md:px-4 py-1 md:py-2 border border-blue text-blue hover:bg-blue hover:text-white duration-300 ease-linear'
        >
          View All
        </Link>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>
          {blogData?.slice(0, 3).map((d, i) => (
            <div
              key={i}
              className='shadow rounded hover:shadow-xl duration-300 ease-linear flex flex-col justify-between'
            >
              <LazyLoadImage
                src={d.blogImage}
                alt='Bumrungrad International Hospital
'
                effect='blur'
                className=''
              />
              <div className='p-4'>
                {' '}
                <h5 className='font-semibold text-blue text-lg'>
                  {d.blogTitle}
                </h5>
                <p className='my-3 text-justify'>
                  {d.blogDescription?.slice(0, 160)} ...
                </p>
              </div>
              <div className='p-4'>
                {' '}
                <Link to={`/one-Blog/${d?.id}`}>
                  <button className='border border-blue bg-blue hover:bg-white px-2 py-1 rounded hover:text-blue text-white duration-300 ease-linear'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
