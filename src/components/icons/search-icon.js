import React from 'react'

const SearchIcon = ({ height, width, className, style, fill = '#ffffff' }) => {
  return (
    <svg
      class="svg-icon"
      style={style}
      fill={fill}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M963.80969 874.914509 746.640896 653.056614c-3.587891-3.66551-7.710925-6.443725-12.110336-8.352256 46.655488-62.60183 74.359501-140.751667 74.359501-225.526477 0-205.788877-163.237376-372.568371-364.609741-372.568371C242.909082 46.60951 79.67785 213.390029 79.67785 419.177984c0 205.792973 163.231232 372.569395 364.603597 372.569395 92.421632 0 176.807936-35.134157 241.069056-93.044122 1.778586 3.55799 4.115866 6.89705 7.027302 9.871872l217.115546 221.85687c14.970573 15.300506 39.292518 15.300506 54.316237 0C978.780262 915.131494 978.780262 890.21399 963.80969 874.914509zM444.281446 732.950221c-169.564672 0-307.06176-140.4928-307.06176-313.772237 0-173.332685 137.496064-313.766195 307.06176-313.766195 169.570816 0 307.06176 140.433408 307.06176 313.766195C751.343206 592.457421 613.851238 732.950221 444.281446 732.950221z" />
    </svg>
  )
}
export default SearchIcon
