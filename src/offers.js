import './App';
export function offerletters(){
  const certi = [
    { src: '/offerlet.png', title: "offerletter intenship" },
    { src: '/offerlet1.png', title: "Thub offerletter" },
  ];


  const scrollCertificates = (id, direction) => {
    const container = document.getElementById(id);
    const scrollAmount = 400;

    if (container) {
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <p id='certp'>My Certificates</p>

      <div className="carousel-container">
        <button
          className="scroll-button left"
          onClick={() => scrollCertificates('certificateScroll', 'left')}
        >
          ⟵
        </button>

        <div className="certificate" id="certificateScroll">
          {certi.map((cert, index) => (
            <div key={index} className='cert-card'>
              <img src={cert.src} alt={cert.title} />
              <h3>{cert.title}</h3>
              <a href={cert.src} target="_blank" rel="noopener noreferrer">
                <button>Click Me</button>
              </a>
            </div>
          ))}
        </div>

        <button
          className="scroll-button right"
          onClick={() => scrollCertificates('certificateScroll', 'right')}
        >
          ⟶
        </button>
      </div>

      
    </>
  );
}