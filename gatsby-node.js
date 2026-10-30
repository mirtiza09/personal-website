const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogList = path.resolve(`./src/templates/blog-list.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges;
  let blogPostsCount = 0;

  posts.forEach((post, index) => {
    const id = post.node.id;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    // Change here: Use the slug directly without adding '/blog'
    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    });

    // Count blog posts.
    if (post.node.frontmatter.template === "blog-post") {
      blogPostsCount++;
    }
  });

  // Create blog-list pages
  const postsPerPage = 9;
  const numPages = Math.ceil(blogPostsCount / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Use the frontmatter slug if it exists
    const slug = node.frontmatter.slug || createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// CMS stores images as /assets/... paths (rewritten to relative ones by
// gatsby-plugin-netlify-cms-paths); resolve them, and /illustrations/*.svg, to
// File nodes so templates get childImageSharp (raster) or publicURL (SVG).
exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: "MarkdownRemarkFrontmatter",
      fields: {
        featuredImage: {
          type: "File",
          resolve: (source, args, context) => {
            if (!source.featuredImage) return null;
            return context.nodeModel.findOne({
              type: "File",
              query: {
                filter: {
                  sourceInstanceName: { in: ["assets", "illustrations"] },
                  // win32 basename also splits on "\", which the plugin emits on Windows
                  base: { eq: path.win32.basename(source.featuredImage) },
                },
              },
            });
          },
        },
      },
    }),
  ]);
};
