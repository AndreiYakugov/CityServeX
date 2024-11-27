"use client";
import { useState } from 'react';
import DetailDialog from './DetailDialog';

export default function Landscape() {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  // Indicator positions and data
  const indicators = [
    { id: 1, x: '29.586%', y: '19.615%', icon: '/images/Marker_01.png', description: 'Indicator 1 details...' },
    { id: 2, x: '19.367%', y: '69.175%', icon: '/images/Marker_02.png', description: 'Indicator 2 details...' },
    { id: 3, x: '78.762%', y: '20.164%', icon: '/images/Marker_03.png', description: 'Indicator 3 details...' },
    { id: 4, x: '89.367%', y: '49.615%', icon: '/images/Marker_04.png', description: 'Indicator 4 details...' },
    { id: 5, x: '41.729%', y: '69.395%', icon: '/images/Marker_05.png', description: 'Indicator 5 details...' },
    { id: 6, x: '57.334%', y: '77.637%', icon: '/images/Marker_06.png', description: 'Indicator 6 details...' },
    { id: 7, x: '62.663%', y: '45%', icon: '/images/Marker_07.png', description: 'Indicator 7 details...' },
  ];

  return (
    <div className="landscape-container">
      <img src="/images/City Window.png" alt="City Window" className="landscape-image" />
      {/* Render indicators */}
      {indicators.map((indicator) => (
        <img
        key={indicator.id}
        src={indicator.icon}
        alt={`Indicator ${indicator.id}`}
        className="indicator"
        style={{ left: indicator.x, top: indicator.y }}
        onClick={() => setSelectedIndicator(indicator)}
      />
      ))}

      {/* Dialog for selected indicator */}
      {selectedIndicator && (
        <DetailDialog
          image={selectedIndicator.image}
          description={selectedIndicator.description}
          onClose={() => setSelectedIndicator(null)}
        />
      )}

      <style jsx>{`
        .landscape-container {
          position: relative;
          width: 100%;
          height: auto; /* Adjust based on your image dimensions */
        }
        .landscape-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .indicator {
          position: absolute;
          width: 54px; /* Adjust the size of the indicator */
          height: 105px;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 10;
        }
        @media (max-width: 768px) {
        .dialog-content {
            width: 80%;
        }
        }
      `}</style>
    </div>
  );
}
