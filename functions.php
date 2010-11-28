<?php

function my_init_method() {
    wp_enqueue_script( 'scale' , get_bloginfo('stylesheet_directory').'/hover.js' , array('jquery') );
}
add_action('init', 'my_init_method');


?>