// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Navigation improvements!",
      content: "We've made improvements to the navigation for the Docker documentation, and we hope you find them helpful!",
      target: "DocumentationText",
      placement: "top"
    },
    {
      title: "Top Navigation",
      content: "Use the top navigation to discover the types of content available.",
      target: "top-nav",
      placement: "right"
    },
    {
      title: "Left Navigation",
      content: "Use the left navigation for a structured view of content within a top-level category.",
      target: "left-nav",
      placement: "right"
    },
    {
      title: "Feedback Links",
      content: "Use the feedback links to edit the page, provide feedback, or find out how to get support.",
      target: "feedback-links",
      placement: "left"
    },
    {
      title: "In-page navigation",
      content: "Use the in-page navigation links to jump to specific areas within the page you are viewing.",
      target: "side-toc",
      placement: "left"
    }
  ],
  showPrevButton: true,
  scrollTopMargin: 100
}

// Start the tour!
hopscotch.startTour(tour);
