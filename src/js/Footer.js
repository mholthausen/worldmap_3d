import React from 'react';

/**
 * Bundles the Footer
 */
function Footer() {
  return (
    <React.Fragment>
      <footer>
        <address>
          <ol>
            <li>&copy; terrestris GmbH & Co. KG</li>
            <li>
              <a
                href="https://www.terrestris.de/en/datenschutzerklaerung/"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
          </ol>
        </address>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
