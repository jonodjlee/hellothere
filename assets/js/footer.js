function renderfooter() {
    var a = (new Date().getFullYear());
    var template = document.getElementById('copyright').innerHTML;
    var rendered = Mustache.render(template, {
        copyright: ('© ' + a + ' Jonathan Lee. All rights reserved.')
    });
    document.getElementById('copyright').innerHTML = rendered;
}
