import { useEffect, useState } from 'react'
import Image from 'next/image'
import { baseUrl } from 'constants/movie'
import { Movie } from 'typing'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from 'atoms/modalAtoms'
interface Props {
  netflixOriginals: Movie[]
}
export const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  return (
    <div className='lg-pb-12 flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 className='text-2xl font-extrabold lg:text-7xl'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className='max-w-xs text-shadow-md md:max-w-lg lg:max-w-2xl'>
        {movie?.overview}
      </p>
      <div className='flex space-x-3'>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' /> Play
        </button>
        <button
          className='bannerButton bg-[gray]/70'
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More info <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>
    </div>
  )
}
