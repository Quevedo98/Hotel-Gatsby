// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
exports.createPages = async ({actions, graphql, reporter}) =>{
  const resultado = await graphql(`
    query{
      allDatoCmsHabitacion {
          nodes {
              slug
          }
      }
    }
  `);

  // console.log(resultado.data.allDatoCmsHabitacion.nodes);

  if(resultado.error){
    reporter.panic('No hubo resultados'. resultado.error);
  }

  //si hay paginas, crear los archivos 
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;//se obtienen las habitaciones

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/habitaciones.js'),
      context: {
        slug: habitacion.slug
      }
    })
  });
}