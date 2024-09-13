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
    return [
      '#markup' => '<p>Página para la implementación de ALGOLIA.</p>',
    ];
  }

}
