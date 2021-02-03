# rdrr.io Redirect

Browser extension that redirects rdocumentation.org links to rdrr.io.

## Why?

rdocumentation.org is run by DataCamp. [They](https://www.buzzfeednews.com/article/daveyalba/datacamp-sexual-harassment-metoo-tech-startup) [are](https://www.businessinsider.com/datacamp-ceo-jonathan-cornelissen-leave-sexual-misconduct-allegation-2019-4?op=1) [not](https://www.vice.com/en/article/8xzn3v/datacamp-ceo-steps-down-after-sexual-misconduct-allegations-prompt-backlash) [good](https://www.noamross.net/2019/04/12/datacamp-sexual-assault/) [people](https://dnlmc.medium.com/dont-use-datacamp-ef04adcf1b7f).


## Install

Extension zip/XPI files are available at [releases](https://github.com/dill/rdrr-redirect/releases). Download, then drop onto the extensions/addon tab in Firefox/Chrome.

Other stuff:

* Firefox: [temporary](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
* Chrome: [permanent](https://superuser.com/questions/247651/how-does-one-install-an-extension-for-chrome-browser-from-the-local-file-system/247654#247654)

## Develop

* Clone the repo and `cd` into it
* Install tools:
	* [Node.js](https://nodejs.org/en/)
	* [Yarn](https://yarnpkg.com/en/)
* Install dependencies: 
	* `yarn`
* Run add-on in isolated Firefox instance using [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext):
	* `yarn serve`
* Bundle add-on into a zip file for distribution:
	* `yarn bundle`



Thanks to `nitrohorse` for [`amazon-smile-redirect`](https://gitlab.com/nitrohorse/amazon-smile-redirect) which this add-on is based on.
