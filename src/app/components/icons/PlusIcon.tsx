import React from 'react';

interface PlusIconProps extends React.SVGProps<SVGSVGElement> {}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className="elj7tfr3 default-ltr-cache-1frerr8 e164gv2o5"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default PlusIcon;
