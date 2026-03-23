

'use client';

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export default function ReviewCard({
  name,
  rating,
  comment,
  avatar,
}: ReviewCardProps) {
  return (
    <div className="relative  py-8 grid place-content-center overflow-hidden">
    
      <div
        className="
          relative z-10 w-96 min-h-[473px] h-full p-8 rounded-3xl
          /* Use your theme values if they work, but these are for explicit glassmorphism */
          bg-white/[0.03] backdrop-blur-[24px]
          border border-white/[0.1]
          /* Add layered effects with box-shadows: Inner highlight + Inner deep shadow */
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),_0_2px_1px_rgba(0,0,0,0.2),_0_20px_40px_-10px_rgba(0,0,0,0.5)]
          /* This class helps create depth by slightly elevating content inside */
          [transform-style:preserve-3d]
        "
      >
        {/*
          Content Container - Applying slight 3D depth.
          TranslateZ moves this content layer forward relative to the glass pane.
        */}
        <div
          className="
            relative [transform:translateZ(10px)]
          "
        >
          {/* Top Info Layer */}
          <div className="flex justify-between items-center mb-10 text-[11px] font-medium text-white/60 tracking-wider">
            <div>
              <p>USER REVIEW</p>
              <p>Aesthetic Vibe</p>
            </div>
            <div className="opacity-70">Share</div>
          </div>

          {/* User Details Layer - Slightly Elevated */}
          <div className="flex items-center gap-5 mb-12 [transform:translateZ(15px)]">
            <div
              className="
                
                flex items-center justify-center
                text-2xl font-black text-black
              "
            >
             <img className="w-16 h-16 rounded-full" src={avatar} />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white tracking-tight">
                {name}
              </p>
              {/* Star Rating Layer - Also Elevated */}
              <div className="flex gap-1 mt-1 [transform:translateZ(5px)]">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`
                      text-lg
                      ${i < rating ? 'text-red-400' : 'text-white/20'}
                    `}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Comment Layer - Slightly Inset/Etched */}
          <div
            className="
              relative
              /* Inset effect: slightly darker background and shadow */
              bg-black/20 rounded-xl p-5
              border border-black/10
              shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]
              [transform:translateZ(-2px)] /* Sinks slightly back */
            "
          >
            <p
              className="
                text-lg leading-relaxed
                text-white/80 font-normal
              "
            >
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}