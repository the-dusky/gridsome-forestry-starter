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
example__field_group:
  select_field__card: components/Wide Card/wide-wide-world.md
  sortable_list__card:
  - components/Tall Card/learn-about-secret-network.md
  - components/Wide Card/wide-wide-world.md
  - components/Tall Card/explore-the-ecosystem.md
  - components/Tall Card/develop-with-us.md
  blocks__card:
  - template: big-card-template
    type: Wide Card
    title: Something
    image: "/uploads/markus-spiske-516263-unsplash.jpg"
  type: Tall Card
  title: Title Subtitle Card
  subtitle: Something
  image: "/uploads/mike-dorner-173502-unsplash.jpg"
example__repeatable_field_group:
- name: Second Repeat
  sortable_list:
  - components/Tall Card/develop-with-us.md
  - components/Tall Card/develop-with-us.md
  - components/Tall Card/explore-the-ecosystem.md
  - components/Tall Card/learn-about-secret-network.md
  - components/Wide Card/wide-wide-world.md
  - components/Tall Card/develop-with-us.md
- sortable_list:
  - components/Tall Card/learn-about-secret-network.md
  - components/Wide Card/wide-wide-world.md
  - components/Tall Card/explore-the-ecosystem.md
  - components/Tall Card/develop-with-us.md
  name: First Repeat

---
