import SelectedPage from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageText.png'
import SponsorRedBull from '@/assets/HomePageText.png'
import SponsorForbes from '@/assets/HomePageText.png'
import SponsorFortune from '@/assets/HomePageText.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id='home'
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      <div>
        <div>
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur nulla dolorem repellat quod debitis iste velit nihil perspiciatis, aliquam voluptate, vel quis, ad provident dolores maiores distinctio soluta minus?
            </p>
          </div>
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default Home