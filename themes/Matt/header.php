<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php do_action( 'wp_body_open' ); ?>

<?php // All header content goes below this line ?>
<header class="header">
	<div class="header-wrapper">
		<button id="show-nav" class="navbar-toggle slide-menu-toggle">
			<span></span>
			<span></span>
		</button>
		<p>Scroll <br />to navigate</p>
	</div>
</header>
<?php include get_theme_file_path( '/templates/includes/menu.php' ); ?>

<?php // Don't put content below this line ?>
<main>