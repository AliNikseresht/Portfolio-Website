export default function Glasses() {
  return (
    <div className="glasses-wrapper hidden md:flex">
      <div className="brows">
        <div className="brow left"></div>
        <div className="brow right"></div>
      </div>

      <div className="glasses">
        <div className="glass left">
          <div className="eye">
            <div className="highlight"></div>
          </div>
        </div>

        <div className="bridge"></div>

        <div className="glass right">
          <div className="eye">
            <div className="highlight"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glasses-wrapper {
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
        }

        /* Brows container */
        .brows {
          display: flex;
          justify-content: center;
          gap: 45px;
          margin-bottom: -8px;
        }

        /* Curved eyebrow using clip-path  */
        .brow {
          width: 60px;
          height: 22px;
          background: #51a2ff;
          clip-path: ellipse(20% 45% at 50% 100%);
          transition: all 0.25s ease;
        }

        .brow.left {
          transform: rotate(-10deg);
        }
        .brow.right {
          transform: rotate(10deg);
        }

        /* Glasses */
        .glasses {
          display: flex;
          align-items: center;
        }

        .glass {
          width: 50px;
          height: 35px;
          border: 4px solid #51a2ff;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bridge {
          width: 15px;
          height: 10px;
          border-top: 4px solid #51a2ff;
        }

        /* Eyes */
        .eye {
          width: 14px;
          height: 14px;
          background: #51a2ff;
          border-radius: 50%;
          position: relative;
          transition: all 0.2s ease;
        }

        .highlight {
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 4.5px;
          right: 4.5px;
          transition: all 0.2s ease;
        }

        /* Hover — eyes */
        .glasses-wrapper:hover .eye {
          height: 8px;
          border-radius: 10px;
        }

        .glasses-wrapper:hover .highlight {
          height: 3px;
          width: 3px;
          top: 3px;
          right: 5px;
        }

        /* Hover — eyebrows */
        .glasses-wrapper:hover .brow.left {
          transform: rotate(-18deg) translateY(-3px);
        }

        /* only right eyebrow rises */
        .glasses-wrapper:hover .brow.right {
          transform: rotate(20deg) translateY(-10px);
        }
      `}</style>
    </div>
  );
}
