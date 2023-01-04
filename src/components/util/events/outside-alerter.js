import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const useOutsideAlerter = (ref, callback) => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
};

/**
 * Component that alerts if you click outside of it
 */

const OutsideAlerter = props => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
};

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideAlerter;
