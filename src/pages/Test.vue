<template>
  <Layout>
    <div class="container">
      <div v-for="(component, i) in pageComponents" :key="i">
        <component :is="component.name" v-bind="{...component.props}"/>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  data() {
    return {
      pageComponents: null
    }
  },
  mounted() {
    this.pageComponents = [
      {
          name: "LatestJournals",
          props: {
            journals: this.$page.journals.edges
          }
        },
        {
          name: "Hero",
          props: {}
        },
        {
          name: "ProjectsGrid",
          props: {
            projects: this.$page.projects.edges
          }
        },
        
      ]
  }
}
</script>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<style>

</style>