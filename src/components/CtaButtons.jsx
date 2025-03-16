import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image, Button, Form, Modal } from "react-bootstrap";

import wap from "../../src/app/assets/images/wap.webp";
import tele from "../../src/app/assets/images/tele.png";
import skype from "../../src/app/assets/images/skype.png";

const CtaButtons = () => {
    return (
        <div className="whatsapp-cta">
            <ul>
                <li>
                    <a target="_blank" href="https://wa.me/9487734068">
                        <Image src={wap} alt="whatsapp" className="wapctaimg" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://t.me/Hello1TechSpot">
                        <Image src={tele} alt="telegram" className="wapctaimg" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://join.skype.com/invite/yPlO3hCuKpeP">
                        <Image src={skype} alt="skype" className="wapctaimg" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default CtaButtons