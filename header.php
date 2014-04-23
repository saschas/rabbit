<header>
 <?php 
        $cleanmenu = wp_nav_menu( array( 
        'theme_location' => 'header-menu', // we've registered a theme location in functions.php
        'container' => false, // this is usually a div outside the menu ul, we don't need it
        'items_wrap' => '<nav id="%1$s" class="%2$s">%3$s</nav>', // replacing the ul with nav
        'echo' => false, // don't display it just yet
        'depth' => 1,
        'walker' => new Description_Walker
    ) );
     
    // now we're ready to display, but when we do we'll replace the li elements with spans
    //$navi = str_replace( 'li', 'span', $cleanmenu );
    $navi = str_replace( 'ul', 'div', $cleanmenu );
    echo $navi; 

    ?>


<?php
    global $wp_query;
    if( empty($wp_query->post->post_parent) ) 
      {
         $parent = $wp_query->post->ID;
      } 
    else 
     {
         $parent = $wp_query->post->post_parent;
     } ?>
 
<?php if(wp_list_pages("title_li=&child_of=$parent&echo=0" )): ?>
<nav class="sub-nav">
    <?php echo strip_tags(wp_list_pages("title_li=&child_of=$parent&echo=0" ), '<a>'); ?>
</nav>
<?php endif; ?>

</header>

