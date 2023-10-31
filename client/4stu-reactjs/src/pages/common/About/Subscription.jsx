import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Subscription() {
  return (
    <div id="contact" className="subscription" style={{ padding: '140px 0' }}>
      <div className="content">
        <div className="body">
          <div className="info">
            <h2 className="sub-title line-clamp">Subscribe to 4Stu Service!</h2>
            <p className="desc line-clamp">Subscribe to 4Stu Services and stay updated.</p>
            <Link to="/">
              <Button
                variant="contained"
                className="btn"
                style={{ marginTop: '40px', background: '#fff' }}
              >
                Subscribe
              </Button>
            </Link>
          </div>
          <img
            src="./assets/images/brando-makes-branding-Kr2Myi0WUws-unsplash.jpg"
            alt="Subscribe to 4Stu Service!"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscription;
