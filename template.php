<?php

/**
 * Implements theme_preprocess_html().
 *
 * @param $variables
 */
function WEBSITE_NAME_preprocess_html(&$variables) {
  // Add the viewport meta tag.
  $viewport = array(
      '#tag' => 'meta',
      '#attributes' => array(
        'name' => 'viewport',
        'content' => 'width=device-width, initial-scale=1, maximum-scale=1',
      ),
  );
  drupal_add_html_head($viewport, 'viewport');
}

/**
 * Implements theme_preprocess_page().
 *
 * @param $variables
 */

function WEBSITE_NAME_preprocess_page(&$variables) {

  if (drupal_is_front_page()) {

    // removes message "no front page content is created"
    unset($variables['page']['content']['system_main']['default_message']);
    drupal_set_title('');
  }
}

/**
 * Implements theme_preprocess_image().
 *
 * @param $variables
 */
function WEBSITE_NAME_preprocess_image(&$variables) {

  // Remove image widths and heights.
  foreach (array('width', 'height') as $key) {
    unset($variables[$key]);
  }
}
