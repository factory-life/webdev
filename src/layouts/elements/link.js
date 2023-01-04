import NextLink from 'next/link';
import {useRouter} from "next/router";

const scrollUpContainer = el => {
  if(!!el && el.scrollTop > 0) {
    el.scrollTo(
      {top: 0, left: 0, behavior: 'smooth'}
    );

    return true;
  }
  return false;
}

const scrollToTop = () => {
  const layout = document.getElementById('scroll-container');

  scrollUpContainer(layout);

  return true;
};

const Link = ({
  scroll = false,
  href,
  url,
  children,
  onClick,
  exact = false,
  className,
  ...props
}) => {
  const added = {};
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if(!!url) {
    added["as"] = url;
  }

  return (
    <NextLink href={href} passHref {...added}>
      <a {...props} className={isActive ? `${className} active` : className} onClick={scroll ? scrollToTop : onClick}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;