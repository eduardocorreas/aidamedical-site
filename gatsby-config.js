module.exports = {
  siteMetadata: {
    title: `Aida Medical - Sua identidade é a nossa marca!`,
    description: `Somos uma agência especializada em desenvolvimento de Branding, criação de marcas, sites, sistemas e aplicativos, treinamento de vendas`,
    author: `Aida Brasil`,
    keywords:
      'Agência, Belém, Pará, Branding, Marca, Identidade, Desenvolvimento, Redes Sociais, Sistemas, Aplicativos, Marketing, Marketing Pessoal, Crescimento, Vendas, TI, Grupo, Brasil, Comunicação, Aida Medical, Medical, Medicina, Profissionais, Saúde, Enfermagem, Gestão,Hospital, Hospitalar, Meta, Objetivo, Clínica, Administração, Gestores, Diretores',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00A099`,
        theme_color: `00A099`,
        display: `minimal-ui`,
        icon: `src/assets/images/icons/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printReject: true,
        tailwind: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
