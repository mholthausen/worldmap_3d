import React from "react";

/**
 * Bundles the Footer
 */
const Footer: React.FC = () => {
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
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
          </ol>
        </address>
      </footer>
    </React.Fragment>
  );
};

export default Footer;