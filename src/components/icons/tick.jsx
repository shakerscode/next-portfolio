import React from 'react';

const Tick = ({ size }) => {
    return (
        <svg width={ size } height={ size } viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g filter="url(#filter0_d_200_206)">
                <rect x="7.03906" y="5.5752" width="20.4854" height="20" rx="10" fill="#D9D9D9" fill-opacity="0.2" shape-rendering="crispEdges" />
            </g>
            <rect x="12.1602" y="6.5752" width="19.4612" height="14" fill="url(#pattern0)" fill-opacity="0.6" />
            <defs>
                <filter id="filter0_d_200_206" x="0.0390625" y="0.575195" width="34.4854" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect1_dropShadow_200_206" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_206" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_206" result="shape" />
                </filter>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_200_206" transform="translate(-0.5 -0.833293) scale(0.00390625 0.00520833)" />
                </pattern>
                <image id="image0_200_206" width="512" height="512" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    );
};

export default Tick;