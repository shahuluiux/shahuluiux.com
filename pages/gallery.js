import Head from "next/head"
import Image from "next/image"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

// const loaderImage = ({ src, width, quality }) => {
//   return `${prefix}/${src}?w=${width}&q=${quality || 75}`
// }

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
          <div className='w-full p-1 md:p-2'>
            <Image
              alt='gallery'
              width={16}
              height={9}
              layout="responsive"
              className='block object-cover object-center w-full h-full rounded-lg'
              src={prefix + '/test.webp'} />
          </div>
        </div>
      </section>
    </>
  )
}

export default gallery