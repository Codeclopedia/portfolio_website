export type techStackIcon ={
   [name:string]: string,
}

export const techStack_PrefixUrl = "/images/tech_stacks/";

export const getRouteUrl = (name: keyof techStackIcon): string => {
    return techStacks[name] ?? "Route not found"; // Return the URL or a fallback message
};

export const techStacks : techStackIcon = {
photoshop:`${techStack_PrefixUrl}adobe-photoshop.svg`,
afterEffects:`${techStack_PrefixUrl}after-effects-cc-logo-svgrepo-com.svg`,
premierePro:`${techStack_PrefixUrl}adobe-premiere-svgrepo-com.svg`,
threeJs:`${techStack_PrefixUrl}brand-threejs.svg`,
html:`${techStack_PrefixUrl}html-5.svg`,
javascript:`${techStack_PrefixUrl}javascript-js.svg`,
mongo:`${techStack_PrefixUrl}mongodb.svg`,
next:`${techStack_PrefixUrl}nextjs.svg`,
node:`${techStack_PrefixUrl}nodejs-original-wordmark.svg`,
postgres:`${techStack_PrefixUrl}postgresql-plain-wordmark.svg`,
reactNative:`${techStack_PrefixUrl}icons8-react-native.svg`,
react:`${techStack_PrefixUrl}icons8-react-js.svg`,
sql:`${techStack_PrefixUrl}sql-database-generic.svg`,
turbo:`${techStack_PrefixUrl}turbo.svg`,
typescript:`${techStack_PrefixUrl}typescript-icon.svg`,
firebase:`${techStack_PrefixUrl}firebase-svgrepo-com.svg`,
supabase:`${techStack_PrefixUrl}supabase-logo-icon.svg`,
appwrite:`${techStack_PrefixUrl}black.svg`,
playstore:`${techStack_PrefixUrl}icons8-playstore.svg`,
applestore:`${techStack_PrefixUrl}icons8-app-store.svg`,
flutter:`${techStack_PrefixUrl}icons8-flutter-480.svg`,
dart:`${techStack_PrefixUrl}dart-svgrepo-com.svg`,
css:`${techStack_PrefixUrl}icons8-css.svg`,
gsap:`${techStack_PrefixUrl}gsap-greensock.svg`,
}
