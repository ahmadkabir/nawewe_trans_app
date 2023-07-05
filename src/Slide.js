import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import './slide.css'

export default function Carousels(props) {
    
       const [state, setState] = useState({
            para: props.para,
            items: props.items,
            active: props.active,
            direction: ''
        })
    
   const generateItems = () =>  {
        var items = []
        var level
        console.log(state.active)
        for (var i = state.active - 2; i < state.active + 2; i++) {
            var index = i
            if (i < 0) {
                index = state.items.length + i
            } else if (i >= state.items.length) {
                index = i % state.items.length
            }
            level = state.active - i
            items.push(<Item key={index} id={state.items[index]} level={level} navigate={props.navigate} />)
        }
        return items
    }
    
    const moveLeft = () => {
        var newActive = state.active
        newActive--
        setState(p => ({
            ...p,
            active: newActive < 0 ? state.items.length - 1 : newActive,
            direction: 'left'
        }))
    }
    
    const moveRight=()=> {
        var newActive = state.active
        setState(p => ({
            ...p,
            active: (newActive + 1) % state.items.length,
            direction: 'right'
        }))
    }
    
   
        return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={moveLeft}><ArrowLeft className='Arrow-slider'/></div>
                <CSSTransitionGroup 
                     transitionName={state.direction}>
                    {generateItems()}
                </CSSTransitionGroup>
                <div className="arrow arrow-right" onClick={moveRight}><ArrowRight className='Arrow-slider'/></div>
            </div>
        )
    }

function Item (props) {
   
    
        const navigate = useNavigate()
        const className = 'item level' + props.level
        return(
            <div className={className}>
                <div className='cards' onClick={() => navigate(`/view-proper/?id=${props.id.para}`)}>
                    <img src={props.id.image}  className= "man" alt='house images'/>
                    <p className='item-para'>Price: {props.id.para}</p>
                    <p className='item-para2'>{props.id.para2}</p>
                    <button className='explore-btn'>{props.id.btn} <ArrowRight className='p-1 margin-slide'/></button>
                </div>
            </div>
        )
    }


