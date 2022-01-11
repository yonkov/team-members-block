This plugin is bootstrapped by running `npx @wordpress/create-block` inpsyde-challenge. It uses JSX, React and Typescript and requres a build step to run the code. If you want to make any changes, you need to clone or download this repository, then run:

    npm i
    npm start

### Composer
The plugin uses 2 composer dependencies:
1. [PHP Unit](https://phpunit.readthedocs.io/en/9.5/) to test the code
2. [Inpsyde PHP Coding Standards](https://phpunit.readthedocs.io/en/9.5/) - PHP CodeSniffer to check for errors and beautify the code

#### How to Check PHP FIles For Errors Using PHP CodeSniffer
The plugin uses [Inpsyde PHP Coding Standards](https://github.com/inpsyde/php-coding-standards). It is based on the WordPress coding standards and uses the famous (php_codesniffer)(https://packagist.org/packages/squizlabs/php_codesniffer)

You can check a file for php errors by running the following command in the root directory:
`vendor\bin\phpcs.bat --standard="Inpsyde" ./inpsyde-challenge.php`

#### How to Fix the Errors Automatically Using PHP CBF
If there are any errors, you can attempt to automatically fix them by running:
`vendor\squizlabs\php_codesniffer\bin\phpcbf.bat --standard="Inpsyde" inpsyde-challenge.php`