import chroma from "chroma-js";

function lighten(colorText, hslPercent){
    const color = chroma(colorText);
    return color.set("hsl.l", color.get("hsl.l") + hslPercent);
}

function darken(colorText, hslPercent){
    return lighten(colorText, -hslPercent);
}

const chromaUtil ={
    lighten: lighten,
    darken: darken
}

export default chromaUtil;