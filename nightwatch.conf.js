const seleniumServer = require('selenium-server-standalone-jar');

module.exports = {
    src_folders: 'tests',
    output_folder: 'reports',
    // page_objects_path: 'pages',
    // custom_commands_path: 'commands',
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444
    },
    test_workers: {
        enabled: false,
        workers: 'auto' // number of cores used. "auto" means the same number as cores in the cpu
    },
    test_settings: {
        default: {
            launch_url: 'https://arbeidsplassen.nav.no/stillinger',
            selenium_port: 4444,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: './screenshots'
            },
            globals: {
                waitForConditionTimeout: 5000
            },
            desiredCapabilities: {
                browserName: 'chrome'
            },
            cli_args: {
                'webdriver.chrome.driver' : './node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
                'webdriver.gecko.driver' : './node_modules/geckodriver/geckodriver.exe'
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                marionette: true
            }
        }
    }
};
