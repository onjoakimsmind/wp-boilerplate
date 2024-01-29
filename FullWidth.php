<?php
/**
 * Template Name: Full Width
 */

get_header() ?>

    <article class="max-w-screen-lg mx-auto">

        <h1 class="text-3xl font-semibold"><?php the_title() ?></h1>
        <div class="mt-4">
            <?php the_content() ?>
        </div>
        <div class="mt-4 bg-red-500 w-[33.3333333%] h-32">
        </div>
        

    </article>

<?php get_footer() ?>