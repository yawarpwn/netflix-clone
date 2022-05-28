import { useState} from 'react'
import Head from 'next/head'
import { Header } from 'components/Header'
import { Banner } from 'components/Banner'
import { Movie } from 'typing'
import { Row } from 'components/Row'
import { Modal } from 'components/Modal'
import requests from 'utils/requests'
import useAuth from 'hooks/useAuth'
import { useRecoilValue } from 'recoil'
import { modalState } from 'atoms/modalAtoms'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  const showModal = useRecoilValue(modalState)
  return (
    <div className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]
${showModal && '!h-screen overflow-hidden'}`}>
      <Head>
        <title>Inicio | Netflix </title>
        <meta property="og:url" content="https://tellsenales.com" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb id" /> */}
        <meta property="og:title" content='Tell Señales' />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Fabricación de señales de seguridad, viales, industriales, obras, laborales, reflectivos, fotoluminiscentes, adhesivos"
        />
        <meta property="og:image" content='https://www.tellsenales.com/assets/images/og-image-tellsenales.webp' />
        <link rel='icon' href='/favicon.ico' />
      </Head>      
      <Header />
      <main className='relative mb-24 pl-4 lg:space-y-24 lg:pl-16 '>
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          <Row title='Trending Now' movie={trendingNow} />
          <Row title='Top rated' movie={topRated} />
          <Row title='Action Thriller' movie={actionMovies} />

          <Row title='Comedies' movie={comedyMovies} />
          <Row title='Scary Movies' movie={horrorMovies} />
          <Row title='Romance Movies' movie={romanceMovies} />
          <Row title='Documentaries' movie={documentaries} />
        </section>
          {showModal && <Modal />}
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}

export default Home
