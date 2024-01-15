import { BenefitType } from "@/shared/types"
import SelectedPage from "@/shared/types";
import { 
  HomeModernIcon, 
  UserGroupIcon, 
  AcademicCapIcon 
} from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Favilities",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, atque natus quos quas culpa hic, voluptatem suscipit"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the Art Favilities",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, atque natus quos quas culpa hic, voluptatem suscipit"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Favilities",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, atque natus quos quas culpa hic, voluptatem suscipit"
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial='hidden'
            whileInView='visible'  
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: .5 }}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity:1, x:0},
            }}
           >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas ratione fuga corrupti commodi. Eveniet, error atque. Numquam aliquam nesciunt tempore, minus, commodi similique ex non deleniti veniam incidunt explicabo.
          </p>
        </motion.div>
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial='hidden'
                  whileInView='visible'  
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: .5 }}
                  variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity:1, x:0},
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial='hidden'
              whileInView='visible'  
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: .5 }}
              variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity:1, x:0},
              }}
            >
              <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores. At aperiam id alias quibusdam eveniet accusantium eos, laboriosam maxime, sequi officiis nam nobis doloribus, quaerat rerum necessitatibus dolorum ratione.</p>
              <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptate perspiciatis eaque ipsum, similique provident iste, quisquam ducimus ipsam praesentium voluptates? Dolores pariatur nostrum fugit cumque ab omnis quisquam ipsam.</p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default index