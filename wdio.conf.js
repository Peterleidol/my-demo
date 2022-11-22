user= process.env.LT_USERNAME || "duypeterle3",
key= process.env.LT_ACCESS_KEY || "Oqdeo5Bo0dk0pmJlzcTWAAminXIlhB3LZGXp4HZIrBXrUg3tWu",
 
exports.config = {
    user,
    key,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
 
    capabilities: [{   
 
        name: "Page Object Pattern",
        build: "wdio-PageObjectPattern",
        maxInstances: 5,
        browserName: 'chrome',
        version:"64.0",
        acceptInsecureCerts: true,
        network: true,
        video: true,
        visual: true,
        console: true,
 
    }],
 
    logFile : './logDir/api.log',
    services: [
        ['lambdatest', {
            tunnel: true
        }]
    ],
    hostname: 'hub.lambdatest.com',
    path: '/wd/hub',
    port: 80,
 
    baseUrl: 'https://www.saucedemo.com/',
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
 
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    } 
}
