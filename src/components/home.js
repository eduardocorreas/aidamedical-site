import React from 'react'
import video from '../assets/videos/medical.mp4'

export default function Home() {
  return (
    <section id="home" className="s-home target-section">
      <div className="shadow-overlay"></div>

      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
    </section>
  )
}
