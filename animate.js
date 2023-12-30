var scroller = scrollama();

scroller
  .setup({
    step: '.animista',
    offset: 1,
  })
  .onStepEnter(function(response) {
    response.element.classList.add('slide-in-right');
  });