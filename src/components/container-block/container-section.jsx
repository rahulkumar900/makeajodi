/* eslint-disable react/prop-types */

export default function Container({ className = '',children }) {
  return <section  className={`${className} px-2 md:px-8 py-6 md:pt-16 `}>{children}</section>;
}
