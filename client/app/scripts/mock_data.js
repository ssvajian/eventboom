window.Boom = window.Boom || {}

window.Boom.Data = [
  {
    id: 1,
    title: 'My event',
    description: "Hi Everyone, <br><br> I’m looking to put together a dinner for 6 at my house in Potrero. Aenean vel tellus mattis, mollis tortor sit amet, interdum tellus. Suspendisse sollicitudin, orci vitae condimentum adipiscing. Maecenas vitae hendrerit arcu, sit amet cursus nulla. Nam faucibus lorem quis risus bibendum, eu placerat arcu bibendum. Sed ornare cursus tellus ac blandit. Praesent malesuada eleifend turpis a laoreet. Proin non leo ultrices lacus sagittis consectetur non non sapien. Nunc ut porttitor ipsum, id auctor augue. Aliquam erat volutpat.",
    date: new Date(2013, 6, 29),
    tags: ['sports']
  },
  {
    id: 2,
    title: 'Other event',
    description: 'No way!!!',
    date: new Date(2013, 6, 28),
    tags: ['food', 'fun']
  },
  {
    id: 3,
    title: 'I\'m not going',
    description: 'No way!!!',
    date: new Date(2013, 7, 3),
    tags: ['speed dating']
  }
]

window.Boom.Data.get = function(id) {
  return _.find(window.Boom.Data, function(event){
    return event.id === id;
  });
}
