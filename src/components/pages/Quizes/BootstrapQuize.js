import React, { useState, useEffect, useCallback, useMemo } from "react";

const BootstrapQuize = () => {
  const [showTimeAlert, setShowTimeAlert] = useState(false);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);

  const htmlContent = useMemo(() => ({
    beginner: {
      title: "Beginner Level Bootstrap Quiz",
      topics: [
        {
          title: "Introduction to Bootstrap",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is Bootstrap?",
              options: [
                "A JavaScript library",
                "A CSS framework",
                "A database system",
                "A web server"
              ],
              correctAnswer: 1,
            },
            {
              question: "Which company originally developed Bootstrap?",
              options: ["Google", "Facebook", "Twitter", "Microsoft"],
              correctAnswer: 2,
            },
            {
              question: "What is the latest version of Bootstrap?",
              options: ["Bootstrap 3", "Bootstrap 4", "Bootstrap 5", "Bootstrap 6"],
              correctAnswer: 2,
            },
            {
              question: "Bootstrap is primarily used for?",
              options: [
                "Backend development",
                "Database management",
                "Frontend development",
                "Server configuration"
              ],
              correctAnswer: 2,
            },
            {
              question: "Which of the following is NOT a feature of Bootstrap?",
              options: [
                "Responsive design",
                "Pre-built components",
                "Database connectivity",
                "Grid system"
              ],
              correctAnswer: 2,
            }
          ]
        },
        {
          title: "Containers and Container-Fluid",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What is the purpose of .container class in Bootstrap?",
              options: [
                "Creates a full-width container",
                "Creates a responsive fixed-width container",
                "Creates a navigation bar",
                "Creates a footer"
              ],
              correctAnswer: 1,
            },
            {
              question: "What does .container-fluid class do?",
              options: [
                "Creates a fixed-width container",
                "Creates a full-width container spanning entire viewport",
                "Creates a navigation container",
                "Creates a form container"
              ],
              correctAnswer: 1,
            },
            {
              question: "Which container class should you use for a full-width layout?",
              options: [".container", ".container-fluid", ".container-full", ".container-wide"],
              correctAnswer: 1,
            },
            {
              question: "Can you nest containers in Bootstrap?",
              options: [
                "Yes, always recommended",
                "No, never allowed",
                "Yes, but not recommended",
                "Only with container-fluid"
              ],
              correctAnswer: 2,
            },
            {
              question: "What happens to .container on different screen sizes?",
              options: [
                "It remains the same width",
                "It adapts to different max-widths",
                "It becomes full-width",
                "It disappears"
              ],
              correctAnswer: 1,
            }
          ]
        },
        {
          title: "Bootstrap 5 Grid System",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "How many columns does Bootstrap's grid system have?",
              options: ["10", "12", "16", "24"],
              correctAnswer: 1,
            },
            {
              question: "Which class is used to create a row in Bootstrap grid?",
              options: [".row", ".grid-row", ".bootstrap-row", ".container-row"],
              correctAnswer: 0,
            },
            {
              question: "What is the purpose of .row class?",
              options: [
                "To create columns",
                "To wrap columns and provide negative margins",
                "To create containers",
                "To add padding"
              ],
              correctAnswer: 1,
            },
            {
              question: "Bootstrap grid system is based on?",
              options: ["CSS Grid", "Flexbox", "Float", "Table display"],
              correctAnswer: 1,
            },
            {
              question: "What happens if column sizes exceed 12 in a row?",
              options: [
                "Error occurs",
                "Columns wrap to next line",
                "Columns shrink automatically",
                "Nothing happens"
              ],
              correctAnswer: 1,
            }
          ]
        },
        {
          title: "Bootstrap 5 Grid Classes",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a column that takes up 6 out of 12 columns on medium screens?",
              options: [".col-md-6", ".col-6-md", ".md-col-6", ".col-medium-6"],
              correctAnswer: 0,
            },
            {
              question: "What does .col-sm-4 mean?",
              options: [
                "4 columns on all screen sizes",
                "4 columns on small screens and up",
                "4 columns only on small screens",
                "4 columns on medium screens"
              ],
              correctAnswer: 1,
            },
            {
              question: "Which breakpoint prefix is used for extra large screens?",
              options: [".col-xl-", ".col-xxl-", ".col-lg-", ".col-el-"],
              correctAnswer: 1,
            },
            {
              question: "What does .col without any number do?",
              options: [
                "Takes full width",
                "Takes equal width with other .col elements",
                "Takes minimum width",
                "Causes an error"
              ],
              correctAnswer: 1,
            },
            {
              question: "Which class is used for extra small screens in Bootstrap 5?",
              options: [".col-xs-", ".col-", ".col-sm-", ".col-es-"],
              correctAnswer: 1,
            }
          ]
        },
        {
          title: "Typography in Bootstrap 5",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class makes text bold in Bootstrap?",
              options: [".font-bold", ".fw-bold", ".text-bold", ".bold"],
              correctAnswer: 1,
            },
            {
              question: "How do you make text italic in Bootstrap 5?",
              options: [".font-italic", ".fst-italic", ".text-italic", ".italic"],
              correctAnswer: 1,
            },
            {
              question: "Which class centers text alignment?",
              options: [".text-center", ".align-center", ".center-text", ".text-middle"],
              correctAnswer: 0,
            },
            {
              question: "What class makes text uppercase?",
              options: [".text-upper", ".text-uppercase", ".uppercase", ".text-caps"],
              correctAnswer: 1,
            },
            {
              question: "Which class is used for lead paragraph?",
              options: [".lead", ".lead-text", ".paragraph-lead", ".text-lead"],
              correctAnswer: 0,
            },
            {
              question: "How do you make text underlined in Bootstrap 5?",
              options: [".text-underline", ".text-decoration-underline", ".underline", ".text-under"],
              correctAnswer: 1,
            },
            {
              question: "Which class makes text smaller?",
              options: [".small", ".text-small", ".font-small", ".size-small"],
              correctAnswer: 0,
            },
            {
              question: "What class removes text decoration?",
              options: [".no-decoration", ".text-decoration-none", ".remove-decoration", ".text-plain"],
              correctAnswer: 1,
            },
            {
              question: "Which class makes text monospace?",
              options: [".font-monospace", ".text-monospace", ".monospace", ".font-mono"],
              correctAnswer: 0,
            },
            {
              question: "How do you make text right-aligned?",
              options: [".text-right", ".align-right", ".text-end", ".right-text"],
              correctAnswer: 2,
            }
          ]
        },
        {
          title: "Bootstrap 5 Colors Classes",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class applies primary color to text?",
              options: [".color-primary", ".text-primary", ".primary-text", ".text-color-primary"],
              correctAnswer: 1,
            },
            {
              question: "How do you apply a danger background color?",
              options: [".bg-danger", ".background-danger", ".danger-bg", ".color-danger-bg"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes text white?",
              options: [".text-white", ".color-white", ".white-text", ".text-color-white"],
              correctAnswer: 0,
            },
            {
              question: "What class applies success color to text?",
              options: [".text-success", ".success-text", ".color-success", ".text-green"],
              correctAnswer: 0,
            },
            {
              question: "Which class applies warning background?",
              options: [".bg-warning", ".background-warning", ".warning-bg", ".yellow-bg"],
              correctAnswer: 0,
            },
            {
              question: "How do you apply info color to text?",
              options: [".text-info", ".info-text", ".color-info", ".text-blue"],
              correctAnswer: 0,
            },
            {
              question: "Which class applies dark background?",
              options: [".bg-dark", ".background-dark", ".dark-bg", ".black-bg"],
              correctAnswer: 0,
            },
            {
              question: "What class applies secondary text color?",
              options: [".text-secondary", ".secondary-text", ".color-secondary", ".text-gray"],
              correctAnswer: 0,
            },
            {
              question: "Which class applies light background?",
              options: [".bg-light", ".background-light", ".light-bg", ".white-bg"],
              correctAnswer: 0,
            },
            {
              question: "How do you apply muted text color?",
              options: [".text-muted", ".muted-text", ".color-muted", ".text-gray"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap 5 Tables",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class is required for basic Bootstrap table styling?",
              options: [".table", ".bootstrap-table", ".table-basic", ".styled-table"],
              correctAnswer: 0,
            },
            {
              question: "How do you make a table striped?",
              options: [".table-striped", ".striped-table", ".table-zebra", ".alternate-table"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes table rows hoverable?",
              options: [".table-hover", ".hover-table", ".table-hoverable", ".hoverable-table"],
              correctAnswer: 0,
            },
            {
              question: "What class makes a table bordered?",
              options: [".table-bordered", ".bordered-table", ".table-border", ".border-table"],
              correctAnswer: 0,
            },
            {
              question: "Which class removes borders from a table?",
              options: [".table-borderless", ".no-border-table", ".table-no-border", ".borderless-table"],
              correctAnswer: 0,
            },
            {
              question: "How do you make a table smaller/compact?",
              options: [".table-sm", ".table-small", ".small-table", ".table-compact"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes a table responsive?",
              options: [".table-responsive", ".responsive-table", ".table-fluid", ".fluid-table"],
              correctAnswer: 0,
            },
            {
              question: "What class applies dark theme to table?",
              options: [".table-dark", ".dark-table", ".table-black", ".black-table"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for table header styling?",
              options: [".table-header", ".thead-dark", ".table-head", ".header-table"],
              correctAnswer: 1,
            },
            {
              question: "How do you apply success color to a table row?",
              options: [".table-success", ".success-row", ".row-success", ".table-row-success"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap 5 Images",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class makes an image responsive?",
              options: [".img-responsive", ".img-fluid", ".responsive-img", ".fluid-img"],
              correctAnswer: 1,
            },
            {
              question: "How do you make an image rounded?",
              options: [".img-rounded", ".rounded", ".img-round", ".round-img"],
              correctAnswer: 1,
            },
            {
              question: "Which class makes an image circular?",
              options: [".img-circle", ".rounded-circle", ".circle-img", ".img-circular"],
              correctAnswer: 1,
            },
            {
              question: "What class creates a thumbnail effect on images?",
              options: [".img-thumbnail", ".thumbnail", ".img-thumb", ".thumb-img"],
              correctAnswer: 0,
            },
            {
              question: "Which class floats an image to the left?",
              options: [".float-left", ".img-left", ".left-float", ".pull-left"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap 5 Buttons and Button Groups",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class is required for basic button styling?",
              options: [".button", ".btn", ".bootstrap-btn", ".styled-btn"],
              correctAnswer: 1,
            },
            {
              question: "How do you create a primary button?",
              options: [".btn-primary", ".button-primary", ".primary-btn", ".btn-main"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes a button larger?",
              options: [".btn-large", ".btn-lg", ".large-btn", ".btn-big"],
              correctAnswer: 1,
            },
            {
              question: "How do you create an outline button?",
              options: [".btn-outline", ".btn-outline-primary", ".outline-btn", ".btn-border"],
              correctAnswer: 1,
            },
            {
              question: "Which class makes a button smaller?",
              options: [".btn-small", ".btn-sm", ".small-btn", ".btn-mini"],
              correctAnswer: 1,
            },
            {
              question: "How do you disable a button?",
              options: [".btn-disabled", ".disabled", ".btn-inactive", ".inactive"],
              correctAnswer: 1,
            },
            {
              question: "Which class creates a button group?",
              options: [".btn-group", ".button-group", ".group-btn", ".btn-container"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a vertical button group?",
              options: [".btn-group-vertical", ".vertical-btn-group", ".btn-group-v", ".btn-vertical"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes a button full width?",
              options: [".btn-block", ".btn-full", ".full-btn", ".btn-width-100"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a danger button?",
              options: [".btn-danger", ".danger-btn", ".btn-red", ".red-btn"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap Badges",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class is used to create a badge?",
              options: [".badge", ".label", ".tag", ".chip"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a primary colored badge?",
              options: [".badge-primary", ".badge bg-primary", ".primary-badge", ".badge-color-primary"],
              correctAnswer: 1,
            },
            {
              question: "Which class makes a badge rounded/pill-shaped?",
              options: [".badge-pill", ".rounded-pill", ".badge-rounded", ".pill-badge"],
              correctAnswer: 1,
            },
            {
              question: "How do you position a badge on a button?",
              options: [
                "Use .badge-position",
                "Use .position-absolute",
                "Badges auto-position",
                "Use .badge-top"
              ],
              correctAnswer: 1,
            },
            {
              question: "Which class creates a success colored badge?",
              options: [".badge-success", ".badge bg-success", ".success-badge", ".green-badge"],
              correctAnswer: 1,
            }
          ]
        },
        {
          title: "Bootstrap Spinners",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a border spinner?",
              options: [".spinner-border", ".spinner", ".loading-spinner", ".border-spinner"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a growing spinner?",
              options: [".spinner-grow", ".grow-spinner", ".spinner-growing", ".growing-spinner"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes a spinner smaller?",
              options: [".spinner-sm", ".spinner-border-sm", ".small-spinner", ".spinner-small"],
              correctAnswer: 1,
            },
            {
              question: "How do you change spinner color?",
              options: [
                "Use .spinner-color-primary",
                "Use .text-primary",
                "Use .spinner-primary",
                "Use .color-primary"
              ],
              correctAnswer: 1,
            },
            {
              question: "Which attribute is important for accessibility in spinners?",
              options: ["role='status'", "aria-label", "aria-hidden", "All of the above"],
              correctAnswer: 3,
            }
          ]
        },
        {
          title: "Bootstrap 5 - List Groups",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a list group?",
              options: [".list-group", ".group-list", ".list", ".group"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for list group items?",
              options: [".list-item", ".list-group-item", ".group-item", ".item"],
              correctAnswer: 1,
            },
            {
              question: "How do you make a list group item active?",
              options: [".active", ".list-active", ".item-active", ".selected"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes list group items actionable/clickable?",
              options: [".list-group-item-action", ".actionable", ".clickable", ".list-action"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a horizontal list group?",
              options: [".list-group-horizontal", ".horizontal-list", ".list-horizontal", ".group-horizontal"],
              correctAnswer: 0,
            },
            {
              question: "Which class disables a list group item?",
              options: [".disabled", ".list-disabled", ".item-disabled", ".inactive"],
              correctAnswer: 0,
            },
            {
              question: "How do you apply contextual colors to list items?",
              options: [
                ".list-group-item-primary",
                ".list-item-primary",
                ".primary-list-item",
                ".list-primary"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which class removes borders from list group?",
              options: [".list-group-flush", ".no-border", ".borderless", ".flush-list"],
              correctAnswer: 0,
            },
            {
              question: "How do you create numbered list groups?",
              options: [".list-group-numbered", ".numbered-list", ".list-numbered", ".group-numbered"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates a list group with badges?",
              options: [
                "Add .badge inside .list-group-item",
                ".list-group-badge",
                ".badge-list",
                ".list-badge"
              ],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap Cards",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a card?",
              options: [".card", ".panel", ".box", ".container"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for card body?",
              options: [".card-body", ".card-content", ".body", ".content"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for card header?",
              options: [".card-header", ".card-head", ".header", ".card-top"],
              correctAnswer: 0,
            },
            {
              question: "How do you add a title to a card?",
              options: [".card-title", ".title", ".card-heading", ".heading"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for card footer?",
              options: [".card-footer", ".card-bottom", ".footer", ".card-end"],
              correctAnswer: 0,
            },
            {
              question: "How do you add an image to a card?",
              options: [".card-img", ".card-img-top", ".card-image", "Both A and B"],
              correctAnswer: 3,
            },
            {
              question: "Which class creates card groups?",
              options: [".card-group", ".card-deck", ".group-card", ".deck-card"],
              correctAnswer: 0,
            },
            {
              question: "How do you create card columns?",
              options: [".card-columns", ".card-masonry", ".columns-card", ".masonry-card"],
              correctAnswer: 0,
            },
            {
              question: "Which class adds text color to card?",
              options: [".text-primary", ".card-text-primary", ".card-primary", ".primary-card"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a horizontal card?",
              options: [
                "Use .row and .col inside card",
                ".card-horizontal",
                ".horizontal-card",
                ".card-row"
              ],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Dropdown Menu in Bootstrap 5",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a dropdown wrapper?",
              options: [".dropdown", ".dropdown-menu", ".dropdown-toggle", ".menu"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for dropdown button?",
              options: [".dropdown-toggle", ".dropdown-btn", ".toggle", ".dropdown-button"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates the dropdown menu?",
              options: [".dropdown-menu", ".menu", ".dropdown-list", ".dropdown-items"],
              correctAnswer: 0,
            },
            {
              question: "How do you create dropdown items?",
              options: [".dropdown-item", ".menu-item", ".dropdown-link", ".item"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute is required for dropdown toggle?",
              options: ["data-toggle", "data-bs-toggle", "data-dropdown", "toggle"],
              correctAnswer: 1,
            },
            {
              question: "How do you create a dropdown divider?",
              options: [".dropdown-divider", ".divider", ".dropdown-separator", ".separator"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes dropdown menu drop up?",
              options: [".dropup", ".dropdown-up", ".drop-up", ".menu-up"],
              correctAnswer: 0,
            },
            {
              question: "How do you disable a dropdown item?",
              options: [".disabled", ".dropdown-disabled", ".item-disabled", ".inactive"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates dropdown header?",
              options: [".dropdown-header", ".dropdown-title", ".menu-header", ".header"],
              correctAnswer: 0,
            },
            {
              question: "How do you align dropdown menu to right?",
              options: [".dropdown-menu-end", ".dropdown-menu-right", ".menu-right", ".align-right"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Collapsible and Accordion in Bootstrap",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a collapsible element?",
              options: [".collapse", ".collapsible", ".toggle", ".accordion"],
              correctAnswer: 0,
            },
            {
              question: "What attribute is used to target collapsible content?",
              options: ["data-target", "data-bs-target", "data-toggle-target", "target"],
              correctAnswer: 1,
            },
            {
              question: "Which class shows collapsible content by default?",
              options: [".collapse.show", ".collapse-show", ".show", ".visible"],
              correctAnswer: 0,
            },
            {
              question: "How do you create an accordion?",
              options: [".accordion", ".accordion-group", ".collapse-group", ".toggle-group"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute ensures only one accordion item is open?",
              options: ["data-parent", "data-bs-parent", "data-accordion", "parent"],
              correctAnswer: 1,
            }
          ]
        },
        {
          title: "Progress Bar in Bootstrap",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which class creates a progress bar container?",
              options: [".progress", ".progress-bar", ".progressbar", ".progress-container"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for the progress bar itself?",
              options: [".progress-bar", ".bar", ".progress-fill", ".fill"],
              correctAnswer: 0,
            },
            {
              question: "How do you set progress bar width?",
              options: [
                "Using width CSS property",
                "Using style='width: 50%'",
                "Using .w-50 class",
                "All of the above",
              ],
              correctAnswer: 3,
            },
            {
              question: "Which class creates a striped progress bar?",
              options: [".progress-bar-striped", ".striped", ".progress-striped", ".bar-striped"],
              correctAnswer: 0,
            },
            {
              question: "How do you make progress bar animated?",
              options: [".progress-bar-animated", ".animated", ".progress-animated", ".bar-animated"],
              correctAnswer: 0,
            },
            {
              question: "Which class applies success color to progress bar?",
              options: [".progress-bar-success", ".bg-success", ".success", ".progress-success"],
              correctAnswer: 1,
            },
            {
              question: "How do you create multiple progress bars in one container?",
              options: [
                "Add multiple .progress-bar inside .progress",
                "Use .progress-multiple",
                "Use .multi-progress",
                "Not possible"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which attribute is used for accessibility in progress bars?",
              options: ["aria-valuenow", "aria-valuemin", "aria-valuemax", "All of the above"],
              correctAnswer: 3,
            },
            {
              question: "How do you add text to progress bar?",
              options: [
                "Add text inside .progress-bar",
                "Use .progress-text",
                "Use .bar-text",
                "Use .progress-label"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which class makes progress bar height smaller?",
              options: [
                "Use inline style height",
                ".progress-sm",
                ".small-progress",
                "Use .h-25 on .progress"
              ],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap 5 Forms",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class is used for form controls?",
              options: [".form-control", ".form-input", ".input", ".control"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a form group?",
              options: [".form-group", ".mb-3", ".form-field", ".field-group"],
              correctAnswer: 1,
            },
            {
              question: "Which class is used for form labels?",
              options: [".form-label", ".label", ".form-text", ".control-label"],
              correctAnswer: 0,
            },
            {
              question: "How do you make a form control larger?",
              options: [".form-control-lg", ".form-large", ".large-input", ".form-control-large"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates inline forms?",
              options: [".form-inline", ".d-flex", ".inline-form", ".form-horizontal"],
              correctAnswer: 1,
            },
            {
              question: "How do you add help text to forms?",
              options: [".form-text", ".help-text", ".form-help", ".text-help"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for readonly inputs?",
              options: [".form-control-plaintext", ".readonly", ".plain-text", ".form-readonly"],
              correctAnswer: 0,
            },
            {
              question: "How do you create floating labels?",
              options: [".form-floating", ".floating-label", ".float-label", ".label-float"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes form control smaller?",
              options: [".form-control-sm", ".form-small", ".small-input", ".form-control-small"],
              correctAnswer: 0,
            },
            {
              question: "How do you style file inputs?",
              options: [".form-control", ".form-control-file", ".file-input", ".input-file"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Bootstrap 5 Select Menu & Data List",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class is used for select elements?",
              options: [".form-select", ".form-control", ".select", ".form-dropdown"],
              correctAnswer: 0,
            },
            {
              question: "How do you make a select element larger?",
              options: [".form-select-lg", ".form-select-large", ".large-select", ".select-lg"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes select element smaller?",
              options: [".form-select-sm", ".form-select-small", ".small-select", ".select-sm"],
              correctAnswer: 0,
            },
            {
              question: "How do you create a multiple select?",
              options: [
                "Add multiple attribute",
                "Use .form-select-multiple",
                "Use .multiple-select",
                "Use .select-multiple"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which HTML element is used for datalist?",
              options: ["<datalist>", "<list>", "<options>", "<data>"],
              correctAnswer: 0,
            },
            {
              question: "How do you connect input with datalist?",
              options: [
                "Using list attribute",
                "Using data-list attribute",
                "Using datalist attribute",
                "Using options attribute"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for range inputs?",
              options: [".form-range", ".form-control", ".range", ".slider"],
              correctAnswer: 0,
            },
            {
              question: "How do you disable a select element?",
              options: [
                "Add disabled attribute",
                "Use .disabled class",
                "Use .form-disabled",
                "Use .select-disabled"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which attribute sets default selected option?",
              options: ["selected", "default", "checked", "active"],
              correctAnswer: 0,
            },
            {
              question: "How do you group options in select?",
              options: ["<optgroup>", "<option-group>", "<group>", "<select-group>"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Radio Buttons, Checkboxes & Toggle Switches",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class is used for form check wrapper?",
              options: [".form-check", ".check-form", ".checkbox", ".radio"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for checkbox/radio inputs?",
              options: [".form-check-input", ".check-input", ".form-input", ".input-check"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for checkbox/radio labels?",
              options: [".form-check-label", ".check-label", ".form-label", ".label-check"],
              correctAnswer: 0,
            },
            {
              question: "How do you create inline checkboxes?",
              options: [".form-check-inline", ".inline-check", ".check-inline", ".form-inline"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates toggle switches?",
              options: [".form-switch", ".toggle-switch", ".switch", ".form-toggle"],
              correctAnswer: 0,
            },
            {
              question: "How do you disable a checkbox?",
              options: [
                "Add disabled attribute",
                "Use .disabled class",
                "Use .form-disabled",
                "Use .check-disabled"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which attribute groups radio buttons?",
              options: ["name", "group", "radio-group", "button-group"],
              correctAnswer: 0,
            },
            {
              question: "How do you make a checkbox checked by default?",
              options: ["checked attribute", "selected attribute", "default attribute", "active attribute"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for indeterminate checkboxes?",
              options: [
                "Set indeterminate property via JavaScript",
                ".form-check-indeterminate",
                ".indeterminate",
                ".check-indeterminate"
              ],
              correctAnswer: 0,
            },
            {
              question: "How do you create button-style checkboxes?",
              options: [
                "Use .btn-check with .btn",
                ".button-checkbox",
                ".btn-checkbox",
                ".check-button"
              ],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Floating Labels",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class creates floating labels?",
              options: [".form-floating", ".floating-label", ".float-label", ".label-float"],
              correctAnswer: 0,
            },
            {
              question: "What is the correct order for floating labels?",
              options: [
                "Input first, then label",
                "Label first, then input",
                "Order doesn't matter",
                "Use separate containers"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which attribute is required for floating labels to work?",
              options: ["placeholder", "id", "name", "value"],
              correctAnswer: 0,
            },
            {
              question: "Can floating labels work with textareas?",
              options: ["Yes", "No", "Only with specific class", "Only in Bootstrap 6"],
              correctAnswer: 0,
            },
            {
              question: "Which elements support floating labels?",
              options: [
                "Input and textarea only",
                "Input, textarea, and select",
                "All form elements",
                "Only input elements"
              ],
              correctAnswer: 1,
            }
          ]
        },
        {
          title: "Carousel",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class creates a carousel?",
              options: [".carousel", ".slider", ".slideshow", ".carousel-container"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for carousel slides container?",
              options: [".carousel-inner", ".carousel-slides", ".slides", ".carousel-content"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for individual slides?",
              options: [".carousel-item", ".slide", ".carousel-slide", ".item"],
              correctAnswer: 0,
            },
            {
              question: "How do you make a slide active by default?",
              options: [".active", ".carousel-active", ".slide-active", ".current"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates carousel controls?",
              options: [".carousel-control-prev", ".carousel-prev", ".prev-control", ".control-prev"],
              correctAnswer: 0,
            },
            {
              question: "How do you add indicators to carousel?",
              options: [".carousel-indicators", ".indicators", ".carousel-dots", ".dots"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute makes carousel auto-slide?",
              options: ["data-bs-ride", "data-ride", "data-auto", "auto-slide"],
              correctAnswer: 0,
            },
            {
              question: "How do you add captions to slides?",
              options: [".carousel-caption", ".slide-caption", ".caption", ".carousel-text"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute controls slide interval?",
              options: ["data-bs-interval", "data-interval", "interval", "slide-interval"],
              correctAnswer: 0,
            },
            {
              question: "How do you disable carousel auto-sliding?",
              options: [
                "data-bs-interval='false'",
                "data-auto='false'",
                "auto-slide='false'",
                "data-ride='false'"
              ],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Validation",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class shows valid feedback?",
              options: [".valid-feedback", ".feedback-valid", ".success-feedback", ".form-valid"],
              correctAnswer: 0,
            },
            {
              question: "How do you show invalid feedback?",
              options: [".invalid-feedback", ".feedback-invalid", ".error-feedback", ".form-invalid"],
              correctAnswer: 0,
            },
            {
              question: "Which class applies valid styling to form controls?",
              options: [".is-valid", ".valid", ".form-valid", ".success"],
              correctAnswer: 0,
            },
            {
              question: "How do you apply invalid styling?",
              options: [".is-invalid", ".invalid", ".form-invalid", ".error"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for tooltip-style validation?",
              options: [".valid-tooltip", ".tooltip-valid", ".validation-tooltip", ".valid-tip"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Modal",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class creates a modal?",
              options: [".modal", ".popup", ".dialog", ".overlay"],
              correctAnswer: 0,
            },
            {
              question: "What class is used for modal dialog?",
              options: [".modal-dialog", ".modal-container", ".dialog", ".modal-wrapper"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for modal content?",
              options: [".modal-content", ".modal-body", ".content", ".modal-container"],
              correctAnswer: 0,
            },
            {
              question: "How do you create modal header?",
              options: [".modal-header", ".modal-head", ".header", ".modal-title-bar"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for modal body?",
              options: [".modal-body", ".modal-content", ".body", ".modal-main"],
              correctAnswer: 0,
            },
            {
              question: "How do you create modal footer?",
              options: [".modal-footer", ".modal-bottom", ".footer", ".modal-actions"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute triggers modal?",
              options: ["data-bs-toggle='modal'", "data-toggle='modal'", "data-modal", "modal-trigger"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Popover",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which attribute enables popover?",
              options: ["data-bs-toggle='popover'", "data-popover", "popover", "data-toggle='popover'"],
              correctAnswer: 0,
            },
            {
              question: "How do you set popover title?",
              options: ["data-bs-title", "title", "data-title", "popover-title"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute sets popover content?",
              options: ["data-bs-content", "content", "data-content", "popover-content"],
              correctAnswer: 0,
            },
            {
              question: "How do you set popover placement?",
              options: ["data-bs-placement", "placement", "data-placement", "popover-placement"],
              correctAnswer: 0,
            },
            {
              question: "Which trigger shows popover on hover?",
              options: ["data-bs-trigger='hover'", "data-trigger='hover'", "hover", "on-hover"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "ScrollSpy",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which attribute enables ScrollSpy?",
              options: ["data-bs-spy='scroll'", "data-spy='scroll'", "scrollspy", "data-scrollspy"],
              correctAnswer: 0,
            },
            {
              question: "How do you set ScrollSpy target?",
              options: ["data-bs-target", "data-target", "target", "scrollspy-target"],
              correctAnswer: 0,
            },
            {
              question: "Which attribute sets ScrollSpy offset?",
              options: ["data-bs-offset", "data-offset", "offset", "scrollspy-offset"],
              correctAnswer: 0,
            },
            {
              question: "ScrollSpy works with which navigation components?",
              options: ["Navbar and List groups", "Only navbar", "Only lists", "All elements"],
              correctAnswer: 0,
            },
            {
              question: "Which class indicates active ScrollSpy item?",
              options: [".active", ".current", ".scrollspy-active", ".spy-active"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Sidebar Navbar",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class creates a navbar?",
              options: [".navbar", ".navigation", ".nav-bar", ".header"],
              correctAnswer: 0,
            },
            {
              question: "How do you make navbar expand on large screens?",
              options: [".navbar-expand-lg", ".navbar-lg", ".expand-lg", ".large-navbar"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for navbar brand?",
              options: [".navbar-brand", ".brand", ".navbar-logo", ".logo"],
              correctAnswer: 0,
            },
            {
              question: "How do you create navbar navigation?",
              options: [".navbar-nav", ".nav", ".navigation", ".navbar-menu"],
              correctAnswer: 0,
            },
            {
              question: "Which class is used for navbar items?",
              options: [".nav-item", ".navbar-item", ".menu-item", ".item"],
              correctAnswer: 0,
            },
            {
              question: "How do you create navbar links?",
              options: [".nav-link", ".navbar-link", ".menu-link", ".link"],
              correctAnswer: 0,
            },
            {
              question: "Which class creates navbar toggler?",
              options: [".navbar-toggler", ".toggler", ".navbar-toggle", ".menu-toggle"],
              correctAnswer: 0,
            },
            {
              question: "How do you make navbar dark themed?",
              options: [".navbar-dark", ".dark-navbar", ".navbar-theme-dark", ".theme-dark"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes navbar sticky top?",
              options: [".sticky-top", ".navbar-sticky", ".fixed-top", ".stick-top"],
              correctAnswer: 0,
            },
            {
              question: "How do you create offcanvas sidebar?",
              options: [".offcanvas", ".sidebar", ".off-canvas", ".canvas-off"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Border Classes",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class adds border to all sides?",
              options: [".border", ".border-all", ".borders", ".border-full"],
              correctAnswer: 0,
            },
            {
              question: "How do you add border only to top?",
              options: [".border-top", ".border-t", ".top-border", ".border-upper"],
              correctAnswer: 0,
            },
            {
              question: "Which class removes all borders?",
              options: [".border-0", ".no-border", ".border-none", ".remove-border"],
              correctAnswer: 0,
            },
            {
              question: "How do you add primary colored border?",
              options: [".border-primary", ".primary-border", ".border-color-primary", ".border-blue"],
              correctAnswer: 0,
            },
            {
              question: "Which class makes border rounded?",
              options: [".rounded", ".border-rounded", ".round-border", ".border-radius"],
              correctAnswer: 0,
            },
            {
              question: "How do you make border circular?",
              options: [".rounded-circle", ".circle", ".border-circle", ".round-circle"],
              correctAnswer: 0,
            },
            {
              question: "Which class removes border from specific side?",
              options: [".border-top-0", ".no-border-top", ".border-top-none", ".remove-border-top"],
              correctAnswer: 0,
            },
            {
              question: "How do you make border thicker?",
              options: [
                "Use custom CSS",
                ".border-thick",
                ".border-2",
                "Bootstrap doesn't support this"
              ],
              correctAnswer: 0,
            },
            {
              question: "Which class adds border to start (left in LTR)?",
              options: [".border-start", ".border-left", ".border-l", ".start-border"],
              correctAnswer: 0,
            },
            {
              question: "How do you add rounded corners to specific sides?",
              options: [".rounded-top", ".round-top", ".border-radius-top", ".top-rounded"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Alignment Classes",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class centers text?",
              options: [".text-center", ".center-text", ".align-center", ".text-middle"],
              correctAnswer: 0,
            },
            {
              question: "How do you align text to the end (right in LTR)?",
              options: [".text-end", ".text-right", ".align-end", ".end-text"],
              correctAnswer: 0,
            },
            {
              question: "Which class centers a block element?",
              options: [".mx-auto", ".center-block", ".auto-center", ".block-center"],
              correctAnswer: 0,
            },
            {
              question: "How do you vertically center content with flexbox?",
              options: [".align-items-center", ".vertical-center", ".v-center", ".center-vertical"],
              correctAnswer: 0,
            },
            {
              question: "Which class justifies content to center?",
              options: [".justify-content-center", ".justify-center", ".content-center", ".flex-center"],
              correctAnswer: 0,
            },
            {
              question: "How do you align items to flex-start?",
              options: [".align-items-start", ".align-start", ".items-start", ".flex-start"],
              correctAnswer: 0,
            },
            {
              question: "Which class aligns self to center?",
              options: [".align-self-center", ".self-center", ".align-center", ".center-self"],
              correctAnswer: 0,
            },
            {
              question: "How do you justify content to space between?",
              options: [".justify-content-between", ".space-between", ".justify-between", ".content-between"],
              correctAnswer: 0,
            },
            {
              question: "Which class aligns text to start (left in LTR)?",
              options: [".text-start", ".text-left", ".align-start", ".start-text"],
              correctAnswer: 0,
            },
            {
              question: "How do you vertically align inline elements to middle?",
              options: [".align-middle", ".vertical-middle", ".v-middle", ".middle-align"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Padding & Margin",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class adds margin to all sides (size 3)?",
              options: [".m-3", ".margin-3", ".m-all-3", ".ma-3"],
              correctAnswer: 0,
            },
            {
              question: "How do you add padding to top only?",
              options: [".pt-3", ".p-top-3", ".padding-top-3", ".top-padding-3"],
              correctAnswer: 0,
            },
            {
              question: "Which class adds margin to x-axis (left and right)?",
              options: [".mx-3", ".m-x-3", ".margin-x-3", ".m-horizontal-3"],
              correctAnswer: 0,
            },
            {
              question: "How do you add padding to y-axis (top and bottom)?",
              options: [".py-3", ".p-y-3", ".padding-y-3", ".p-vertical-3"],
              correctAnswer: 0,
            },
            {
              question: "Which class removes all margin?",
              options: [".m-0", ".no-margin", ".margin-0", ".remove-margin"],
              correctAnswer: 0,
            },
            {
              question: "How do you add auto margin to left and right?",
              options: [".mx-auto", ".m-auto", ".margin-auto", ".auto-margin"],
              correctAnswer: 0,
            },
            {
              question: "Which class adds padding to start (left in LTR)?",
              options: [".ps-3", ".p-start-3", ".padding-start-3", ".p-left-3"],
              correctAnswer: 0,
            },
            {
              question: "How do you add negative margin to top?",
              options: [".mt-n3", ".m-top-negative-3", ".margin-top-minus-3", ".negative-mt-3"],
              correctAnswer: 0,
            },
            {
              question: "Which class adds margin to end (right in LTR)?",
              options: [".me-3", ".m-end-3", ".margin-end-3", ".m-right-3"],
              correctAnswer: 0,
            },
            {
              question: "What is the largest spacing size in Bootstrap 5?",
              options: ["5", "6", "10", "12"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Offset Classes",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class offsets a column by 2 columns?",
              options: [".offset-2", ".col-offset-2", ".offset-md-2", ".push-2"],
              correctAnswer: 0,
            },
            {
              question: "How do you offset a column on medium screens only?",
              options: [".offset-md-3", ".md-offset-3", ".offset-3-md", ".col-md-offset-3"],
              correctAnswer: 0,
            },
            {
              question: "Which class removes offset on small screens?",
              options: [".offset-sm-0", ".no-offset-sm", ".offset-0-sm", ".remove-offset-sm"],
              correctAnswer: 0,
            },
            {
              question: "What is the maximum offset value?",
              options: ["11", "12", "10", "6"],
              correctAnswer: 0,
            },
            {
              question: "How do you offset a column by 4 on large screens?",
              options: [".offset-lg-4", ".lg-offset-4", ".offset-4-lg", ".col-lg-offset-4"],
              correctAnswer: 0,
            },
            {
              question: "Which class offsets by 1 column on extra large screens?",
              options: [".offset-xl-1", ".xl-offset-1", ".offset-1-xl", ".col-xl-offset-1"],
              correctAnswer: 0,
            },
            {
              question: "How do you reset offset on extra small screens?",
              options: [".offset-0", ".no-offset", ".offset-xs-0", ".remove-offset"],
              correctAnswer: 0,
            },
            {
              question: "Which class offsets by half the container width?",
              options: [".offset-6", ".offset-half", ".offset-50", ".half-offset"],
              correctAnswer: 0,
            },
            {
              question: "How do you offset on extra extra large screens?",
              options: [".offset-xxl-3", ".xxl-offset-3", ".offset-3-xxl", ".col-xxl-offset-3"],
              correctAnswer: 0,
            },
            {
              question: "Can you combine column and offset classes?",
              options: ["Yes", "No", "Only on same breakpoint", "Only on different breakpoints"],
              correctAnswer: 0,
            }
          ]
        },
        {
          title: "Order Classes",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class makes an element appear first?",
              options: [".order-first", ".order-1", ".first-order", ".order-0"],
              correctAnswer: 0,
            },
            {
              question: "How do you make an element appear last?",
              options: [".order-last", ".order-12", ".last-order", ".order-end"],
              correctAnswer: 0,
            },
            {
              question: "Which class sets order to 3?",
              options: [".order-3", ".order-third", ".third-order", ".position-3"],
              correctAnswer: 0,
            },
            {
              question: "How do you set order on medium screens only?",
              options: [".order-md-2", ".md-order-2", ".order-2-md", ".medium-order-2"],
              correctAnswer: 0,
            },
            {
              question: "What is the range of order values in Bootstrap?",
              options: ["0-5", "1-12", "0-12", "first, 1-5, last"],
              correctAnswer: 3,
            }
          ]
        },
        {
          title: "Floating Image",
          explanation: <div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>,
          quizData: [
            {
              question: "Which class floats an image to the left?",
              options: [".float-start", ".float-left", ".pull-left", ".left-float"],
              correctAnswer: 0,
            },
            {
              question: "How do you float an image to the right?",
              options: [".float-end", ".float-right", ".pull-right", ".right-float"],
              correctAnswer: 0,
            },
            {
              question: "Which class removes float?",
              options: [".float-none", ".no-float", ".clear-float", ".remove-float"],
              correctAnswer: 0,
            },
            {
              question: "How do you float left on medium screens only?",
              options: [".float-md-start", ".md-float-left", ".float-left-md", ".medium-float-left"],
              correctAnswer: 0,
            },
            {
              question: "Which class clears floated elements?",
              options: [".clearfix", ".clear", ".clear-both", ".float-clear"],
              correctAnswer: 0,
            }
          ]
        }
      ]
    },
    intermediate: {
      title: "Intermediate Level Bootstrap Quiz",
      explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
      topics: [
        {
          title: "Responsive Utilities & Flexbox",
          quizData: [
            { question: "Which Bootstrap 5 class hides an element only on extra small screens?", "options": [".d-xs-none", ".d-none d-sm-block", ".d-hidden", ".invisible-xs"], correctAnswer: 2 },
            { question: "Which class makes an element visible only on medium screens and larger?", "options": [".d-md-none", ".d-md-block", ".d-block-md", ".visible-md"], correctAnswer: 2 },
            { question: "Which utility class completely hides an element but keeps its space reserved?", "options": [".d-none", ".invisible", ".hidden", ".d-hidden"], correctAnswer: 2 },
            { question: "Which Flexbox class in Bootstrap makes children aligned horizontally?", "options": [".d-flex", ".d-inline", ".d-block", ".flex-h"], correctAnswer: 1 },
            { question: "Which class aligns flex items vertically in a flexbox container?", "options": [".flex-vertical", ".align-items-center", ".flex-v-center", ".flex-align"], correctAnswer: 2 },
            { question: "Which Bootstrap utility makes flex items evenly spaced with equal gaps?", "options": [".justify-content-between", ".justify-content-around", ".justify-content-evenly", ".justify-content-center"], correctAnswer: 3 },
            { question: "Which class makes a flexbox container stack its items vertically?", "options": [".flex-stack", ".flex-column", ".d-block-flex", ".flex-vertical"], correctAnswer: 2 },
            { question: "Which class forces a flex item to take all available space?", "options": [".flex-grow-1", ".flex-fill", ".flex-1", "Both a & b"], correctAnswer: 4 },
            { question: "Which class reverses the horizontal order of flex items?", "options": [".flex-row-reverse", ".row-reverse", ".reverse-flex", ".order-reverse"], correctAnswer: 1 },
            { question: "Which class makes items wrap into multiple lines inside a flex container?", "options": [".flex-multi", ".flex-wrap", ".flex-break", ".flex-row"], correctAnswer: 2 }
          ]
        },
        {
          title: "Advanced Grid Layouts",
          quizData: [
            { question: "In Bootstrap’s grid system, how many columns are there by default?", "options": ["10", "12", "16", "24"], correctAnswer: 2 },
            { question: "Which class creates a grid column that spans 6 columns on medium devices?", "options": [".col-6", ".col-md-6", ".col-lg-6", ".grid-md-6"], correctAnswer: 2 },
            { question: "Which class ensures a column takes equal width automatically?", "options": [".col-auto", ".col", ".col-fluid", ".col-flex"], correctAnswer: 2 },
            { question: "Which Bootstrap class is used to make a column span all 12 columns regardless of screen size?", "options": [".col-sm-12", ".col-md-12", ".col-12", "All of the above"], correctAnswer: 4 },
            { question: "Which utility helps in controlling column order?", "options": [".col-order", ".order-*", ".order-col-*", ".col-sequence-*"], correctAnswer: 2 },
            { question: "Which class creates responsive gutters in the grid system?", "options": [".g-*", ".gap-*", ".m-*", ".p-*"], correctAnswer: 1 },
            { question: "Which class removes all gutters between grid columns?", "options": [".g-0", ".no-gap", ".gap-0", ".m-0"], correctAnswer: 1 },
            { question: "Which class allows a column to automatically size based on its content?", "options": [".col-flex", ".col-auto", ".col-content", ".col-fit"], correctAnswer: 2 },
            { question: "Which class makes a row’s columns stack vertically on smaller devices?", "options": [".row-stack", ".col-sm", ".col-12", "It happens automatically"], correctAnswer: 4 },
            { question: "Which utility class offsets a column by 2 spaces in Bootstrap?", "options": [".col-offset-2", ".offset-2", ".col-ml-2", ".ml-2"], correctAnswer: 2 }
          ]
        },
        {
          title: "Cards Advanced",
          quizData: [
            { question: "Which class is used to overlay text on a card image?", "options": [".card-overlay", ".card-img-overlay", ".overlay-card", ".card-text-overlay"], correctAnswer: 2 },
            { question: "Which class makes a card borderless?", "options": [".card-borderless", ".border-0", ".card-no-border", ".card-flat"], correctAnswer: 2 },
            { question: "Which class adds a background color to a card?", "options": [".card-color", ".bg-*", ".card-bg", ".card-background"], correctAnswer: 2 },
            { question: "Which class is used to make cards equal height in a card group?", "options": [".card-equal", ".card-group", ".card-deck", ".card-align"], correctAnswer: 2 },
            { question: "Which class is used to create a horizontal card layout?", "options": [".card-horizontal", ".row .card", ".card-deck", ".card-inline"], correctAnswer: 3 },
            { question: "Which class is used to make card text muted?", "options": [".card-muted", ".text-muted", ".card-text-muted", ".text-light"], correctAnswer: 2 },
            { question: "Which class adds a shadow to the card?", "options": [".card-shadow", ".shadow", ".card-shadow-lg", ".shadow-card"], correctAnswer: 2 },
            { question: "Which class makes card content align at the bottom?", "options": [".align-bottom", ".card-bottom", ".card-footer", ".mt-auto"], correctAnswer: 4 },
            { question: "Which class creates an image as a full card background?", "options": [".card-img-full", ".card-img", ".card-img-overlay", ".bg-card-img"], correctAnswer: 2 },
            { question: "Which class creates a card with rounded corners?", "options": [".rounded", ".card-rounded", ".card-border-radius", ".rounded-card"], correctAnswer: 1 }
          ]
        },
        {
          title: "Navbar Advanced",
          quizData: [
            { question: "Which class is used to create a responsive navbar in Bootstrap 5?", "options": [".navbar", ".nav", ".nav-responsive", ".navbar-expand"], correctAnswer: 4 },
            { question: "Which class fixes the navbar at the top of the page?", "options": [".navbar-top", ".fixed-top", ".navbar-fixed", ".top-fixed"], correctAnswer: 2 },
            { question: "Which class fixes the navbar at the bottom of the page?", "options": [".navbar-bottom", ".fixed-bottom", ".bottom-fixed", ".navbar-fixed-bottom"], correctAnswer: 2 },
            { question: "Which class makes the navbar dark themed?", "options": [".navbar-dark", ".navbar-bg-dark", ".dark-navbar", ".navbar-black"], correctAnswer: 1 },
            { question: "Which class makes the navbar light themed?", "options": [".navbar-light", ".navbar-bg-light", ".light-navbar", ".navbar-white"], correctAnswer: 1 },
            { question: "Which class is used to make the navbar sticky at the top?", "options": [".sticky-top", ".navbar-sticky", ".top-sticky", ".sticky-navbar"], correctAnswer: 1 },
            { question: "Which class is used to create a collapsible navbar?", "options": [".navbar-toggleable", ".navbar-collapse", ".collapse-navbar", ".navbar-toggle"], correctAnswer: 2 },
            { question: "Which class toggles the visibility of the collapsed navbar menu?", "options": [".navbar-toggle", ".navbar-toggler", ".toggle-nav", ".nav-toggler"], correctAnswer: 2 },
            { question: "Which class adds spacing between navbar items?", "options": [".nav-item", ".navbar-item", ".nav-link", ".navbar-spacing"], correctAnswer: 1 },
            { question: "Which class styles a link inside navbar?", "options": [".nav-link", ".navbar-link", ".link-nav", ".navbar-item-link"], correctAnswer: 1 }
          ]
        },
        {
          title: "Forms Advanced",
          quizData: [
            { question: "Which class is used to create a floating label for an input in Bootstrap 5?", "options": [".floating-label", ".form-floating", ".input-floating", ".label-floating"], correctAnswer: 2 },
            { question: "Which class adds validation styling to a valid input?", "options": [".is-valid", ".valid-input", ".input-valid", ".form-valid"], correctAnswer: 1 },
            { question: "Which class adds validation styling to an invalid input?", "options": [".is-invalid", ".invalid-input", ".input-invalid", ".form-invalid"], correctAnswer: 1 },
            { question: "Which class is used to group multiple form elements in a horizontal layout?", "options": [".form-group", ".row g-3", ".form-row", ".input-group"], correctAnswer: 2 },
            { question: "Which class styles a select menu in Bootstrap 5?", "options": [".form-select", ".select-form", ".input-select", ".select-control"], correctAnswer: 1 },
            { question: "Which class is used to style checkboxes and radios in forms?", "options": [".form-check", ".form-radio", ".check-input", ".radio-input"], correctAnswer: 1 },
            { question: "Which class makes a form control read-only?", "options": ["disabled", "readonly", ".form-readonly", ".readonly-input"], correctAnswer: 2 },
            { question: "Which class makes a form control disabled?", "options": [".disabled", "disabled attribute", ".form-disabled", ".input-disabled"], correctAnswer: 2 },
            { question: "Which class creates an input group with appended or prepended elements?", "options": [".input-group", ".form-group", ".form-input-group", ".input-append"], correctAnswer: 1 },
            { question: "Which attribute is required for proper accessibility of form inputs?", "options": ["id", "name", "for in label", "All of the above"], correctAnswer: 4 }
          ]
        }
      ]
    },
    advanced: {
      title: "Advance Level Bootstrap Quiz",
      explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
      topics: [
        {
          title: "Custom Bootstrap Theme (SCSS variables, colors)",
          quizData: [
            { question: "Which file is used to customize Bootstrap SCSS variables?", "options": ["_variables.scss", "_custom.scss", "bootstrap.scss", "_theme.scss"], correctAnswer: 1 },
            { question: "Which variable changes the primary color in Bootstrap?", "options": ["$primary-color", "$theme-primary", "$primary", "$color-primary"], correctAnswer: 3 },
            { question: "Which SCSS file imports all Bootstrap components?", "options": ["_bootstrap.scss", "bootstrap.scss", "_bootstrap-utilities.scss", "_components.scss"], correctAnswer: 2 },
            { question: "To customize breakpoints, which variable is modified?", "options": ["$grid-breakpoints", "$breakpoints", "$screen-sizes", "$grid-sizes"], correctAnswer: 1 },
            { question: "Which variable sets border radius globally?", "options": ["$radius", "$border-radius", "$rounded", "$border-round"], correctAnswer: 2 },
            { question: "Which variable controls global font family?", "options": ["$font-family-base", "$base-font", "$font-base", "$typography"], correctAnswer: 1 },
            { question: "Which variable sets spacing values globally?", "options": ["$spacers", "$spacing", "$gaps", "$padding"], correctAnswer: 1 },
            { question: "Which file allows overriding default Bootstrap colors?", "options": ["_colors.scss", "_variables.scss", "_theme.scss", "_custom.scss"], correctAnswer: 2 },
            { question: "Which variable sets the default body background color?", "options": ["$body-bg", "$background-color", "$bg-body", "$body-color"], correctAnswer: 1 },
            { question: "Which file compiles SCSS into final CSS?", "options": ["style.scss", "bootstrap.css", "main.scss", "theme.scss"], correctAnswer: 4 }
          ]
        },
        {
          title: "Offcanvas Sidebar & Sticky Components",
          quizData: [
            { question: "Which class creates an offcanvas sidebar?", "options": [".offcanvas", ".sidebar", ".offcanvas-sidebar", ".sidebar-off"], correctAnswer: 1 },
            { question: "Which attribute triggers the offcanvas toggle?", "options": ["data-bs-target", "data-bs-toggle=\"offcanvas\"", "data-toggle=\"sidebar\"", "data-target=\"offcanvas\""], correctAnswer: 2 },
            { question: "Which class positions the offcanvas sidebar from the left?", "options": [".offcanvas-start", ".offcanvas-left", ".sidebar-start", ".sidebar-left"], correctAnswer: 1 },
            { question: "Which class makes a component sticky at the top?", "options": [".sticky-top", ".fixed-top", ".sticky", ".top-fixed"], correctAnswer: 1 },
            { question: "Which class makes a component sticky at the bottom?", "options": [".sticky-bottom", ".fixed-bottom", ".bottom-sticky", ".sticky"], correctAnswer: 1 },
            { question: "Which attribute adds backdrop to an offcanvas sidebar?", "options": ["data-bs-backdrop=\"true\"", "data-backdrop", "data-bs-toggle-backdrop", "data-overlay"], correctAnswer: 1 },
            { question: "Which class adds a header to an offcanvas component?", "options": [".offcanvas-title", ".offcanvas-header", ".offcanvas-top", ".offcanvas-head"], correctAnswer: 2 },
            { question: "Which class closes the offcanvas sidebar?", "options": [".btn-close", ".offcanvas-close", ".close-btn", ".offcanvas-dismiss"], correctAnswer: 1 },
            { question: "Which class wraps the main offcanvas content?", "options": [".offcanvas-body", ".offcanvas-content", ".offcanvas-main", ".offcanvas-wrapper"], correctAnswer: 1 },
            { question: "Which class makes a sticky sidebar scrollable?", "options": [".overflow-auto", ".scrollable", ".sticky-scroll", ".scroll-auto"], correctAnswer: 1 }
          ]
        },
        {
          title: "Advanced Carousel (multi-item, custom controls)",
          quizData: [
            { question: "Which class initializes a carousel in Bootstrap 5?", "options": [".carousel", ".slider", ".carousel-init", ".slide"], correctAnswer: 1 },
            { question: "Which class is used for carousel inner container?", "options": [".carousel-inner", ".carousel-content", ".carousel-wrapper", ".carousel-body"], correctAnswer: 1 },
            { question: "Which class represents each item in a carousel?", "options": [".carousel-item", ".carousel-slide", ".carousel-block", ".slide-item"], correctAnswer: 1 },
            { question: "Which class makes the carousel slide automatically?", "options": ["data-bs-ride=\"carousel\"", "data-bs-slide=\"auto\"", ".carousel-auto", ".carousel-ride"], correctAnswer: 1 },
            { question: "Which class is used for previous and next controls?", "options": [".carousel-control-prev / .carousel-control-next", ".carousel-prev / .carousel-next", ".slide-prev / .slide-next", ".control-prev / .control-next"], correctAnswer: 1 },
            { question: "Which attribute links the control buttons to the carousel?", "options": ["data-bs-target", "data-bs-slide-to", "data-target", "data-slide"], correctAnswer: 1 },
            { question: "Which class is used for indicators (dots) in a carousel?", "options": [".carousel-indicators", ".carousel-dots", ".indicator", ".carousel-nav"], correctAnswer: 1 },
            { question: "Which class makes multiple items visible per slide?", "options": ["Custom CSS with .carousel-item and grid/flex", ".carousel-multi", ".carousel-group", ".multi-item"], correctAnswer: 1 },
            { question: "Which class adds fade transition between slides?", "options": [".carousel-fade", ".fade-carousel", ".carousel-transition", ".carousel-animation"], correctAnswer: 1 },
            { question: "Which class hides carousel controls for smaller screens?", "options": [".d-none d-md-block", ".carousel-hide-sm", ".hide-controls", ".controls-none"], correctAnswer: 1 }
          ]
        }
      ]
    }
  }), []);

  const questions = useMemo(() => {
    return htmlContent[activeLevel].topics[activeTopicIndex].quizData || [];
  }, [htmlContent, activeLevel, activeTopicIndex]);

  useEffect(() => {
    setShowTimeAlert(false);
  }, [currentQuestion]);

  useEffect(() => {
    if (
      quizStarted &&
      !quizFinished &&
      timeLeft === 10 &&
      selectedAnswer === null
    ) {
      setShowTimeAlert(true);
      const timer = setTimeout(() => {
        setShowTimeAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, quizStarted, quizFinished, selectedAnswer]);

  useEffect(() => {
    if (selectedAnswer !== null && showTimeAlert) {
      setShowTimeAlert(false);
    }
  }, [selectedAnswer, showTimeAlert]);

  useEffect(() => {
    if (quizStarted && !quizFinished) {
      setTimeLeft(30);
    }
  }, [currentQuestion, quizStarted, quizFinished]);

  const handleNextQuestion = useCallback(() => {
    setShowTimeAlert(false);

    if (answers[currentQuestion] === undefined) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestion]: selectedAnswer
      }));

      if (selectedAnswer !== null && selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }

    if (currentQuestion < questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      setSelectedAnswer(answers[nextQ] ?? null);
    } else {
      setQuizFinished(true);
    }
  }, [selectedAnswer, currentQuestion, answers, questions]);

  // Timer useEffect کو modify کریں
  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    if (timeLeft === 0) {
      // Timer کو clear کریں پہلے
      const timer = setTimeout(() => {
        handleNextQuestion();
      }, 100); // Small delay to prevent double execution

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, quizFinished, handleNextQuestion]);


  useEffect(() => {
    if (quizFinished) {
      setShowResultModal(true);
    }
  }, [quizFinished]);

  const handleTopicClick = (index) => {
    setActiveTopicIndex(index);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setAnswers({});
    setShowTimeAlert(false);
  };

  const handleAnswerSelect = (index) => {
    if (answers[currentQuestion] !== undefined) return;
    setSelectedAnswer(index);
  };

  const handlePreviousQuestion = () => {
    setShowTimeAlert(false);

    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      setSelectedAnswer(answers[prevQ] ?? null);
    }
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setAnswers({});
    setScore(0);
    setShowResultModal(false);
    setShowTimeAlert(false);
  };

  const isCurrentQuestionAnswered = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <header className="container mx-auto text-center mb-8 p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg mt-28">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Complete Bootstrap Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master Bootstrap from Beginner to Advanced Level through interactive quizzes,
        </p>
      </header>

      <div className={`${quizStarted && !quizFinished ? "app-disabled" : ""}`}>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 max-w-5xl mx-auto container">
          {Object.keys(htmlContent).map((level) => (
            <button
              key={level}
              className={`p-3 sm:p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${activeLevel === level
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              onClick={() => {
                setActiveLevel(level);
                setActiveTopicIndex(0);
                setQuizStarted(false);
                setQuizFinished(false);
                setAnswers({});
                setScore(0);
                setSelectedAnswer(null);
                setShowTimeAlert(false);
              }}
            >
              {htmlContent[level].title}
            </button>
          ))}
        </nav>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className={`lg:col-span-1 bg-white rounded-xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-6 ${quizStarted && !quizFinished ? "app-disabled" : ""}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            {htmlContent[activeLevel].title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {htmlContent[activeLevel].topics.map((topic, index) => (
              <button
                key={index}
                className={`p-3 text-left rounded-lg transition-all duration-300 text-sm ${activeTopicIndex === index
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => handleTopicClick(index)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden p-6">
          {!quizStarted && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  htmlContent[activeLevel].topics[activeTopicIndex]
                    ?.explanation || "<p>No topic explanation available.</p>",
              }}
            />
          )}

          {quizStarted && !quizFinished && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Question {currentQuestion + 1} of {questions.length}
                </h2>
                <div className="flex items-center bg-red-100 text-red-700 py-1 px-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 296c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V296z" /></svg>
                  <span className="font-medium">{timeLeft}s</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-200 ${selectedAnswer === index
                        ? "border-blue-500 bg-blue-50"
                        : isCurrentQuestionAnswered
                          ? "border-gray-300 bg-gray-100"
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                        } ${isCurrentQuestionAnswered
                          ? "cursor-not-allowed opacity-75"
                          : "cursor-pointer"
                        }`}
                      onClick={() => {
                        if (!isCurrentQuestionAnswered) {
                          handleAnswerSelect(index);
                        }
                      }}
                    >
                      <div className="flex items-center select-none">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedAnswer === index
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-gray-400"
                            }`}
                        >
                          {selectedAnswer === index && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 fill-current"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                          )}
                        </div>
                        <span className={isCurrentQuestionAnswered ? "text-gray-600" : ""}>
                          {option}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className={`flex items-center py-2 px-4 rounded-lg ${currentQuestion === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 mr-2 fill-current"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l105.5-105.5c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                  Previous
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null && !isCurrentQuestionAnswered}
                  className={`flex items-center py-2 px-4 rounded-lg ${selectedAnswer === null && !isCurrentQuestionAnswered
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    }`}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 ml-2 fill-current"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H338.8l-105.5 105.5c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      {showTimeAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-4 rounded-lg shadow-xl z-50 border-2 border-yellow-500 animate-bounce">
          <div className="flex items-center font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 296c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V296z" /></svg>
            <span>Only 10 seconds left! Please select an option.</span>
          </div>
        </div>
      )}

      {showResultModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowResultModal(false)}
              aria-label="Close results modal"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Results</h2>
            <div className="text-xl mb-4">
              You scored {score} out of {questions.length}
            </div>
            <div className="text-lg mb-6">
              Percentage: {((score / questions.length) * 100).toFixed(2)}%
            </div>

            <div className="w-full bg-gray-300 rounded-full h-6 mb-6 overflow-hidden">
              <div
                className="bg-blue-600 h-6 flex items-center justify-center text-white font-semibold transition-all duration-500"
                style={{ width: `${(score / questions.length) * 100}%` }}
              >
                {(score / questions.length) * 100 >= 50 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 mr-2 fill-current"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mr-2 fill-current"><path d="M400 240H112c-8.8 0-16 7.2-16 16s7.2 16 16 16H400c8.8 0 16-7.2 16-16s-7.2-16-16-16z" /></svg>
                )}
                {((score / questions.length) * 100).toFixed(2)}%
              </div>
            </div>

            <button
              onClick={() => {
                setShowResultModal(false);
                handleResetQuiz();
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Close & Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootstrapQuize;
