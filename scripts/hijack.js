function hijackLink(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });

    var linkList = [].slice.call(document.querySelectorAll('a'));
    linkList.forEach(hijackLink);
