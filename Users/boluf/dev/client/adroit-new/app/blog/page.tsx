import { IconBrandFacebookFilled, IconBrandInstagramFilled, IconBrandTwitterFilled } from "@tabler/icons-react";


const page = () => {
  const currentYear = new Date().getFullYear()

  const data = {
    title: "Coming Soon",
    description: "Our blog page is currently under construction. We&apos;re currently working 👨‍💻 hard to bring you great contents, and we can&apos;t wait to share them with you 📅. We'll be ready to launch soon.",
    newsletterheading: "Stay tuned for our live updates!",
    socialIconsHeading: "Follow Us 📣",
    socialIcons: [
      {
        icon: <IconBrandFacebookFilled />,
        link: "https://web.facebook.com/profile.php?id=100091465628567/",
      },
      {
        icon: <IconBrandTwitterFilled />,
        link: "https://twitter.com/Adroit_ng/",
      },
      {
        icon: <IconBrandInstagramFilled />,
        link: "https://www.instagram.com/adroit_ng/",
      },
    ],
  }

  const {
    description,
    newsletterheading,
    socialIcons,
    socialIconsHeading,
    title,
  } = data

  return (
    <>
      {/* <ThemeSwitcher /> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-12">

        <div className="relative flex flex-col  place-items-center ">
          <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>{title}</span>
            <span className=''>⏳</span>
          </h2>
          <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin' dangerouslySetInnerHTML={{
            __html: description
          }}>
          </p>
        </div>

        <div className='text-center lg:m-7 mt-10 w-80 p-3' >
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-slate-800 dark:text-slate-100  font-light text-sm leading-6">{newsletterheading}</label>
              <div className="mt-2 flex-col flex lg:flex md:flex-row">
                <input id="email" name="email" type="email" placeholder='Email address' autoComplete="email" required className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2" />
                <button className='ml-0 bg-slate-900 sm:w-auto border-slate-800 dark:border-slate-100	rounded-none mt-2 md:mt-0	p-2 border-2 dark:text-white hover:bg-slate-950'>Subscribe</button>
              </div>
            </div>
          </form>
        </div>

        <section className='text-slate-500 text-center'>
          <div className='my-4 text-center' >
            <ul className='flex flex-wrap lg:flex justify-center '>
              <li className='px-2'> {socialIconsHeading} </li>
              {socialIcons.map((social, index) =>
              (
                <li key={index} className='px-2 capitalize border-1  hover:border-b-white'>
                  <a target='_blank' className='' href={social.link}> {social.icon}  </a>
                </li>
              )
              )}
            </ul>
          </div>
        </section>

      </main>
    </>
  )
}

export default page;