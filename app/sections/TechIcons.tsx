import React from 'react';

// Generic Icons
export const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

export const DataStructureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81" />
  </svg>
);

export const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v1.5a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 7.5V6zM3.75 12A2.25 2.25 0 016 9.75h12A2.25 2.25 0 0120.25 12v1.5a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 13.5V12zm0 6A2.25 2.25 0 016 15.75h12a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V18z" />
  </svg>
);

export const WebDevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.358 0 2.662-.354 3.777-.972m-7.554 0A9.006 9.006 0 0112 3c1.358 0 2.662.354 3.777.972m-7.554 0a9.006 9.006 0 00-3.777-.972M15 6.75a3 3 0 00-6 0v1.5a3 3 0 006 0v-1.5z" />
  </svg>
);

export const MachineLearningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v7.5A2.25 2.25 0 006.75 18z" />
  </svg>
);

export const ImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const ScrapingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

// Specific Tech Icons
export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 13.5V11.25C14.25 9.42157 12.8284 8 11 8H8V16H11C12.8284 16 14.25 14.5784 14.25 12.75V13.5M14.25 13.5H16M10 18.25V16M8 11.25V8M14 5.75V8M12.75 11.25C12.75 10.5 12.25 10 11.5 10C10.75 10 10.25 10.5 10.25 11.25V11.25C10.25 12 10.75 12.5 11.5 12.5C12.25 12.5 12.75 12 12.75 11.25V11.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.75 10.5V8.25C9.75 6.42157 11.1716 5 13 5H16V13H13C11.1716 13 9.75 11.5784 9.75 9.75V10.5M9.75 10.5H8M14 5.75V8M16 13V16M11.25 12.75C11.25 13.5 11.75 14 12.5 14C13.25 14 13.75 13.5 13.75 12.75V12.75C13.75 12 13.25 11.5 12.5 11.5C11.75 11.5 11.25 12 11.25 12.75V12.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const CppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 12.5H16M16 12.5H13.5M16 12.5V10M16 12.5V15M11.5 12.5H9M9 12.5H6.5M9 12.5V10M9 12.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 16C10.3807 16 11.5 14.8807 11.5 13.5V13.5C11.5 12.1193 10.3807 11 9 11C7.61929 11 6.5 12.1193 6.5 13.5V13.5C6.5 14.8807 7.61929 16 9 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const JavaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.01L8.01 16.9989" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 12V6C4 5.44772 4.44772 5 5 5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 9C7 9 9.5 8 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 5H19C19.5523 5 20 5.44772 20 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 9C17 9 14.5 8 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 14C5.10457 14 6 14.8954 6 16C6 17.1046 5.10457 18 4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const JavaScriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 17H15.5C14.1193 17 13 15.8807 13 14.5V14.5C13 13.1193 14.1193 12 15.5 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 12H9C10.1046 12 11 12.8954 11 14V14.5C11 15.8807 9.88071 17 8.5 17H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const DartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21L20.5 12.5L12 4L3.5 12.5L12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M12 21L7.5 16.5L12 12L20.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const HtmlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 7L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L5.77778 20.0899L12 22L18.2222 20.0899L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 7.5H16.5L15.5 17.5L12 18.5L8.5 17.5L7.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const FastAPIIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17C7 19.7614 9.23858 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const NodeJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.22876 11.2335L2.83594 14.1594L8.22876 17.0854L13.6216 14.1594L8.22876 11.2335Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M17.1641 9.84073L13.6215 14.1595L8.22864 17.0854L11.7712 21.4042L17.1641 18.4782L22.5569 15.5523L17.1641 9.84073Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M1.44336 15.5523L8.22883 11.2335L11.7714 5.91455L6.37858 2.98862L1.44336 15.5523Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
);
export const ExpressJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.98828 17.4336L15.9333 3.99995L21 6.84365L9.05494 20.2773L3.98828 17.4336Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9688 3.5L14.4532 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.94531 6.34375L9.92969 5.23253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.42188 9.1875L5.90625 8.35938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const SQLAlchemyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 13L9 15L16 13L9 11L2 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M16 13L23 15L16 17L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M9 11L16 9L9 7L2 9L9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M16 9L23 7L16 5L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
);
export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1.5" /><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" /></svg>
);
export const TailwindCssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 12C7.76142 12 10 9.76142 10 7C10 4.23858 7.76142 2 5 2C2.23858 2 0 4.23858 0 7C0 9.76142 2.23858 12 5 12Z" transform="translate(7 10)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const StreamlitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12L12 3.75L20.25 12L12 20.25L3.75 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M3.75 12L12 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3.75L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const TensorFlowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17V8M12 8L15 4M12 8L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12L4 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 12L20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12L4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 12L20 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const ScikitLearnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 12L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 14.2676L19 19.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const LangChainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.42857 6H3V12.4286H9.42857V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5714 11.5714H21V18H14.5714V11.5714Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 9L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 15L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const YoloIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8V16M21 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 3H16M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 8H16V16H8V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
);
export const UltralyticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L7 20L17 4L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const OpenCVIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="3" fill="currentColor" /><path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M22 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
);
export const NumpyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H8V8H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 10H8V14H4V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 16H8V20H4V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 4H14V8H10V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 10H14V14H10V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 16H14V20H10V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M16 4H20V8H16V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M16 10H20V14H16V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M16 16H20V20H16V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
);
export const PandasIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3V21M16 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 8H21M3 16H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const MySqlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 17H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const SQLiteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H20L12 12L4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 12H20L12 20L4 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
);
export const BeautifulSoupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21H12M12 21H20M12 21V3M12 3H10M12 3H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 6L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 6L19 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const PlaywrightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 12L9 9V15L15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const GitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15L21 12L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 17C13 18.6569 11.6569 20 10 20C8.34315 20 7 18.6569 7 17C7 15.3431 8.34315 14 10 14C11.6569 14 13 15.3431 13 17ZM13 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7C13 8.65685 11.6569 10 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.165 9.161 21.49C9.761 21.604 9.986 21.238 9.986 20.93C9.986 20.655 9.974 19.838 9.969 18.848C7.184 19.444 6.554 17.683 6.554 17.683C6.004 16.29 5.234 15.935 5.234 15.935C4.124 15.158 5.309 15.178 5.309 15.178C6.529 15.268 7.159 16.483 7.159 16.483C8.219 18.253 9.984 17.718 10.604 17.418C10.714 16.638 11.024 16.088 11.364 15.788C8.894 15.508 6.294 14.548 6.294 10.728C6.294 9.51804 6.744 8.52804 7.454 7.78804C7.334 7.50804 6.944 6.42804 7.554 5.01804C7.554 5.01804 8.494 4.72804 10.554 6.13804C11.464 5.88804 12.444 5.76804 13.424 5.76804C14.404 5.76804 15.384 5.88804 16.294 6.13804C18.354 4.72804 19.294 5.01804 19.294 5.01804C19.904 6.42804 19.514 7.50804 19.394 7.78804C20.104 8.52804 20.554 9.51804 20.554 10.728C20.554 14.558 17.944 15.508 15.464 15.788C15.894 16.168 16.284 16.908 16.284 18.008C16.284 19.578 16.269 20.858 16.269 21.198C16.269 21.508 16.484 21.848 17.094 21.728C21.134 20.165 24 16.418 24 12C24 6.477 19.523 2 12 2Z" fill="currentColor" /></svg>
);
export const VSCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 3L6 11.2333V12.7667L18.5 21L21 19.1667V4.83333L18.5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 6L3 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const JupyterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2C11.9657 4.66667 9.33333 6 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C12.0343 19.3333 14.6667 18 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
