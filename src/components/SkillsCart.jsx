import React from 'react'

const SkillsCart = ({ id, title, icon, text }) => {
    return (
        <article>
            <span> {icon}</span>
            <h4 className='mt-6 fond-bold'>{title}</h4>
            <p className='mt-2 text-slate-500'>{text}</p>
        </article>
    )
}

export default SkillsCart
