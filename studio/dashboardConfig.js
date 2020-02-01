export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e355c122dc1112187ba4608',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p188tif8',
                  apiId: '11479422-ecc3-447d-bb61-06cd08d630ea'
                },
                {
                  buildHookId: '5e355c13c43c806060ae72db',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jnm9njmz',
                  apiId: '68d7f593-52f6-4446-aca1-c20d223b40d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arsenijesavic/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jnm9njmz.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
