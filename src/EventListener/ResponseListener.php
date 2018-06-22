<?php
/**
 * Created by PhpStorm.
 * User: Daedalus
 * Date: 01/06/2018
 * Time: 19:06
 */

namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\FilterResponseEvent;

class ResponseListener
{
    public function onKernelResponse(FilterResponseEvent $event)
    {
        $oResponse = $event->getResponse();


        // $oResponse->headers->set('Content-Type', 'application/json');
        // Allow all websites
        $oResponse->headers->set('Access-Control-Allow-Origin', '*');
        // Or a predefined website
        // $oResponse->headers->set('Access-Control-Allow-Origin', 'https://jsfiddle.net/');
        // You can set the allowed methods too, if you want
        $oResponse->headers->set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH, OPTIONS');
    }
}
