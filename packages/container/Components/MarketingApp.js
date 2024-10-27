import { useRef } from "react";
import React from "react";
import {mount} from "marketing/MarketingApp"
import { useEffect } from "react";

export default()=>{
    const ref = useRef(null);

    useEffect(()=>{
        mount(ref.current);
    }, [])

    return <div ref={ref}>

    </div>
}