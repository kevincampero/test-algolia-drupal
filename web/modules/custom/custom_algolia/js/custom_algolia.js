document.addEventListener('DOMContentLoaded', function () {
  console.error('los divs fueron encontrados')
  if (document.getElementById('searchbox') && document.getElementById('hits') && document.getElementById('pagination')) {
    const searchClient = algoliasearch('OG0QOMCXMZ', '4f13711c647f246a198a5ae84816f52d');

    // Configura la instancia de InstantSearch
    const search = instantsearch({
      indexName: 'data',
      searchClient: searchClient,
    });

    // Agrega el widget de búsqueda
    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Search...',
      })
    );

    // Agrega el widget de resultados de búsqueda
    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          item: `
            <article>
              <div>
                <h1>{{#highlight "name"}}{{/highlight}}</h1>
                <p>{{#highlight "description"}}{{/highlight}}</p>
                <p>{{#highlight "type"}}{{/highlight}}</p>
              </div>
            </article>
          `,
        },
      })
    );

    // Agrega el widget de paginación
    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
      })
    );

    // Inicia la búsqueda
    search.start();
  } else {
    console.error('No se encontraron los elementos de búsqueda en el DOM.');
  }
});
