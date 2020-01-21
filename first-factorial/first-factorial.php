<?php

function first_factorial($num){
    return $num - 1 === 0 ? $num : $num * first_factorial($num-1);
}

echo first_factorial(4); //24