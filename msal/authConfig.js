// configuration must be present in .env file as well in next.config.js

const CLIENT_ID = process.env.CLIENT_ID;
export const API_SCOPE = process.env.API_URL;
const REDIRECT_URL = process.env.REDIRECT_URL;
const DOMAIN_NAME = process.env.DOMAIN_NAME;
const AUTHORITY = `https://${DOMAIN_NAME}.ciamlogin.com/${process.env.TENANT_ID}`;
const KNOWN_AUTHORITY = `${DOMAIN_NAME}.ciamlogin.com`;

/* console.log("API_SCOPE: ", API_SCOPE);
console.log("REDIRECT_URL: ", REDIRECT_URL);
console.log("CLIENT_ID: ", CLIENT_ID);
console.log("TENANT_ID: ", process.env.TENANT_ID);
console.log("AUTHORITY: ", AUTHORITY);
console.log("KNOWN_AUTHORITY: ", KNOWN_AUTHORITY); */

export const msalConfig = {
    auth: {
        clientId: CLIENT_ID,
        authority: AUTHORITY,
        knownAuthorities: [KNOWN_AUTHORITY],
        redirectUri: REDIRECT_URL,    
    },
    cache: {// Optional
        cacheLocation: 'sessionStorage',  // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false,  // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginRequest = {
    scopes: [API_SCOPE]
};

export const userDataLoginRequest = {
    scopes: ["user.read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};