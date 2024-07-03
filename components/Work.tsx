import React from "react";

const works = [
  {
    Name: "Individual",
    Date: "01 January  2016",
    Head: "Computer Hardware Technician",
    Desc: "I have been working as an individual computer hardware technician since 2016 till now",
  },
  {
    Name: "Accron Revolutin",
    Date: "01 April  2024",
    Head: "Front-end Developer",
    Desc: "I have been working as an Intern Front-end Developer in Accron Revolution 2024",
  },
];

const Work = () => {
  return (
    <div className='py-20'>
      <div className='relative flex justify-center items-center z-20 pb-20'>
        <h1 className='text-3xl font-black bg-gradient-to-r from-red-1 to-purple-0.1 bg-clip-text text-transparent'>
          Work
          <span className='text-white'>Experience</span>
        </h1>
      </div>
      <section className='sm:px-20 relative'>
        {works.map((item, index) => (
          <div key={index}>
            <div className='sticky top-0 py-3 z-10'>
              <h2 className='group-date'>{item.Name}</h2>
            </div>
            <div className='timeline'>
              <div className='relative'>
                <div className='dot'></div>
                <div className='pl-10'>
                  <span className='timeline-date'>{item.Date}</span>
                  <h3 className='timeline-title'>{item.Head}</h3>
                  <p className='text-white'>{item.Desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Work;
