import Head from "next/head"
import Image from "next/image"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const images = [{ 'url': '1' }, { 'url': '2' }, { 'url': '3' }, { 'url': '4' }, { 'url': '5' }, { 'url': '6' }, { 'url': '7' }, { 'url': '8' }, { 'url': '9' }, { 'url': '10' }, { 'url': '11' }, { 'url': '12' }, { 'url': '13' }, { 'url': '14' }, { 'url': '15' }, { 'url': '16' }, { 'url': '17' }, { 'url': '18' }, { 'url': '19' }, { 'url': '20' }]

const gallery = () => {
  return (
    <>
      <Head>
        <title>Photo Gallery of shahuluiux.com</title>
        <meta name="description" content="A description of the page" />
      </Head>
      <section className='container mx-auto md:p-6 p-3'>
        <h1 className='uppercase text-gray-500 font-bold text-center py-3 sm:text-6xl text-5xl'>gallery</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>
          {images.map((data, key) => (
            <div className='w-full p-1 md:p-2' key={key}>
              <Image
                alt={data.url}
                width={4}
                height={3}
                layout="responsive"
                className='block object-cover object-center w-full h-full rounded-lg'
                src={prefix + '/test.webp'} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default gallery