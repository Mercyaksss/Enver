import React from 'react'
import Image from 'next/image';
import icon1 from '../assets/Icon1.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';
import icon5 from '../assets/Icon5.png';
import icon6 from '../assets/Icon6.png';
import '../styles/Grid.scss';


function Grid() {
    const griditems = [
        {name: 'Development', text: 'Create a platform with the best and coolest quality from us.', icon: icon1},
        {name: 'UI/UX Designer', text: 'We provide UI/UX Design services, and of course with the best quality', icon: icon2},
        {name: 'Graphik Designer', text: 'We provide Graphic Design services, with the best designers', icon: icon3},
        {name: 'Motion Graphik', text: 'Create a platform with the best and coolest quality from us.', icon: icon4},
        {name: 'Photography', text: 'We provide Photography services, and of course with the best quality', icon: icon5},
        {name: 'Videography', text: 'Create a platform with the best and coolest quality from us.', icon: icon6},
    ];

  return (
    <div className='service-grid container'>
        {griditems.map((item, index) => (
            <div key={index} className='service-card'> 

                <Image
                    src={item.icon}
                    width={69}
                    height={69}
                    alt='icon'
                />

                <h2>{item.name}</h2>
                <p>{item.text}</p>
                
            </div>
        ))}
    </div>
  )
}

export default Grid