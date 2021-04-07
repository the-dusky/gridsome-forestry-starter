---
name: Home
route: "/"
components:
- template: simple-page-title
  title: Secret Network
- template: card-section
  title: Awesome Card Section
  cards:
  - components/Wide Card/wide-wide-world.md
  - components/Tall Card/learn-about-secret-network.md
  - components/Tall Card/explore-the-ecosystem.md
  - components/Tall Card/develop-with-us.md
- template: content
  name: A paragraph about the about
  body: "<p>This is a paragraph</p>"
examples:
  select_field__card: components/Wide Card/wide-wide-world.md
  sortable_list__card:
  - components/Tall Card/learn-about-secret-network.md
  - components/Tall Card/explore-the-ecosystem.md
  - components/Wide Card/wide-wide-world.md

---
