// Create a functional React component that takes in a name, email, and avatar image URL as props and displays them in a card layout
import React from 'react';

function UserCard({ name, email, avatarUrl }) {
  return (
    //Create the card layout using Bootstrap classes
    <div 
      className="card h-100" 
      style={{ 
        minWidth: "280px", 
        maxWidth: "100%",
        margin: "0.5rem"
      }}
      role="article"
      aria-labelledby={`card-title-${name.replace(/\s+/g, '-').toLowerCase()}`}
      aria-describedby={`card-email-${name.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <img 
        className="card-img-top" 
        src={avatarUrl} 
        alt={`Profile picture of ${name}`}
        style={{ 
          height: "250px", 
          objectFit: "cover",
          width: "100%"
        }}
        role="img"
        loading="lazy"
        decoding="async"
      />
      <div className="card-body d-flex flex-column">
        <h5 
          className="card-title text-center mb-3"
          id={`card-title-${name.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {name}
        </h5>
        <p 
          className="card-text text-center text-muted mb-3"
          id={`card-email-${name.replace(/\s+/g, '-').toLowerCase()}`}
          aria-label={`Email address: ${email}`}
        >
          {email}
        </p>
        <button 
          className="btn btn-primary mt-auto w-100"
          aria-label={`View profile of ${name}`}
          type="button"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default UserCard;