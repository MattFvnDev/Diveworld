const convertPathname = {
  "o-nas": "O nas",
  "oferta-grupowa": "Oferta grupowa",
}

export const convertPathnameToTitle = (pathname) => {
  return (
    convertPathname[pathname] ||
    pathname
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  )
}
