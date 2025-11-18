<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class DesignController extends AbstractController
{
    #[Route('/design', name: 'app_design')]
    public function index(): Response
    {

        return $this->render('design/index.html.twig', [
            'controller_name' => 'DesignController',
        ]);
    }


    #[Route('/second', name: 'app_second')]
    public function second(): Response
    {

        return $this->render('design/second.html.twig', [
            'controller_name' => 'DesignController',
        ]);
    }
}
