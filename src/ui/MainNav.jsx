import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
  HiOutlineUserPlus,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyleNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyleNavLink to="dashboard">
          <HiOutlineHome />
          <span>Dashboard</span>
        </StyleNavLink>
      </li>
      <li>
        <StyleNavLink to="bookings">
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </StyleNavLink>
      </li>
      <li>
        <StyleNavLink to="cabins">
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </StyleNavLink>
      </li>
      <li>
        <StyleNavLink to="users">
          <HiOutlineUsers />
          <span>Users</span>
        </StyleNavLink>
      </li>
      <li>
        <StyleNavLink to="settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyleNavLink>
      </li>
      <li>
        <StyleNavLink to="login">
          <HiOutlineHome />
          <span>Login</span>
        </StyleNavLink>
      </li>
      <li>
        <StyleNavLink to="asfarusers">
          <HiOutlineUserPlus />
          <span>Asfar Users</span>
        </StyleNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
