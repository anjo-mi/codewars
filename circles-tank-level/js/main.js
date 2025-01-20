function tankvol(h,d,vt){
    const r = d/2;
    const l = vt / (Math.PI * r * r);
    const radians = 2 * (Math.acos(( r - h ) / r));
    return Math.trunc((r * r * (radians - Math.sin(radians)) / 2) * l);
}