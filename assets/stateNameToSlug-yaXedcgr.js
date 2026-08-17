function a(e=""){return String(e).toLowerCase().trim().replace(/&/g,"and").replace(/[()]/g,"").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}export{a as s};
