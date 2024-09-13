<?php

namespace Drupal\custom_algolia\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Returns responses for Custom Algolia routes.
 */
class CustomAlgoliaController extends ControllerBase {

  /**
   * Returns a page with Algolia implementation.
   */
  public function content() {
    $build = [
      '#markup' => '<div id="searchbox"></div>
                    <div id="hits"></div>
                    <div id="pagination"></div>',
      '#attached' => [
        'library' => [
          'custom_algolia/custom_algolia',
        ],
      ],
    ];
    return $build;
  }

}
