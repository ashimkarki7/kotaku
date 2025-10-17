import { Fragment, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderStyles from './Header.module.scss';
import {
  PhoneSvg,
  LogoSvg,
  HeartSvg,
  ViewBoxSvg,
  SearchIconSvg,
  DropDownSvg,
} from '@assets/svg';
import Button from '@/components/Button/Button.tsx';
import DropdownComponent from '@components/Dropdown/Dropdown.tsx';

import { mainRoutesList } from '@routes/RouteListItems.tsx';
import type { IObjectLiteral } from '@common/types.ts';

export const Header = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState({
    name: '',
    isOpen: false,
  });

  const renderDropDown = useCallback(
    (options: any) => (
      <Fragment>
        {options
          ?.filter((filterItems: { exact?: boolean }) => filterItems?.exact)
          ?.map((optionItem: IObjectLiteral) => (
            <li
              style={{
                color: optionItem.path === location.pathname ? '#FF8000' : '',
              }}
              key={optionItem.key}
              onClick={() => {
                navigate(`${optionItem?.path}`);
              }}
            >
              {optionItem?.name}
            </li>
          ))}
      </Fragment>
    ),
    [location]
  );

  return (
    <header id="Header" className={HeaderStyles.headerContainer}>
      {/* Primary Header */}
      <div id="primary-header" className={HeaderStyles.header_banner}>
        <div
          style={{
            minHeight: '24px',
            alignItems: 'flex-start',
            display: 'flex',
            gap: '0.3em',
          }}
        >
          <span>
            <PhoneSvg />
          </span>
          <span
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              display: 'contents',
            }}
          >
            +9779818246138
          </span>
        </div>

        <div style={{ minHeight: '24px' }}>
          TAKE CARE OF YOUR Health 25% OFF USE CODE “ DOFIX03 ”
        </div>

        <div
          id="HeaderOptions"
          style={{
            minHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: '1em',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          {/* Language Dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div
              id="language"
              onClick={() =>
                setDropdownOpen({
                  name: 'language',
                  isOpen:
                    dropdownOpen.name !== 'language' || !dropdownOpen.isOpen,
                })
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.1em',
                cursor: 'pointer',
              }}
            >
              English
              <DropDownSvg />
            </div>
            {dropdownOpen.name === 'language' && dropdownOpen.isOpen && (
              <DropdownComponent
                options={[
                  { label: 'Russian', id: 'russ' },
                  { label: 'Spanish', id: 'spain' },
                  { label: 'Portuguese', id: 'portugal' },
                ]}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            )}
          </div>

          {/* Currency Dropdown */}
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              margin: '14px',
            }}
          >
            <div
              id="currency"
              onClick={() =>
                setDropdownOpen({
                  name: 'currency',
                  isOpen:
                    dropdownOpen.name !== 'currency' || !dropdownOpen.isOpen,
                })
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                cursor: 'pointer',
              }}
            >
              USD
              <DropDownSvg />
            </div>
            {dropdownOpen.name === 'currency' && dropdownOpen.isOpen && (
              <DropdownComponent
                options={[
                  { label: 'EUR', id: 'eur' },
                  { label: 'GBP', id: 'gbp' },
                  { label: 'KWD', id: 'kwd' },
                ]}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            )}
          </div>

          {/* Settings Dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div
              id="settings"
              onClick={() =>
                setDropdownOpen({
                  name: 'settings',
                  isOpen:
                    dropdownOpen.name !== 'settings' || !dropdownOpen.isOpen,
                })
              }
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.1em',
                cursor: 'pointer',
              }}
            >
              Settings
              <DropDownSvg />
            </div>
            {dropdownOpen.name === 'settings' && dropdownOpen.isOpen && (
              <DropdownComponent
                options={[
                  { label: 'My profile', id: 'profile' },
                  { label: 'Cart', id: 'cart' },
                  { label: 'Logout', id: 'logout' },
                ]}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            )}
          </div>
        </div>
      </div>

      {/* Secondary Header */}
      <div id="secondary-header" className={HeaderStyles.header_menu}>
        <div className={HeaderStyles.main_logo}>
          <LogoSvg />
          <div id="menu-items" className={HeaderStyles.menu_item}>
            <nav>
              <ul
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                }}
              >
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/')}>About</li>
                <li onClick={() => navigate('/')}>Contact</li>
              </ul>
            </nav>
          </div>
        </div>

        <div id="HeaderOptions" className={HeaderStyles.actions}>
          <div className={HeaderStyles.search_input_container}>
            <input
              className={HeaderStyles.search_input}
              placeholder="Search..."
              id="search_input"
              anchor-name="search-input"
            />
            <Button
              ariaLabel="Search"
              anchor-target="search-input"
              hasIconOnly={true}
              title={<SearchIconSvg />}
              onClickHandler={() => {
                console.log('search clicked');
              }}
              className={HeaderStyles.btnSearch}
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.1em',
              cursor: 'pointer',
            }}
          >
            <HeartSvg />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ViewBoxSvg />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div
                className={HeaderStyles.bar_icon}
                onClick={() =>
                  setDropdownOpen({
                    name: 'menu',
                    isOpen:
                      dropdownOpen.name !== 'menu' || !dropdownOpen.isOpen,
                  })
                }
              >
                <span />
                <span />
                <span />
                {dropdownOpen.name === 'menu' && dropdownOpen.isOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '133px',
                      top: '11px',
                    }}
                  >
                    <DropdownComponent
                      renderDropDown={renderDropDown}
                      options={mainRoutesList}
                      dropdownOpen={dropdownOpen}
                      setDropdownOpen={setDropdownOpen}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
