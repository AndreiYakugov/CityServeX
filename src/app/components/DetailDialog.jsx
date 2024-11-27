// components/DetailDialog.jsx
export default function DetailDialog({ description, onClose }) {
    return (
      <div className="dialog-overlay" onClick={onClose}>
        <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
          <p>{description}</p>
          <button onClick={onClose}>Close</button>
        </div>
  
        <style jsx>{`
          .dialog-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .dialog-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          button {
            margin-top: 10px;
            padding: 10px 20px;
            background-color: orange;
            border: none;
            border-radius: 4px;
            color: white;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
  