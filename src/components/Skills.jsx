import React from 'react'
import SectionTitle from './SectionTitle'
import {skills} from '../data'
import SkillsCart from './SkillsCart'

const Skills = () => {
  return (
    <section className='py-20 px-20 aligh-elements' id='skills'>
        <SectionTitle text={'tech stack'}/>
        <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skill)=>{
                return <SkillsCart key={skill.id} {...skill}/>
            })}
        </div>
    </section>
  )
}

export default Skills
