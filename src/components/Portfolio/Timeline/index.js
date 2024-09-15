import React, { useState } from 'react'
import './index.scss'

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'August-October 2024',
      title: 'Cellula Technologies | Computer Vision Internship',
      description: [
        'Worked on computer vision projects and deployment using <b>Django</b> and <b>Flask</b>.',
        'Developed and integrated machine learning models for <b>image processing</b> and <b>analysis</b>.',
        'Collaborated with cross-functional teams to deliver <b>end-to-end solutions</b>.',
        'Conducted <b>testing</b> and <b>debugging</b> to ensure robust performance of applications.',
      ],

      expanded: false,
    },
    {
      date: 'july-September 2024',
      title: 'Alexandria Univeristy | Machine Learning Internship',
      description: [
        'Participated in the <b>Machine Learning Summer Applications</b> program under Dr. Marwan Torki.',
        'Engaged in hands-on projects and applications of <b>machine learning techniques</b>.',
        'Completed the <b>Deep Learning course</b> by <b>Andrew Ng</b>.',
        'Collaborated with peers on developing and implementing <b>machine learning models</b>.',
      ],
      expanded: false,
    },
    // {
    //   date: "May-September 2022",
    //   title: "Government Of Canada",
    //   description: [
    //     "Programmed and deployed a <b>Python-based data migration pipeline</b> on <b>Azure</b>, achieving a <b>50%</b> reduction in transfer time for <b>100+ terabytes</b> of critical business data",
    //     "Centralized a <b>SQL database infrastructure</b> on <b>Azure</b>, enhancing data accessibility and security for <b>50+</b> stakeholders, resulting in a <b>30%</b> improvement in query performance across the organization",
    //   ],
    //   expanded: false,
    // },
  ])

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded }
        }
        return event
      })
      return updatedEvents
    })
  }

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p
                    key={descIndex}
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
