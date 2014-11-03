Sass+Jade Boilerplate for generic CSS/HTML
=============
Coderiver.com.ua boilerplate.

I'm using this as a starting template for almost any project now.
It includes sprites, assorted mixins (aka code snippets), file structure, jquery+cycle+scrollto (most usable these days).
And, that's it.

You need to have Compass installed for it to work properly.

Structure
=============
`/sass/lib/base` - all the mixins and libs needed for us.

`/sass/screen.sass` - agregates all .sass files.

`/sass/index.sass` - styles for the mainpage.

Naming blocks
=============
I use BEM naming, meaning `.block` for independent block. `.block__element` for elements inside that block. And `.block_modification` for modification of the block.


States of the blocks use prefix `.is-*`. For example `.is-running`, `.is-hidden`, `.is-open`.

Hooks for js should use prefix `.js-*`.
