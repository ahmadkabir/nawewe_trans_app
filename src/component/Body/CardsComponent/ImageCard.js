import React from 'react'

export const ImageCard = (props) => {
  const { image, title, describtion, backgroundColor, color } = props;

  return (
    <div className={`card body`} style={{ backgroundColor: `${backgroundColor}`, color: `${color}`}}>
        <div style={{display: 'flex',}}>
            <img 
                src={image} 
                alt='space' 
                className='image1'
            />
            <div>  
                <p style={{marginLeft: 10}}>{title}</p>
                <p style={{fontSize: 13, fontWeight: 'lighter', marginLeft: 10, marginTop: -10}}>
                    {describtion}
                </p>
            </div>
        </div>
    </div>
  )
}
