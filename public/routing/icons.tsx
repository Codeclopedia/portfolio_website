export type techStackIcon ={
   [name:string]: string,
}

export const techStack_PrefixUrl = "/images/tech_stacks/";

export const getRouteUrl = (name: keyof techStackIcon): string => {
    return techStacks[name] ?? "Route not found"; // Return the URL or a fallback message
};

export const techStacks : techStackIcon = {
photoshop:`${techStack_PrefixUrl}adobe-photoshop.svg`,
threeJs:`${techStack_PrefixUrl}brand-threejs.svg`,
html:`${techStack_PrefixUrl}html-5.svg`,
javscript:`${techStack_PrefixUrl}javascript-js.svg`,
mongo:`${techStack_PrefixUrl}mongodb.svg`,
next:`${techStack_PrefixUrl}nextjs.svg`,
node:`${techStack_PrefixUrl}nodejs-original-wordmark.svg`,
postgres:`${techStack_PrefixUrl}postgresql-plain-wordmark.svg`,
reactNative:`${techStack_PrefixUrl}react-javascript-js-framework-facebook.svg`,
react:`${techStack_PrefixUrl}react.svg`,
sql:`${techStack_PrefixUrl}sql-database-generic.svg`,
turbo:`${techStack_PrefixUrl}turbo.svg`,
typescript:`${techStack_PrefixUrl}typescript-icon.svg`,
}
