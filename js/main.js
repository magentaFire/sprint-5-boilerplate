var api = {
  url: "http://examen-laboratoria-sprint-5.herokuapp.com/topics/"
}

var plantillaTopics = '<div class="row">' +
                        '<div class="col s12 m10">' +
                          '<div class="card blue-grey darken-1">' +
                            '<div class="card-content white-text">' +
                              '<span class="">**titulo**  -  **autor**</span>' +
                              '<span class="right">respuestas: **respuestas**</span>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>'

$(document).ready(start);

function start(){
  $.getJSON(api.url, function(topics) {
    topics.forEach(crearTopics)
  });
  $(".btn-crear-tema").click(crearNuevoTema)
}

function crearTopics(topic){
  var $container = $(".themes-container")
  var plantillaTopicsNueva = plantillaTopics.replace('**titulo**', topic.content)
    .replace('**autor**', 'por: ' + topic.author_name)
    .replace('**respuestas**', topic.responses_count);
  $container.append(plantillaTopicsNueva);
}

function crearNuevoTema(topic){
  $.post(api.url, {
    author_name: $("#authorName").val(),
    content: $("#textarea").val(),
  }),
  crearTopics(topic);
}
