<?php
// Simple PHP test file - remove after verifying PHP works
header('Content-Type: application/json');
echo json_encode([
    'success' => true,
    'message' => 'PHP is working!',
    'php_version' => phpversion(),
    'curl_enabled' => function_exists('curl_init'),
    'server' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'
]);
?>

