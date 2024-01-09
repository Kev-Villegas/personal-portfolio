import gameHub from '../assets/projects/gameHub.webp';
import Portfolio from '../assets/projects/portfolioCover.webp';
import ToDoList from '../assets/projects/toDoList.webp';

const Work = () => {
  return (
    <div
      name='work'
      className='w-fullh-calc(90vh) px-6 py-6 bg-[#0a192f] text-gray-300'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-calc(90vh)'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>
            Work
          </p>
          <p className='py-4 text-xl'>Check My Projects Below</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4'>
          {/* Card 1 */}
          <div
            style={{ backgroundImage: `url(${gameHub})` }}
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Game Discovery App
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://video-game-discovery-app-liard.vercel.app/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/Kev-Villegas/videoGames-discovery-app'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://personal-portfolio-alpha-henna.vercel.app/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/Kev-Villegas/personal-portfolio'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            style={{ backgroundImage: `url(${ToDoList})` }}
            className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                To-Do List
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://to-do-list-rouge-phi.vercel.app/'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/Kev-Villegas/to-do-list'
                  target='_blank'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
