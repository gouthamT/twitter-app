import React from 'react';
import PropTypes from 'prop-types';

function SpinnerView(props) {
  if (!props.isLoading) { return null; }
  return <div className={props.css}>
    <svg width={`${props.width}%`} height={`${props.height}%`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-rolling">
      <circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#1da1f2" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(137.634 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
      </circle>
    </svg>
  </div>;
}

SpinnerView.propTypes = {
  css: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

SpinnerView.defaultProps = {
  css: '',
  width: '10',
  height: '10',
  isLoading: false
};

export default SpinnerView;