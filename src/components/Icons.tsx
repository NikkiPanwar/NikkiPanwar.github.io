import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const AngularIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" fill="none" className={className} {...props}>
    <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
    <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
    <path d="M125,52.1L66.8,182.6H89.2L101,153.4H125V132.8H109.3L125,94.8V52.1Z" fill="#FFFFFF" />
    <polygon points="125,52.1 125,94.8 140.7,132.8 125,132.8 125,153.4 149,153.4 160.8,182.6 183.2,182.6" fill="#FFFFFF" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className} {...props}>
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path d="M72.2 92.4c1.8 3.1 4.5 5.5 8 7.3 3.6 1.8 7.6 2.7 12.1 2.7 3.5 0 6.7-.6 9.5-1.9 2.8-1.2 5.1-3 6.9-5.3 1.8-2.3 2.7-5.1 2.7-8.3 0-3.3-1-6.1-2.9-8.3-1.9-2.3-4.7-4.1-8.3-5.5-2.4-.9-5.4-1.8-9.1-2.8-4.8-1.3-8.6-2.9-11.4-4.8-2.8-1.9-4.9-4.3-6.4-7.1-1.5-2.8-2.2-6.2-2.2-10 0-4.6 1.3-8.7 3.9-12.3 2.6-3.6 6.3-6.4 11-8.4 4.8-2 10.3-3 16.5-3 6.1 0 11.5 1.1 16.2 3.4 4.7 2.3 8.3 5.5 10.8 9.6l-11.8 7.5c-1.5-2.5-3.6-4.4-6.2-5.7-2.6-1.3-5.7-2-9.1-2-3.1 0-5.8.5-8.1 1.6-2.3 1.1-4.1 2.6-5.4 4.5-1.3 1.9-2 4.1-2 6.6 0 2.9.9 5.3 2.6 7.2 1.7 1.9 4.3 3.5 7.8 4.7 2.3.8 5.2 1.7 8.7 2.6 5.3 1.4 9.5 3.1 12.6 5.1 3.1 2 5.4 4.5 7 7.5 1.6 3 2.4 6.7 2.4 11.1 0 4.8-1.3 9.1-4 12.9-2.7 3.8-6.5 6.8-11.5 8.9-5 2.1-10.9 3.2-17.7 3.2-7.5 0-14.1-1.4-19.8-4.2-5.7-2.8-10-6.9-13-12.3l12.9-7.7zM36.7 41.3H14.1V27.8h59.6v13.5H51.1v78H36.7v-78z" fill="#FFFFFF" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className} {...props}>
    <path d="M63.6 5.3c-15.5 0-26.6 3.4-31.1 9.8-5.3 7.6-5 16-5 24.3h36.1v4.9H20.2c-8.7 0-16.3 5.4-18.7 15.5-2.7 11.7-2.9 19 0 31 2.2 9.1 7.2 15.5 15.9 15.5h10.3v-13.8c0-10 8.4-18.7 18.7-18.7h28.5c8.3 0 15.1-7 15.1-15.5v-27c0-8.2-6.9-14.3-15.1-15.5-3.8-.5-7.7-.5-11.3-.5zm-11 9.7c3.1 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6-5.6-2.5-5.6-5.6 2.5-5.6 5.6-5.6z" fill="#3776AB" />
    <path d="M64.4 122.7c15.5 0 26.6-3.4 31.1-9.8 5.3-7.6 5-16 5-24.3H64.4v-4.9h43.4c8.7 0 16.3-5.4 18.7-15.5 2.7-11.7 2.9-19 0-31-2.2-9.1-7.2-15.5-15.9-15.5H100.3v13.8c0 10-8.4 18.7-18.7 18.7H53.1c-8.3 0-15.1 7-15.1 15.5v27c0 8.2 6.9 14.3 15.1 15.5 3.8.5 7.7.5 11.3.5zm11-9.7c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" fill="#FFD43B" />
  </svg>
);

export const FastApiIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className} {...props}>
    <circle cx="64" cy="64" r="64" fill="#009688" />
    <path d="M68 24L38 68h22l-6 36 36-48H66l8-32z" fill="#FFFFFF" />
  </svg>
);

export const PostgreSqlIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className} {...props}>
    <circle cx="64" cy="64" r="64" fill="#336791" />
    <path d="M64 26c-18 0-29 13.5-29 27.5 0 9 4.5 16 11 20.5v17.5l7.5-4.5 7.5 4.5V74.8c1-0.2 2-0.5 3-0.8 1 0.3 2 0.6 3 0.8v16.7l7.5-4.5 7.5 4.5V74c6.5-4.5 11-11.5 11-20.5 0-14-11-27.5-29-27.5zm0 10c13 0 20 9.5 20 18.5 0 6.5-4 13-10.5 15.5L71 71v13.5l-4-2.5-3 2v-14l-2.5-1.5C55 66 51 59.5 51 54.5 51 45.5 58 36 64 36z" fill="#FFFFFF" />
  </svg>
);

export const NodeJsIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className} {...props}>
    <path d="M64 6L14 34.8v57.6L64 122l50-29.6V34.8L64 6z" fill="#339933" />
    <path d="M64 16L22.6 40v48L64 112l41.4-24V40L64 16z" fill="#539E43" />
    <path d="M64 42c-12 0-19 6-19 15 0 16 26 12 26 23 0 4-3 6-7 6-5 0-8-2-10-6l-9 5c3 7 10 10 19 10 12 0 19-6 19-15 0-16-26-12-26-23 0-4 3-6 7-6 5 0 7 2 9 5l9-5c-3-6-9-9-17-9z" fill="#FFFFFF" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} {...props}>
    <path d="M4 14.5C4 18 7.5 20 12 20s8-2 8-5.5c0-4-3-4.5-5-4.5H5c-1 0-1.8.4-2.4 1" />
    <rect x="5" y="9" width="3" height="3" rx="0.5" />
    <rect x="9" y="9" width="3" height="3" rx="0.5" />
    <rect x="13" y="9" width="3" height="3" rx="0.5" />
    <rect x="9" y="5" width="3" height="3" rx="0.5" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const FrontendIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const BackendIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const ToolsIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const GraduationIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export const CodeScreenIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const ProblemSolvingIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M19.439 7.85c0-1.571-1.28-2.85-2.85-2.85a2.85 2.85 0 0 0-2.85 2.85v.71h-3.48v-.71a2.85 2.85 0 0 0-2.85-2.85 2.85 2.85 0 0 0-2.85 2.85v3.48h-.71a2.85 2.85 0 0 0-2.85 2.85 2.85 2.85 0 0 0 2.85 2.85h.71v3.48a2.85 2.85 0 0 0 2.85 2.85 2.85 2.85 0 0 0 2.85-2.85v-.71h3.48v.71a2.85 2.85 0 0 0 2.85 2.85 2.85 2.85 0 0 0 2.85-2.85v-3.48h.71a2.85 2.85 0 0 0 2.85-2.85 2.85 2.85 0 0 0-2.85-2.85h-.71V7.85z" />
  </svg>
);

export const LayersIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const RazorpayIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M14.52 2.05L4.44 14.21l4.78.36L6.5 21.95l11.06-13.3-4.83-.34 1.79-6.26z" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.31a8.16 8.16 0 01-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.19-8.13 8.19zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.46-.31z" />
  </svg>
);

export const NotificationIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const IntegrationIcon: React.FC<IconProps> = ({ size = 22, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);


export const LaravelIcon: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path
      d="M23.606 6.786L19.49 4.409a.78.78 0 00-.776 0L14.6 6.786a.78.78 0 00-.388.673v4.755l-3.327 1.921v-4.755a.78.78 0 00-.388-.673L6.38 6.33a.78.78 0 00-.776 0L1.488 8.707a.78.78 0 00-.388.673v4.755c0 .278.148.535.388.673l4.116 2.377a.78.78 0 00.776 0l4.116-2.377a.78.78 0 00.388-.673v-4.755l3.327-1.921v4.755c0 .278.148.535.388.673l4.116 2.377a.78.78 0 00.776 0l4.116-2.377a.78.78 0 00.388-.673V7.459a.78.78 0 00-.388-.673z"
      fill={props.fill || "#FF2D20"}
    />
  </svg>
);