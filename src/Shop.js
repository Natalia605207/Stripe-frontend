import { useRef, useLayoutEffect } from 'react';
import "./App.css";
import { GiStrawberry } from "react-icons/gi";
import strawberry from "./assets/strawberry.jpg";
import { gsap } from "gsap";

export const Shop = ({setShowPayment}) => {
    const animation = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        tl.current = gsap
        .timeline()
        .from(".berry-icon", {
            duration: 1, y: -40, ease: "power0.easeNone", opacity: 0
        })
        .from("h1", {
          duration: 1, y: -40, ease: "power0.easeNone", opacity: 0
        })
        .from(".buy-btn", {
            duration: 0.5, y: 20, ease: "power0.easeNone", opacity: 0
          });
    }, animation);
    return () => ctx.revert()
    }, []);

    return(
        <div className="column" ref={animation}>
            <GiStrawberry className="berry-icon" />
        <h1>FRUIT SHOP</h1>
        <div className="price-box flex">
        <p className="price">$9.99</p>
        </div>
        <img src={strawberry} alt="strawberries" className="berries" />
        <p className="description">Sweet strawberries, 400 g</p>
        <div>
        <button onClick={() => setShowPayment(true)} className="buy-btn">Buy Now!</button>
        </div>
    </div>
    )
}