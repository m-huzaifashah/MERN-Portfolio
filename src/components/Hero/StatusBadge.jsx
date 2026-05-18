import React from 'react';

const StatusBadge = () => {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      borderRadius: '9999px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#34d399', /* Emerald 400 for good contrast on dark */
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
      <style>
        {`
          @keyframes pulse-emerald {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(52, 211, 153, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
          }
        `}
      </style>
      <span style={{
        position: 'relative',
        display: 'flex',
        height: '8px',
        width: '8px'
      }}>
        <span style={{
          position: 'absolute',
          display: 'inline-flex',
          height: '100%',
          width: '100%',
          borderRadius: '50%',
          backgroundColor: '#34d399',
          animation: 'pulse-emerald 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></span>
        <span style={{
          position: 'relative',
          display: 'inline-flex',
          borderRadius: '50%',
          height: '8px',
          width: '8px',
          backgroundColor: '#34d399'
        }}></span>
      </span>
      <span>Open to opportunities</span>
    </div>
  );
};

export default StatusBadge;
