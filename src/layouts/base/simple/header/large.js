import Link from 'layouts/elements/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { RightContent, NavItem }  from './style';

const CustomLink = props => {
  return (
    <NavItem>
      <Link {...props}  />
    </NavItem>
  );
};

const Large = ({ navItems }) => {
  const { push } = useRouter();

  const onClick = useCallback(href => (e) => {
    e.preventDefault();
    const anchor = document.querySelector(href);
    anchor.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <RightContent>
      {navItems.map((navItem, i) => {
        return (
          <CustomLink
            onClick={onClick(navItem.href)}
            key={i}
            href={navItem.href}>{navItem.label}</CustomLink>
        );
      })}
    </RightContent>
  )
};

export default Large;