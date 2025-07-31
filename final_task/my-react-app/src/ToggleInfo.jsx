import { useState } from 'react';

function ToggleInfo() {
const [showMore, setShowMore] = useState(false);

return (
    <div style={{ marginTop: '20px' }}>
    <button
        style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', background: 'hsl(189, 81%, 61%)', color: 'black' }}
        onClick={() => setShowMore(prev => !prev)}
    >
        {showMore ? 'Hide Details' : 'Show More'}
    </button>
    {showMore && (
        <p style={{ marginTop: '12px', fontSize: '16px' }}>
            Conducted DataVista'25 which is The Data Alchemists' flagship tech-week, blending learning, creativity, and competition. From pixels to patterns, dive into the ever-evolving Data Universe!<br/><br/>
            Conducted, from 2nd June 2025, an exciting and completely FREE Summer Bootcamp packed with skills that every future tech leader needs!
        </p>
    )}
    </div>
);
}

export default ToggleInfo;
