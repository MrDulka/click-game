import React from 'react';

const BackgroundPage = ({ children }) => {
  return (
    <div>
      <h1 className = "header">STFUANDCLICK.COM</h1>
      {children}
      <p className = "footer">
        If you don't like this page, it's <a href="https://www.applifting.cz/en">Applifting's</a> fault.
      </p>
    </div>
  )
}

export default BackgroundPage;
