import React, { useState } from 'react';

import Like from '@mui/icons-material/ThumbUpOffAlt';
import './LikeButton.css'
import Like2 from '@mui/icons-material/ThumbUpAlt';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={handleClick} >
      <Like2  style={{color: liked ? 'blue' : 'grey' }} />
      {/* {liked ? 'Liked!' : 'Like'} */}
    </div>
  );
}

export default LikeButton;
