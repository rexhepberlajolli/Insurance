/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import './styles/main.scss';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>Page not found.</h1>
    </div>
  );
}
