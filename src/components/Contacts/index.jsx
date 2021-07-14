import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ContactSection, Content, DevInfo, GridSection, SocialMedia } from "./styles";

export default function Contacts() {
  return (
    <ContactSection>
      <h2>Contatos</h2>
      <Content>
        <GridSection>
          <h3>Moda viva</h3>
          <SocialMedia>
            <li>
              <FontAwesomeIcon icon={faYoutube} size="2x" alt="YouTube" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" alt="Instagram" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" alt="Twitter" />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                alt="Facebook"
              />
            </li>
          </SocialMedia>
        </GridSection>
        <GridSection>
          <h4>
            Site elaborado durante o{" "}
            <a target="_blank" href="https://www.hiringcoders.com.br/">
              Hiring Coders!
            </a>
          </h4>
          <DevInfo>
            <h5>Desenvolvedor: </h5>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/felipeblobo"
            >
              <FontAwesomeIcon
                className="icone"
                icon={faGithub}
                size="2x"
                style={{ color: "#5B2B1A" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/felipelobo23/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ color: "#5B2B1A" }}
              />
            </a>
          </DevInfo>
        </GridSection>
      </Content>
    </ContactSection>
  );
}
