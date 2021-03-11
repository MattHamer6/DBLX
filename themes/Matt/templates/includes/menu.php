<div class="slide-menu">

  <div id="hide-nav" class="slide-menu-toggle">
    <p>Close <span><i class="fas fa-times"></i></span></p>
  </div>

  <?php // Main nav ?>
  <div class="slide-menu-items">
    <nav>
      <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => false)); ?>
    </nav>
  </div>

  <?php // Footer ?>
  <div class="slide-menu-footer">
    <?php wp_nav_menu(array('theme_location' => 'footer', 'container' => false)); ?>
  </div>
</div>