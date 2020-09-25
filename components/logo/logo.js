import styles from "./logo.module.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import classnames from "classnames";

export const Logo = ({ opacity = 1, animation, className, onClick }) => {
  const refs = useRef({});

  useEffect(() => {
    if (animation) {
      animation(refs);
    }
  }, [refs]);
  return (
    <div
      className={classnames(styles.logo, className)}
      onClick={() => (onClick ? onClick() : null)}
    >
      <div className={styles.image}>
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 193"
        >
          <g ref={(item) => (refs.current["f-group"] = item)}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.63 22.53c0 1.4 1.14 2.54 2.54 2.54h32.47a2.55 2.55 0 001.33-4.71L63.51.38a2.55 2.55 0 00-3.88 2.17v19.98zm2.54 0V2.55l32.47 19.98H62.17z"
              fill="#8EEFF2"
              ref={(item) => (refs.current["f-tr"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.48 2.55A2.55 2.55 0 0054.02.87L36.54 20.85a2.55 2.55 0 001.91 4.22h17.48c1.41 0 2.55-1.14 2.55-2.54V2.55zm-2.55 0v19.98H38.45L55.93 2.55z"
              fill="#FFAF7E"
              ref={(item) => (refs.current["f-tl"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.48 28.75a2.55 2.55 0 00-2.56-2.55l-17.47.02a2.55 2.55 0 00-2.31 3.6L53.6 68.04a2.55 2.55 0 004.87-1.06V28.75zm-2.55 0l-17.48.02 17.48 38.2V28.75z"
              fill="#FCE383"
              ref={(item) => (refs.current["f-tlb"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.15 51.38a2.55 2.55 0 00-2.59 2.58l.14 12.97a2.55 2.55 0 003.56 2.31l28.72-12.48a2.55 2.55 0 00-.98-4.89l-28.85-.49zm-.04 2.55l.13 12.98 28.72-12.49-28.85-.49z"
              fill="#FF819D"
              ref={(item) => (refs.current["f-trb"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8 72.73a2.55 2.55 0 00-5.02-.05l-8 42.21c-.07.4-.05.82.07 1.2l7.49 24.98a2.55 2.55 0 004.88 0l7.5-24.97c.1-.37.13-.77.07-1.15l-7-42.22zm-2.52.42l-8 42.22 7.5 24.97 7.5-24.97-7-42.22z"
              fill="#8EEFF2"
              ref={(item) => (refs.current["f-b"] = item)}
              opacity={opacity}
            />
          </g>
          <g ref={(item) => (refs.current["d-group"] = item)}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.44 110a2.56 2.56 0 001.86 4.33l23.16-.13a2.57 2.57 0 002.55-2.56V87.59a2.57 2.57 0 00-4.42-1.77l-23.15 24.17zm1.85 1.77l23.15-24.18v24.05l-23.15.13z"
              fill="#FF819D"
              ref={(item) => (refs.current["d-ctl"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108.46 101.81a2.57 2.57 0 002.57 2.57h22.7a2.57 2.57 0 001.36-4.74l-22.7-14.22a2.57 2.57 0 00-3.93 2.17v14.22zm2.57 0V87.6l22.7 14.22h-22.7z"
              fill="#8EEFF2"
              ref={(item) => (refs.current["d-ctr"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M107.01 118.11a2.57 2.57 0 00-2.57-2.56H81.3a2.56 2.56 0 00-1.8 4.39l23.15 22.89a2.57 2.57 0 004.37-1.83v-22.89zm-2.57 0H81.3l23.15 22.9v-22.9z"
              fill="#8EEFF2"
              ref={(item) => (refs.current["d-cbl"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108.46 141a2.57 2.57 0 003.93 2.18l22.7-14.22a2.56 2.56 0 00-1.36-4.74h-22.7a2.57 2.57 0 00-2.57 2.56V141zm2.57 0v-14.22h22.7L111.03 141z"
              fill="#FF819D"
              ref={(item) => (refs.current["d-cbr"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M136.91 141.22a2.43 2.43 0 002.44 2.43h14.98a2.43 2.43 0 002.37-2.97l-14.98-66.13a2.43 2.43 0 00-4.8.54v66.13zm2.44 0V75.09l14.98 66.13h-14.99z"
              fill="#FFAF7E"
              ref={(item) => (refs.current["d-b"] = item)}
              opacity={opacity}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M141.57 3.84a2.43 2.43 0 00-2.44-2.44h-14.98a2.44 2.44 0 00-2.37 2.98l14.98 66.12a2.43 2.43 0 004.8-.53V3.84zm-2.44 0v66.13L124.15 3.84h14.98z"
              fill="#FCE383"
              ref={(item) => (refs.current["d-t"] = item)}
              opacity={opacity}
            />
          </g>
          <g
            ref={(item) => (refs.current["text-group"] = item)}
            opacity={opacity}
          >
            <path
              d="M45.6 170.43h3.12v-8.3h2.4v-2.57h-2.4v-.87c0-1.13.66-1.58 1.62-1.58.36 0 .6.05.82.1v-2.74c-.33-.1-.9-.2-1.64-.2-2.16 0-3.9 1.31-3.9 3.78v1.5h-1.86v2.59h1.84v8.29z"
              fill="#DAFFDB"
            />
            <path
              d="M60.96 170.43h3.12v-6.3c.26-1.04 1.35-1.81 2.53-1.81.42 0 .78.02 1.13.1v-3.15a7.31 7.31 0 00-.8-.07c-1.37 0-2.38.74-2.9 1.94v-1.58h-3.08v10.87z"
              fill="#DAFFDB"
            />
            <path
              d="M81.01 170.76c1.36 0 2.45-.48 3.09-1.04v.71h2.89v-7.31c0-2.1-1.71-3.92-4.9-3.92-1.6 0-3.2.43-4.35.98v3.05a7.68 7.68 0 014.07-1.3c1.49 0 2.07.76 2.07 1.59v.75a5.51 5.51 0 00-2.71-.66c-2.2 0-4.05 1.24-4.05 3.44 0 2.38 1.64 3.71 3.89 3.71zm.89-2.38c-.96 0-1.73-.5-1.73-1.42 0-.84.77-1.3 1.73-1.3.84 0 1.6.32 1.98.64v1.3c-.38.36-1.11.78-1.98.78z"
              fill="#DAFFDB"
            />
            <path
              d="M102.97 162.14c1.16 0 2.1.31 3.18 1.02v-3.2a7.6 7.6 0 00-3.33-.76c-3.43 0-5.94 2.34-5.94 5.76 0 3.45 2.51 5.8 5.94 5.8a7.6 7.6 0 003.33-.75v-3.22a5.3 5.3 0 01-3.18 1.02c-1.53 0-2.87-.94-2.87-2.85 0-1.84 1.34-2.82 2.87-2.82z"
              fill="#DAFFDB"
            />
            <path
              d="M121.53 170.77c.78 0 1.58-.16 1.87-.25v-2.69c-.25.07-.56.13-.89.13-1.04 0-1.53-.48-1.53-1.46v-4.36h2.42v-2.58h-2.42v-4.07l-3 1.11v2.96h-1.96v2.58h1.84v5.1c0 2.53 1.7 3.53 3.67 3.53z"
              fill="#DAFFDB"
            />
            <path
              d="M137 170.76c1.36 0 2.45-.48 3.1-1.04v.71h2.88v-7.31c0-2.1-1.71-3.92-4.89-3.92-1.6 0-3.2.43-4.36.98v3.05a7.68 7.68 0 014.07-1.3c1.5 0 2.07.76 2.07 1.59v.75a5.51 5.51 0 00-2.71-.66c-2.2 0-4.05 1.24-4.05 3.44 0 2.38 1.65 3.71 3.9 3.71zm.9-2.38c-.97 0-1.74-.5-1.74-1.42 0-.84.78-1.3 1.73-1.3.85 0 1.6.32 1.98.64v1.3c-.38.36-1.11.78-1.98.78z"
              fill="#DAFFDB"
            />
            <path d="M156.58 154.31h-3.11v16.12h3.11v-16.12z" fill="#DAFFDB" />
            <path
              d="M52.3 176.54v6.03a4.31 4.31 0 00-3.05-1.13c-3.14 0-5.11 2.62-5.11 5.75 0 3.18 1.97 5.8 5.1 5.8 1.3 0 2.34-.53 3.05-1.15v.82h3.12v-16.12h-3.12zm0 12.34a3 3 0 01-2.32 1.18c-1.5 0-2.62-1.07-2.62-2.87 0-1.73 1.11-2.84 2.62-2.84a3 3 0 012.31 1.18v3.35z"
              fill="#DAFFDB"
            />
            <path
              d="M59.48 179.64c1.1 0 1.95-.78 1.95-1.91 0-1.16-.84-1.92-1.95-1.92-1.11 0-1.96.76-1.96 1.91 0 1.14.85 1.92 1.96 1.92zm-1.54 13.03h3.12v-10.88h-3.12v10.88z"
              fill="#DAFFDB"
            />
            <path
              d="M76.2 181.44c-1.8 0-2.9.91-3.45 1.55a3.7 3.7 0 00-3.14-1.55c-1.38 0-2.29.53-2.89 1.22v-.87h-3.06v10.88h3.1v-7.25c.45-.67 1.07-1.14 1.9-1.14 1.04 0 1.66.74 1.66 1.92v6.47h3.12v-7.32c.44-.62 1.06-1.07 1.84-1.07 1.05 0 1.7.74 1.7 1.92v6.47h3.1v-7.25a3.77 3.77 0 00-3.89-3.98z"
              fill="#DAFFDB"
            />
            <path
              d="M87.58 193c2.18 0 3.47-.58 4.47-1.22v-2.7a7.14 7.14 0 01-4.14 1.34c-1.36 0-2.73-.82-2.8-2.31h7.7c.01-.18.04-.65.04-.91 0-3.36-1.96-5.76-5.4-5.76a5.47 5.47 0 00-5.59 5.71c0 3.76 2.58 5.85 5.72 5.85zm-2.4-6.98c.06-.98.9-2 2.26-2 1.5 0 2.2.97 2.27 2h-4.53z"
              fill="#DAFFDB"
            />
            <path
              d="M94.85 192.66h3.11v-7.24a2.53 2.53 0 012.05-1.14c1.04 0 1.82.74 1.82 1.92v6.47h3.11v-7.25c0-2.58-1.93-3.98-3.98-3.98-1.38 0-2.35.53-3.04 1.22v-.87h-3.07v10.88z"
              fill="#DAFFDB"
            />
            <path
              d="M110.74 193c3.03 0 4.74-1.51 4.74-3.65 0-1.89-1.1-2.91-3.32-3.33l-1.2-.25c-.62-.13-.97-.4-.97-.78 0-.48.42-.84 1.4-.84 1.15 0 2.5.36 3.58.84v-2.82c-.9-.4-2.2-.73-3.56-.73-2.96 0-4.47 1.6-4.47 3.56 0 2.09 1.38 2.97 3.05 3.28l1.24.25c.71.13 1 .44 1 .84 0 .58-.51.9-1.44.9a9.6 9.6 0 01-3.83-1v2.97c.94.36 2.3.76 3.78.76z"
              fill="#DAFFDB"
            />
            <path
              d="M119.06 179.64c1.1 0 1.95-.78 1.95-1.91 0-1.16-.84-1.92-1.95-1.92-1.12 0-1.96.76-1.96 1.91 0 1.14.84 1.92 1.96 1.92zm-1.54 13.03h3.12v-10.88h-3.12v10.88z"
              fill="#DAFFDB"
            />
            <path
              d="M128.48 193a5.69 5.69 0 005.94-5.8c0-3.25-2.42-5.76-5.94-5.76-3.51 0-5.91 2.51-5.91 5.76 0 3.26 2.4 5.8 5.91 5.8zm0-2.94c-1.49 0-2.69-1.06-2.69-2.86 0-1.76 1.2-2.85 2.7-2.85 1.5 0 2.7 1.09 2.7 2.85 0 1.8-1.2 2.86-2.7 2.86z"
              fill="#DAFFDB"
            />
            <path
              d="M136.42 192.66h3.11v-7.24a2.53 2.53 0 012.05-1.14c1.04 0 1.82.74 1.82 1.92v6.47h3.11v-7.25c0-2.58-1.93-3.98-3.98-3.98-1.38 0-2.35.53-3.04 1.22v-.87h-3.07v10.88z"
              fill="#DAFFDB"
            />
            <path
              d="M152.31 193c3.03 0 4.74-1.51 4.74-3.65 0-1.89-1.09-2.91-3.31-3.33l-1.2-.25c-.63-.13-.98-.4-.98-.78 0-.48.42-.84 1.4-.84 1.16 0 2.51.36 3.58.84v-2.82c-.89-.4-2.2-.73-3.56-.73-2.95 0-4.47 1.6-4.47 3.56 0 2.09 1.38 2.97 3.05 3.28l1.24.25c.72.13 1 .44 1 .84 0 .58-.5.9-1.44.9a9.6 9.6 0 01-3.82-1v2.97c.93.36 2.29.76 3.78.76z"
              fill="#DAFFDB"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Logo;