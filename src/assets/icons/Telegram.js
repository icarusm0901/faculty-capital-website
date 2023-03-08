import React from 'react';

const TelegramIcon = ({ width = 24, height = 24, fill = '', ...rest }) => {
    return (
        <svg
            width={width}
            height={height}
            id="Group_5699"
            data-name="Group 5699"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 53.354 44.375"
        >
            <defs>
                <linearGradient id="linear-gradient" x1="1" x2="0.118" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#29c2e2" />
                    <stop offset="1" stopColor="blue" />
                </linearGradient>
                <clipPath id="clip-path">
                    {fill ? (
                        <rect
                            id="Rectangle_1034"
                            data-name="Rectangle 1034"
                            width="53.354"
                            height="44.375"
                            fill={fill}
                        />
                    ) : (
                        <rect
                            id="Rectangle_1034"
                            data-name="Rectangle 1034"
                            width="53.354"
                            height="44.375"
                            fill="url(#linear-gradient)"
                        />
                    )}
                </clipPath>
            </defs>
            <g id="Group_5699-2" data-name="Group 5699">
                <path
                    id="Path_1021"
                    data-name="Path 1021"
                    d="M53.354,2.139V3.325a1.36,1.36,0,0,0-.159.313q-3.972,18.691-7.934,37.384c-.764,3.612-2.51,4.292-5.493,2.106q-4.683-3.433-9.359-6.873c-.657-.481-1.324-.948-1.992-1.426-2.086,1.995-4.084,3.906-6.084,5.816a2.35,2.35,0,0,1-2.2.861c0-.391-.019-.7,0-1.013.229-3.231.526-6.459.667-9.694a3.5,3.5,0,0,1,1.315-2.7q10.5-9.339,20.916-18.761a11.692,11.692,0,0,0,.93-1.059L43.7,7.872a13.423,13.423,0,0,0-2.054.858Q28.531,16.9,15.457,25.138a3.086,3.086,0,0,1-2.945.367c-3.358-1.142-6.779-2.1-10.143-3.224A12.785,12.785,0,0,1,0,20.878v-.712a14.013,14.013,0,0,1,2.746-1.9Q25.948,9.3,49.193.444C51.5-.44,52.4-.067,53.354,2.139"
                    transform="translate(0 0)"
                    fill={fill ? fill : 'url(#linear-gradient)'}
                />
            </g>
        </svg>
    );
};

export default TelegramIcon;
