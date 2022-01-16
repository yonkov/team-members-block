## Inpsyde Challenge
Inpsyde Challenge is a plugin that creates a custom block for the WordPress Block editor, called "Team Members". The plugin runs on post type page only and empowers the editorial team of the site to easily select team-members via custom Gutenberg Block: [Image One: Custom Gutenberg Block](https://i.imgur.com/aDgkrdZ.png) Once the team member is selected and the page is published, it appears on the site's frontend in the following format:
1. Featured Image
2. Name
3. Position in the company
![Image Two: Plugin Frontend](https://i.imgur.com/3bu91V9.png)
Once it is clicked, a modal overlay pops up with additional info about the team member.
1. Name
3. Description
5. Social links
![Image Three: Plugin Frontend](https://i.imgur.com/Xt1HuSs.png)
The team members are added on the site via post type Team Members. As per the challenge requirements, the custom post type does not have a single nor an archive page - the only way to display the team member is inside the page content.Some of the data, e.g. position and social links are added via custom meta boxes:
![Image Four: Social Links on Plugin Backend](https://i.imgur.com/1lvebct.png)

## Developer's Info
This plugin is bootstrapped by running `npx @wordpress/create-block inpsyde-challenge`. It uses JSX, React and Typescript and requres a build step to run the code. If you want to make any changes, you need to clone or download this repository, install and activate this plugin, then run:

    npm i
    npm start

### Frontend
No 3-rd party libraries are used for the output of the custom block. The overlay modal is a css-only solution - no js is used.
### React / Typescript
This plugin uses typeScript with react.js to create a custom Gutenberg block. This is done to minimize potential errors and improve the project's predictability

### Composer
The plugin supports Composer and uses the following composer dependencies:
1. [PHP Unit](https://phpunit.readthedocs.io/en/9.5/) to test the php code
2. [Inpsyde PHP Coding Standards](https://phpunit.readthedocs.io/en/9.5/) - PHP CodeSniffer to check for errors and beautify the code

#### How to Check PHP FIles For Errors Using PHP CodeSniffer
The plugin uses [Inpsyde PHP Coding Standards](https://github.com/inpsyde/php-coding-standards). It is based on the WordPress coding standards and uses the famous [php_codesniffer](https://packagist.org/packages/squizlabs/php_codesniffer)

You can check a file for php errors by running the following command in the root directory:
`vendor\bin\phpcs.bat --standard="Inpsyde" ./inpsyde-challenge.php`

#### How to Fix the Errors Automatically Using PHP CBF
If there are any errors, you can attempt to automatically fix them by running:
`vendor\squizlabs\php_codesniffer\bin\phpcbf.bat --standard="Inpsyde" inpsyde-challenge.php`

### PHP
The plugin's data - team members get added in the database via custom post type "team members". Custom data, e.g. company position and social links are stored with custom meta boxes. No ACF or any other 3-rd party plugin or framework is used.
### Tests
You can execute a test by running `vendor\bin\phpunit` in the command line. 