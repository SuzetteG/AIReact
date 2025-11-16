// Build a responsive React component called ProfileCard that takes name, bio, avatar, and location as props. Style it with Bootstrap cards and ensure accessibility.
import React from 'react';

function ProfileCard({ name, bio, avatar, location }) {
  const sanitizedName = name ? name.replace(/\s+/g, '-').toLowerCase() : 'profile';

  return (
    <article 
      className="card h-100 shadow-sm" 
      style={{ 
        minWidth: "300px", 
        maxWidth: "100%",
        margin: "0.5rem"
      }}
      role="article"
      aria-labelledby={`profile-name-${sanitizedName}`}
      aria-describedby={`profile-bio-${sanitizedName}`}
    >
      {/* Profile Image */}
      <div className="text-center pt-4">
        <img 
          src={avatar} 
          alt={`Profile picture of ${name}`}
          className="rounded-circle border border-3 border-light shadow-sm"
          style={{ 
            width: "120px", 
            height: "120px",
            objectFit: "cover"
          }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Card Body */}
      <div className="card-body text-center d-flex flex-column">
        {/* Name */}
        <h5 
          className="card-title mb-2"
          id={`profile-name-${sanitizedName}`}
        >
          {name}
        </h5>

        {/* Location */}
        {location && (
          <p className="text-muted mb-3">
            <i className="bi bi-geo-alt me-1" aria-hidden="true"></i>
            <span aria-label={`Located in ${location}`}>{location}</span>
          </p>
        )}

        {/* Bio */}
        {bio && (
          <p 
            className="card-text text-muted mb-4"
            id={`profile-bio-${sanitizedName}`}
          >
            {bio}
          </p>
        )}

        {/* Action Button */}
        <div className="mt-auto">
          <button 
            className="btn btn-primary w-100"
            aria-label={`View full profile of ${name}`}
            type="button"
          >
            <i className="bi bi-person-circle me-2" aria-hidden="true"></i>
            View Profile
          </button>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer bg-transparent text-center">
        <small className="text-muted">
          <i className="bi bi-person-badge me-1" aria-hidden="true"></i>
          Professional Profile
        </small>
      </div>
    </article>
  );
}

export default ProfileCard;