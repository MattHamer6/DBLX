<?php if( have_rows('landing_page') ): ?>
  <?php while( have_rows('landing_page') ): the_row(); 
    $count = 1;
    $num = 1;
    $id = get_sub_field('section_id');
    $img = get_sub_field('background_image');
    $logo = get_sub_field('logo');
    $largeOne = get_sub_field('first_large_word');
    $largeTwo = get_sub_field('second_large_word');
    $intro = get_sub_field('introduction_word');
    $title = get_sub_field('section_title');
    $subtitle = get_sub_field('section_subtitle');
    $btnText = get_sub_field('button_text');
    $btnLink = get_sub_field('button_link');
  ?>

    <section id="<?php echo $id; ?>" class="landing-page">
      <img class="main-image" src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" />
      <div class="landing-page-wrapper">
        <?php // Main Section Content ?>
        <div class="large-words">
          <p class="one"><?php echo $largeOne; ?></p>
          <p class="two"><?php echo $largeTwo; ?></p>
        </div>
        <div class="main-content">
          <p class="numbers">
            <span>0<?php echo $num; ?></span>
            <span>0<?php echo $num+1; ?></span>
            <?php echo $intro; ?>
          </p>
          <div class="title">
            <h1><?php echo $title; ?></h1>
            <p><?php echo $subtitle; ?></p>
          </div>
          <div class="button-wrapper">
            <a href="<?php echo $btnLink; ?>">
              <i class="fas fa-arrow-right"></i>
              <span><?php echo $btnText; ?></span>
            </a>
          </div>
        </div>
        <?php // Landing Navigation ?>
        <nav>
          <ul>
            <?php while( have_rows('section_navigation') ): the_row(); 
              $name = get_sub_field('section_name');
              $navId = get_sub_field('nav_page_id');
              $active = get_sub_field('is_active');
            ?>

              <li class="<?php echo $active; ?>">
                <a href="#<?php echo $navId; ?>">
                  <p><?php echo $name; ?></p>
                  <span>0<?php echo $count; ?></span>
                </a>
              </li>

              <?php $count++; ?>
            <?php endwhile; ?>
          </ul>
        </nav>
        
      </div>
      <a class="logo" href="<?php echo get_site_url(); ?>" title="<?php echo get_bloginfo(); ?>">
        <img src="<?php echo $logo; ?>" alt="MCG Logo" />
      </a>
    </section>

    <?php $num++; ?>
  <?php endwhile; ?>
<?php endif; ?>